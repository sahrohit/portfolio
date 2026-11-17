import { track } from './analytics'

/** Mobile menu: a native popover; this only closes it after navigation. */
export const initNav = () => {
  const menu = document.getElementById('mnav')
  if (!menu?.hidePopover) {
    return
  }
  const close = () => {
    if (menu.matches(':popover-open')) {
      menu.hidePopover()
    }
  }

  // Close on link tap; the hash link still scrolls to its section.
  menu.addEventListener('click', (e) => {
    if ((e.target as Element).closest('a')) {
      close()
    }
  })

  menu.addEventListener('toggle', (e) => {
    track('mobile_menu', { state: (e as ToggleEvent).newState })
  })

  matchMedia('(min-width: 901px)').addEventListener('change', (e) => {
    if (e.matches) {
      close()
    }
  })
}
