import { track } from './analytics'
import { toast } from './toast'

/** "Cite BibTeX" / "Abstract preview" drawers and BibTeX copy. */
export const initPubs = () => {
  document.querySelectorAll<HTMLElement>('[data-pub]').forEach((pub) => {
    const paperId = pub.dataset.pub ?? ''
    const toggles = [
      ...pub.querySelectorAll<HTMLButtonElement>('button[aria-controls]'),
    ]
    toggles.forEach((btn) =>
      btn.addEventListener('click', () => {
        const opening = btn.getAttribute('aria-expanded') !== 'true'
        // At most one drawer open per paper.
        toggles.forEach((b) => {
          const on = b === btn && opening
          b.setAttribute('aria-expanded', String(on))
          const drawer = document.getElementById(
            b.getAttribute('aria-controls') ?? ''
          )
          if (drawer) {
            drawer.hidden = !on
          }
        })
        const kind = btn.getAttribute('aria-controls')?.startsWith('bib-')
          ? 'bibtex_toggle'
          : 'abstract_toggle'
        track(kind, {
          paper_id: paperId,
          state: opening ? 'open' : 'close',
        })
      })
    )

    pub.querySelector('[data-copy]')?.addEventListener('click', async () => {
      const text = pub.querySelector('pre')?.textContent ?? ''
      try {
        await navigator.clipboard.writeText(text)
        toast('BibTeX copied to clipboard.')
        track('bibtex_copy', { paper_id: paperId, success: 'yes' })
      } catch {
        toast('Clipboard blocked here. Select the text to copy it.')
        track('bibtex_copy', { paper_id: paperId, success: 'no' })
      }
    })
  })
}
