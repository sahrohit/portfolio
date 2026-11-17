// Google Analytics events. gtag is defined by BaseLayout only in production
// builds with PUBLIC_GA_TRACKING_ID set; events fired before gtag.js loads
// (it's injected on idle) queue in dataLayer and are sent once it arrives.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

type Params = Record<string, string | number>

const clip = (params: Params): Params =>
  Object.fromEntries(
    Object.entries(params).map(([k, v]) => [
      k,
      typeof v === 'string' ? v.slice(0, 100) : v,
    ])
  )

export const track = (name: string, params: Params = {}) => {
  const p = clip(params)
  window.gtag?.('event', name, p)
  if (import.meta.env.DEV) {
    console.debug('[ga]', name, p)
  }
}

const sent = new Set<string>()

/** Track an event at most once per page view, keyed by `key`. */
export const trackOnce = (key: string, name: string, params: Params = {}) => {
  if (!sent.has(key)) {
    sent.add(key)
    track(name, params)
  }
}

// data-ga-paper-id → paper_id
const paramName = (key: string) =>
  key
    .slice(2)
    .replace(/^[A-Z]/, (c) => c.toLowerCase())
    .replace(/[A-Z]/g, (c) => `_${c.toLowerCase()}`)

/**
 * Declarative click tracking: any element with `data-ga="event_name"` sends
 * that event, with its `data-ga-*` attributes as params.
 */
const initClickTracking = () => {
  document.addEventListener(
    'click',
    (e) => {
      const el = (e.target as Element).closest<HTMLElement>('[data-ga]')
      if (!el?.dataset.ga) {
        return
      }
      const params = Object.fromEntries(
        Object.entries(el.dataset)
          .filter(([k, v]) => k.startsWith('ga') && k !== 'ga' && v)
          .map(([k, v]) => [paramName(k), v as string])
      )
      track(el.dataset.ga, params)
    },
    { capture: true }
  )
}

/**
 * section_view once per section, when it reaches the middle band of the
 * viewport. (A ratio threshold never fires for sections taller than it.)
 */
const initSectionViews = () => {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          trackOnce(`section:${entry.target.id}`, 'section_view', {
            section: entry.target.id,
          })
          io.unobserve(entry.target)
        }
      })
    },
    { rootMargin: '-40% 0px -40% 0px' }
  )
  document.querySelectorAll('main section[id]').forEach((s) => io.observe(s))
}

export const initAnalytics = () => {
  initClickTracking()
  initSectionViews()
}
