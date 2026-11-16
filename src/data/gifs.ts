import type { ImageMetadata } from 'astro'

export const gifKeys = [
  'fullstack',
  'latency',
  'micro',
  'checkout',
  'realtime',
  'auth',
  'pipeline',
  'sql',
  'cicd',
  'testing',
  'lending',
  'integration',
  'cache',
  'iac',
  'trade',
  'serverless',
  'etl',
  'pill',
] as const

export type GifKey = (typeof gifKeys)[number]

const files = import.meta.glob<ImageMetadata>('../assets/gifs/*.{webp,gif}', {
  eager: true,
  import: 'default',
})

const byKey = Object.fromEntries(
  Object.entries(files).map(([path, meta]) => [
    path.replace(/^.*\/([^/.]+)\.\w+$/, '$1'),
    meta.src,
  ])
)

/** Hashed URL of a hover GIF; only fetched when a keyword is hovered. */
export const gifSrc = (key: GifKey): string => {
  const src = byKey[key]
  if (!src) {
    throw new Error(`Missing hover GIF: src/assets/gifs/${key}.(webp|gif)`)
  }
  return src
}
