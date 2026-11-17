const DEFAULT_SPEED = 0.35

/**
 * Drift the ghost numerals, marks and blog cards relative to their section as
 * it scrolls past the middle of the viewport.
 */
export const initParallax = () => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }
  const items = [
    ...document.querySelectorAll<HTMLElement>('.ghost, [data-speed]'),
  ].map((el) => {
    const sp = parseFloat(el.dataset.speed ?? '')
    return { el, speed: Number.isNaN(sp) ? DEFAULT_SPEED : sp }
  })

  // On phones the sections sit below the profile, so drifting decorations
  // would float up over it; parallax is desktop-only.
  const stacked = matchMedia('(max-width: 900px)')

  let raf = 0
  const run = () => {
    raf = 0
    if (stacked.matches) {
      items.forEach(({ el }) => (el.style.transform = ''))
      return
    }
    const vh = window.innerHeight || 800
    const mid = vh / 2
    // Read every rect first, then write, so layout is flushed once.
    const offsets = items.map(({ el, speed }) => {
      const r = el.parentElement?.getBoundingClientRect()
      if (!r || r.bottom < -vh || r.top > vh * 2) {
        return null
      }
      return (r.top + Math.min(r.height, vh) / 2 - mid) * speed
    })
    items.forEach(({ el }, i) => {
      const y = offsets[i]
      if (y != null) {
        el.style.transform = `translate3d(0,${y.toFixed(1)}px,0)`
      }
    })
  }
  const schedule = () => {
    if (!raf) {
      raf = requestAnimationFrame(run)
    }
  }

  addEventListener('scroll', schedule, { passive: true })
  addEventListener('resize', schedule, { passive: true })
  // First pass on the next frame, so startup doesn't force a layout.
  schedule()
}
