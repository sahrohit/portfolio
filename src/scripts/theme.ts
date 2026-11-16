// The initial theme is applied by the inline script in BaseLayout's <head>.

const KEY = 'theme'

const stored = () => {
  try {
    return localStorage.getItem(KEY)
  } catch {
    return null
  }
}

export const initTheme = () => {
  const btn = document.getElementById('theme-toggle')
  if (!btn) {
    return
  }
  const root = document.documentElement
  const sync = () =>
    btn.setAttribute(
      'aria-label',
      root.dataset.theme === 'dark'
        ? 'Switch to light theme'
        : 'Switch to dark theme'
    )
  sync()

  btn.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark'
    root.dataset.theme = next
    try {
      localStorage.setItem(KEY, next)
    } catch {
      // Storage blocked: the choice still applies for this visit.
    }
    sync()
  })

  // Follow the OS setting until the visitor picks a theme themselves.
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!stored()) {
      root.dataset.theme = e.matches ? 'dark' : 'light'
      sync()
    }
  })
}
