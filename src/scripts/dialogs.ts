import { setMatrix } from './matrix'
import { toast } from './toast'

const dialog = (id: string) =>
  document.getElementById(id) as HTMLDialogElement | null

const open = (id: string) => {
  const d = dialog(id)
  if (d && !d.open) {
    d.showModal()
  }
}

/** Arsenal drawer, pill chooser and postcard (native <dialog>s). */
export const initDialogs = () => {
  document.addEventListener('click', (e) => {
    const target = e.target as Element
    const opener = target.closest<HTMLElement>('[data-open]')
    if (opener?.dataset.open) {
      open(opener.dataset.open)
      return
    }
    if (target.closest('[data-close]')) {
      target.closest('dialog')?.close()
      return
    }
    // A click on the dialog element itself, outside its box, is the backdrop.
    if (target instanceof HTMLDialogElement && target.open) {
      const r = target.getBoundingClientRect()
      const { clientX: x, clientY: y } = e
      if (x < r.left || x > r.right || y < r.top || y > r.bottom) {
        target.close()
      }
    }
  })

  document.querySelectorAll<HTMLElement>('[data-pill]').forEach((btn) =>
    btn.addEventListener('click', () => {
      dialog('pill')?.close()
      if (btn.dataset.pill === 'blue') {
        open('postcard')
      } else {
        setMatrix(true)
        toast('Stream mode on. Every pixel is now an event. Esc to leave.')
      }
    })
  )

  initGrep()
}

/** Filter the arsenal chips as you type. */
const initGrep = () => {
  const input = document.getElementById('arsenal-q') as HTMLInputElement | null
  const drawer = dialog('arsenal')
  if (!input || !drawer) {
    return
  }
  const cats = [...drawer.querySelectorAll<HTMLElement>('[data-cat]')]
  const empty = drawer.querySelector<HTMLElement>('.no-match')

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase()
    let anyHit = false
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
      anyHit ||= n > 0
    })
    if (empty) {
      empty.hidden = anyHit
    }
  })
}
