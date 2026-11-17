import { track } from './analytics'

// The initial theme comes from the OS (inline script in BaseLayout's <head>).
// The toggle overrides it for this visit only; nothing is saved.

export const initTheme = () => {
  const btn = document.getElementById('theme-toggle')
  if (!btn) {
    return
  }
  const root = document.documentElement
  let manual = false

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
    manual = true
    sync()
    track('theme_toggle', { theme: next })
  })

  // Follow the OS setting live, unless the visitor picked a theme this visit.
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!manual) {
      root.dataset.theme = e.matches ? 'dark' : 'light'
      sync()
    }
  })
}
