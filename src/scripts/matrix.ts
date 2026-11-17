import { track } from './analytics'

const WORDS = [
  'ACK',
  'offset=',
  'trade.validated',
  'orders-inbound',
  'p0',
  'p3',
  'dlq',
  'commit',
  'gRPC',
  'OK',
  '200',
  'route',
  'k8s',
  'lambda.ok',
  'seq',
]

let built = false

/** 16 columns of deterministic fake event-log text, scrolled by CSS. */
const buildStream = (host: HTMLElement) => {
  const cols = Array.from({ length: 16 }, (_, i) => {
    const lines = Array.from({ length: 46 }, (_, j) => {
      const w = WORDS[(i * 7 + j * 3) % WORDS.length]!
      const hex = (((i + 3) * 2654435761 + j * 40503) >>> 0)
        .toString(16)
        .slice(0, 6)
      return w === 'offset=' ? `${w}${2048 + i * 37 + j}` : `${w} ${hex}`
    })
    const block = lines.join('\n')
    const el = document.createElement('div')
    el.className = 'stream'
    el.style.left = `${(i * 6.4).toFixed(1)}%`
    el.style.animationDuration = `${(16 + ((i * 7) % 11) * 1.7).toFixed(1)}s`
    el.textContent = `${block}\n${block}`
    return el
  })
  host.replaceChildren(...cols)
}

/** Red-pill "stream mode": recolours the page and shows the event stream. */
export const setMatrix = (on: boolean, via: 'pill' | 'button' | 'escape') => {
  const root = document.documentElement
  if (root.hasAttribute('data-matrix') === on) {
    return
  }
  const host = document.querySelector<HTMLElement>('[data-matrix-bg]')
  const exit = document.querySelector<HTMLElement>('[data-matrix-exit]')
  if (on && host && !built) {
    buildStream(host)
    built = true
  }
  root.toggleAttribute('data-matrix', on)
  if (exit) {
    exit.hidden = !on
  }
  track('matrix_mode', { state: on ? 'on' : 'off', via })
}

export const initMatrix = () => {
  document
    .querySelector('[data-matrix-exit]')
    ?.addEventListener('click', () => setMatrix(false, 'button'))
  document.addEventListener('keydown', (e) => {
    if (
      e.key === 'Escape' &&
      document.documentElement.hasAttribute('data-matrix')
    ) {
      setMatrix(false, 'escape')
    }
  })
}
