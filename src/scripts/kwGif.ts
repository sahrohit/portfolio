/**
 * Hovering a keyword (any element with `data-gif`) pops a GIF card above it,
 * or below when there's no room. Mouse only; GIFs load on first hover.
 */
export const initKwGif = () => {
  const pop = document.querySelector<HTMLElement>('[data-gifpop]')
  const card = pop?.querySelector<HTMLElement>('.gifcard')
  const img = pop?.querySelector('img')
  if (!pop || !card || !img) {
    return
  }

  let current: HTMLElement | null = null

  const hide = () => {
    if (current) {
      current = null
      pop.hidden = true
    }
  }

  const show = (el: HTMLElement) => {
    current = el
    const r = el.getBoundingClientRect()
    const vw = document.documentElement.clientWidth
    const x = Math.min(Math.max(r.left + r.width / 2, 156), vw - 156)
    const below = r.top < 210
    pop.style.left = `${Math.round(x)}px`
    pop.style.top = `${Math.round(below ? r.bottom + 16 : r.top - 16)}px`
    pop.style.transform = below ? 'translateX(-50%)' : 'translate(-50%, -100%)'
    card.className = below ? 'gifcard below' : 'gifcard'
    const src = el.dataset.gif ?? ''
    if (img.getAttribute('src') !== src) {
      img.src = src
    }
    pop.hidden = false
  }

  document.addEventListener('pointerover', (e) => {
    if (e.pointerType !== 'mouse') {
      return
    }
    const el = (e.target as Element).closest<HTMLElement>('[data-gif]')
    if (el && el !== current) {
      show(el)
    }
  })

  document.addEventListener('pointerout', (e) => {
    if (!current) {
      return
    }
    const to = e.relatedTarget as Node | null
    if (!to || !current.contains(to)) {
      hide()
    }
  })

  addEventListener('scroll', hide, { passive: true })
  document.addEventListener('click', hide)
}
