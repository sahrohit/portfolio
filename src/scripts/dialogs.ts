import { track } from './analytics'
import { setMatrix } from './matrix'
import { toast } from './toast'

type CloseVia = 'button' | 'backdrop' | 'escape' | 'choice'

const SEARCH_DEBOUNCE_MS = 1000

const dialog = (id: string) =>
  document.getElementById(id) as HTMLDialogElement | null

const open = (id: string) => {
  const d = dialog(id)
  if (d && !d.open) {
    d.showModal()
    track('dialog_open', { dialog: id })
  }
}

// How each dialog is being closed, read back by its `close` event.
const closing = new WeakMap<HTMLDialogElement, CloseVia>()

const close = (d: HTMLDialogElement | null, via: CloseVia) => {
  if (d?.open) {
    closing.set(d, via)
    d.close()
  }
}

/** Arsenal modal, pill chooser and postcard (native <dialog>s). */
export const initDialogs = () => {
  document.querySelectorAll<HTMLDialogElement>('dialog').forEach((d) => {
    d.addEventListener('cancel', () => closing.set(d, 'escape'))
    d.addEventListener('close', () => {
      track('dialog_close', { dialog: d.id, via: closing.get(d) ?? 'escape' })
      closing.delete(d)
    })
  })

  document.addEventListener('click', (e) => {
    const target = e.target as Element
    const opener = target.closest<HTMLElement>('[data-open]')
    if (opener?.dataset.open) {
      open(opener.dataset.open)
      return
    }
    if (target.closest('[data-close]')) {
      close(target.closest('dialog'), 'button')
      return
    }
    // A click on the dialog element itself, outside its box, is the backdrop.
    if (target instanceof HTMLDialogElement && target.open) {
      const r = target.getBoundingClientRect()
      const { clientX: x, clientY: y } = e
      if (x < r.left || x > r.right || y < r.top || y > r.bottom) {
        close(target, 'backdrop')
      }
    }
  })

  document.querySelectorAll<HTMLElement>('[data-pill]').forEach((btn) =>
    btn.addEventListener('click', () => {
      const pill = btn.dataset.pill === 'blue' ? 'blue' : 'red'
      track('pill_choice', { pill })
      close(dialog('pill'), 'choice')
      if (pill === 'blue') {
        open('postcard')
      } else {
        setMatrix(true, 'pill')
        toast('Stream mode on. Every pixel is now an event. Esc to leave.')
      }
    })
  )

  initGrep()
}

/** Filter the arsenal chips as you type. */
const initGrep = () => {
  const input = document.getElementById('arsenal-q') as HTMLInputElement | null
  const modal = dialog('arsenal')
  if (!input || !modal) {
    return
  }
  const cats = [...modal.querySelectorAll<HTMLElement>('[data-cat]')]
  const empty = modal.querySelector<HTMLElement>('.no-match')
  let searchTimer: number | undefined
  let lastSearch = ''

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase()
    let results = 0
    cats.forEach((cat) => {
      const catHit = Boolean(q) && (cat.dataset.cat ?? '').includes(q)
      let n = 0
      cat.querySelectorAll<HTMLElement>('[data-item]').forEach((item) => {
        const hit = !q || catHit || (item.dataset.item ?? '').includes(q)
        item.hidden = !hit
        n += hit ? 1 : 0
      })
      cat.hidden = n === 0
      const count = cat.querySelector('[data-count]')
      if (count) {
        count.textContent = String(n)
      }
      results += n
    })
    if (empty) {
      empty.hidden = results > 0
    }

    // Report the settled term, not every keystroke (GA4 recommended event).
    window.clearTimeout(searchTimer)
    searchTimer = window.setTimeout(() => {
      if (q && q !== lastSearch) {
        lastSearch = q
        track('search', { search_term: q, results })
      }
    }, SEARCH_DEBOUNCE_MS)
  })
}
