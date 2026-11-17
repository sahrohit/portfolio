import { nodes, initialNode, neighbours } from '@/data/stack'
import { track, trackOnce } from './analytics'

const SVG_NS = 'http://www.w3.org/2000/svg'
const DRAG_THRESHOLD = 6
const HOVER_FIRE_MS = 700
const AMBIENT_MS = 1500
const PACKET_TTL_MS = 2000

type Drag = { id: string; sx: number; sy: number; moved: boolean }

/** The draggable "packet-router.live" stack graph in the About section. */
export const initRouter = () => {
  const root = document.querySelector<HTMLElement>('[data-router]')
  const board = root?.querySelector<HTMLElement>('[data-board]')
  const svg = board?.querySelector('svg')
  const packets = board?.querySelector<SVGGElement>('[data-packets]')
  if (!root || !board || !svg || !packets) {
    return
  }

  const edgeEls = [
    ...board.querySelectorAll<SVGLineElement>('[data-edges] line'),
  ]
  const buttons = new Map(
    [...board.querySelectorAll<HTMLButtonElement>('.node')].map((b) => [
      b.dataset.id ?? '',
      b,
    ])
  )
  const byId = new Map(nodes.map((n) => [n.id, n]))
  const pos = new Map(nodes.map((n) => [n.id, { x: n.x, y: n.y }]))
  const inspect = {
    label: root.querySelector('[data-inspect-label]'),
    use: root.querySelector('[data-inspect-use]'),
    links: root.querySelector('[data-inspect-links]'),
  }
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches

  let w = 720
  let h = 420
  let active = initialNode
  let drag: Drag | null = null
  let justDragged = false
  let lastHover = 0
  let onScreen = false

  const point = (id: string) => {
    const p = pos.get(id) ?? { x: 0, y: 0 }
    return { x: (p.x * w) / 100, y: (p.y * h) / 100 }
  }

  const placeLine = (el: SVGLineElement, a: string, b: string) => {
    const p = point(a)
    const q = point(b)
    el.setAttribute('x1', p.x.toFixed(1))
    el.setAttribute('y1', p.y.toFixed(1))
    el.setAttribute('x2', q.x.toFixed(1))
    el.setAttribute('y2', q.y.toFixed(1))
  }

  const drawEdges = () =>
    edgeEls.forEach((el) =>
      placeLine(el, el.dataset.a ?? '', el.dataset.b ?? '')
    )

  const measure = () => {
    const nw = board.offsetWidth
    const nh = board.offsetHeight
    if (!nw || !nh || (Math.abs(nw - w) <= 1 && Math.abs(nh - h) <= 1)) {
      return
    }
    w = nw
    h = nh
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`)
    drawEdges()
  }

  const activate = (id: string) => {
    active = id
    const near = neighbours(id)
    buttons.forEach((b, bid) => {
      b.classList.toggle('on', bid === id)
      b.classList.toggle('near', near.includes(bid))
    })
    edgeEls.forEach((el) =>
      el.classList.toggle('on', el.dataset.a === id || el.dataset.b === id)
    )
    const n = byId.get(id)
    if (n && inspect.label && inspect.use && inspect.links) {
      inspect.label.textContent = n.label
      inspect.use.textContent = n.use
      inspect.links.textContent = near
        .map((x) => byId.get(x)?.label)
        .join(' · ')
    }
  }

  const packet = (a: string, b: string, cls: string) => {
    const el = document.createElementNS(SVG_NS, 'line')
    el.setAttribute('class', cls)
    el.setAttribute('pathLength', '100')
    placeLine(el, a, b)
    packets.append(el)
    window.setTimeout(() => el.remove(), PACKET_TTL_MS)
  }

  /** Send packets one hop to every neighbour, then up to two hops onward. */
  const fire = (id: string) => {
    neighbours(id).forEach((b) => {
      packet(id, b, 'pkt')
      neighbours(b)
        .filter((c) => c !== id)
        .slice(0, 2)
        .forEach((c) => packet(b, c, 'pkt h2'))
    })
  }

  board.addEventListener('pointerdown', (e) => {
    const btn = (e.target as Element).closest<HTMLButtonElement>('.node')
    if (!btn?.dataset.id) {
      return
    }
    try {
      btn.setPointerCapture(e.pointerId)
    } catch {
      // Capture is best-effort; moves still reach the board.
    }
    drag = { id: btn.dataset.id, sx: e.clientX, sy: e.clientY, moved: false }
  })

  board.addEventListener('pointermove', (e) => {
    if (!drag) {
      return
    }
    if (
      !drag.moved &&
      Math.abs(e.clientX - drag.sx) + Math.abs(e.clientY - drag.sy) <
        DRAG_THRESHOLD
    ) {
      return
    }
    drag.moved = true
    const r = board.getBoundingClientRect()
    const x = Math.min(94, Math.max(6, ((e.clientX - r.left) / r.width) * 100))
    const y = Math.min(92, Math.max(8, ((e.clientY - r.top) / r.height) * 100))
    pos.set(drag.id, { x, y })
    const btn = buttons.get(drag.id)
    if (btn) {
      btn.style.left = `${x.toFixed(2)}%`
      btn.style.top = `${y.toFixed(2)}%`
      btn.classList.add('drag')
    }
    if (active !== drag.id) {
      activate(drag.id)
    }
    drawEdges()
  })

  const endDrag = () => {
    const d = drag
    drag = null
    if (d?.moved) {
      justDragged = true
      buttons.get(d.id)?.classList.remove('drag')
      fire(d.id)
      track('router_node', { node: d.id, action: 'drag' })
      window.setTimeout(() => (justDragged = false), 60)
    }
  }
  board.addEventListener('pointerup', endDrag)
  board.addEventListener('pointercancel', endDrag)

  buttons.forEach((btn, id) => {
    btn.addEventListener('click', () => {
      if (justDragged) {
        justDragged = false
        return
      }
      activate(id)
      fire(id)
      track('router_node', { node: id, action: 'click' })
    })
    const enter = (e: Event) => {
      if (drag) {
        return
      }
      if (active !== id) {
        activate(id)
      }
      const t = Date.now()
      if (t - lastHover > HOVER_FIRE_MS) {
        lastHover = t
        fire(id)
      }
      // Hovers are frequent: count each node once per page view.
      const action = e.type === 'focus' ? 'focus' : 'hover'
      trackOnce(`node:${action}:${id}`, 'router_node', { node: id, action })
    }
    btn.addEventListener('mouseenter', enter)
    btn.addEventListener('focus', enter)
  })

  new ResizeObserver(measure).observe(board)
  new IntersectionObserver(([entry]) => {
    onScreen = Boolean(entry?.isIntersecting)
  }).observe(board)

  window.setTimeout(() => fire(initialNode), 600)

  if (!reduced) {
    window.setInterval(() => {
      const edge = edgeEls[Math.floor(Math.random() * edgeEls.length)]
      const a = edge?.dataset.a
      const b = edge?.dataset.b
      if (document.hidden || drag || !onScreen || !a || !b) {
        return
      }
      const flip = Math.random() < 0.5
      packet(flip ? b : a, flip ? a : b, 'pkt amb')
    }, AMBIENT_MS)
  }
}
