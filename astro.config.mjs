// @ts-check
import { defineConfig, envField, fontProviders } from 'astro/config'
import vercel from '@astrojs/vercel'
import { cacheVercel } from '@astrojs/vercel/cache'

export default defineConfig({
  site: 'https://www.sahrohit.com.np',
  trailingSlash: 'ignore',

  // `/` renders on demand (live RSS) and is cached at Vercel's CDN through
  // route caching; everything else is prerendered.
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  cache: {
    provider: cacheVercel(),
  },

  build: {
    // The stylesheet is small: inlining it removes a render-blocking request.
    inlineStylesheets: 'always',
  },

  vite: {
    build: {
      // Emit every logo as its own cached file instead of base64-inlining it
      // into the HTML; most are lazy-loaded inside closed panels and dialogs.
      assetsInlineLimit: 0,
    },
  },

  fonts: [
    {
      name: 'Space Grotesk',
      cssVariable: '--font-sans',
      provider: fontProviders.google(),
      weights: [400, 500, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      provider: fontProviders.google(),
      weights: [400, 500, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],

  env: {
    schema: {
      PUBLIC_GA_TRACKING_ID: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
    },
  },
})
