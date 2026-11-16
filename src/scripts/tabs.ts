/** Company tabs in the Experience section (WAI-ARIA tabs pattern). */
export const initTabs = () => {
  const list = document.querySelector<HTMLElement>('[data-tabs]')
  if (!list) {
    return
  }
  const tabs = [...list.querySelectorAll<HTMLButtonElement>('[role="tab"]')]
  const panelOf = (tab: HTMLElement) =>
    document.getElementById(tab.getAttribute('aria-controls') ?? '')

  // Restart the row slide-in and trace-bar animations.
  const replay = (panel: HTMLElement) => {
    const animated = panel.querySelectorAll('.row, .bar')
    animated.forEach((el) => el.classList.remove('play'))
    void panel.offsetWidth
    animated.forEach((el) => el.classList.add('play'))
  }

  const select = (tab: HTMLButtonElement, focus: boolean) => {
    tabs.forEach((t) => {
      const on = t === tab
      t.setAttribute('aria-selected', String(on))
      t.tabIndex = on ? 0 : -1
      const panel = panelOf(t)
      if (panel) {
        panel.hidden = !on
        if (on) {
          replay(panel)
        }
      }
    })
    if (focus) {
      tab.focus()
    }
  }

  list.addEventListener('click', (e) => {
    const tab = (e.target as Element).closest<HTMLButtonElement>('[role="tab"]')
    if (tab) {
      select(tab, false)
    }
  })

  list.addEventListener('keydown', (e) => {
    const i = tabs.indexOf(document.activeElement as HTMLButtonElement)
    if (i < 0) {
      return
    }
    const last = tabs.length - 1
    const next: Record<string, number> = {
      ArrowRight: i === last ? 0 : i + 1,
      ArrowLeft: i === 0 ? last : i - 1,
      Home: 0,
      End: last,
    }
    const target = tabs[next[e.key] ?? -1]
    if (target) {
      e.preventDefault()
      select(target, true)
    }
  })
}
