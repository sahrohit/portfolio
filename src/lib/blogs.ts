import { XMLParser } from 'fast-xml-parser'
import { fallbackPosts } from '@/data/blogs-fallback'

export const FEED_URL = 'https://blog.sahrohit.com.np/rss.xml'
const BLOG_HOST = 'blog.sahrohit.com.np'

export type BlogPost = {
  title: string
  url: string
  date: Date
  /** "#tag #tag" from <category>, else the post description. */
  tags: string
}

type RssItem = {
  title?: string
  link?: string
  description?: string
  pubDate?: string
  category?: string | string[]
}

const toArray = <T>(v: T | T[] | undefined): T[] =>
  v === undefined ? [] : Array.isArray(v) ? v : [v]

/** The feed still links to the old Netlify host; serve the custom domain. */
const canonicalUrl = (link: string) => {
  const u = new URL(link)
  u.protocol = 'https:'
  u.host = BLOG_HOST
  return u.toString()
}

const tagLine = (item: RssItem) => {
  const cats = toArray(item.category)
    .map((c) => String(c).trim().toLowerCase().replace(/\s+/g, '-'))
    .filter(Boolean)
  return cats.length
    ? cats.map((c) => `#${c}`).join(' ')
    : String(item.description ?? '')
}

export const parseFeed = (xml: string): BlogPost[] => {
  const doc = new XMLParser({ ignoreAttributes: true }).parse(xml)
  return toArray<RssItem>(doc?.rss?.channel?.item)
    .filter((i) => i.title && i.link && i.pubDate)
    .map((i) => ({
      title: String(i.title),
      url: canonicalUrl(String(i.link)),
      date: new Date(String(i.pubDate)),
      tags: tagLine(i),
    }))
    .filter((p) => !Number.isNaN(p.date.getTime()))
    .sort((a, b) => b.date.getTime() - a.date.getTime())
}

/** Latest posts from the blog's RSS feed, or the bundled snapshot on failure. */
export const getLatestPosts = async (
  limit = 3
): Promise<{ posts: BlogPost[]; live: boolean }> => {
  try {
    const res = await fetch(FEED_URL, { signal: AbortSignal.timeout(3000) })
    if (!res.ok) {
      throw new Error(`RSS ${res.status}`)
    }
    const posts = parseFeed(await res.text())
    if (!posts.length) {
      throw new Error('RSS feed has no items')
    }
    return { posts: posts.slice(0, limit), live: true }
  } catch (err) {
    console.warn('[blogs] falling back to snapshot:', err)
    return { posts: fallbackPosts.slice(0, limit), live: false }
  }
}
