let timer: number | undefined

/** Show a short status message in the bottom-right corner. */
export const toast = (msg: string) => {
  const region = document.querySelector<HTMLElement>('[data-toast-region]')
  if (!region) {
    return
  }
  window.clearTimeout(timer)
  const el = document.createElement('div')
  el.className = 'toast mono'
  const bullet = document.createElement('span')
  bullet.className = 'bullet'
  bullet.textContent = '●'
  el.append(bullet, ` ${msg}`)
  region.replaceChildren(el)
  timer = window.setTimeout(() => region.replaceChildren(), 2800)
}
