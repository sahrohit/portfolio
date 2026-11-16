<br />
<div align="center">
  <a href="https://www.sahrohit.com.np">
    <img src="./public/logo_light.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Portfolio</h3>

  <p align="center">
    Built with <a href="https://astro.build">Astro</a>
    <br />
    <a href="https://www.sahrohit.com.np">https://www.sahrohit.com.np</a>
  </p>
</div>

## About

A single-page portfolio ("Distributed Workbench") built with Astro 7, plain CSS
and a few kilobytes of vanilla TypeScript, with no UI framework.

- **Blogs are live.** `/` renders on demand, reads the latest posts from
  [blog.sahrohit.com.np/rss.xml](https://blog.sahrohit.com.np/rss.xml), and
  is cached at Vercel's CDN through Astro route caching (1 h fresh, stale
  while revalidating). If the feed is down, a bundled snapshot is shown
  instead.
- **Fonts** are self-hosted through the Astro Fonts API, with metric-matched
  fallbacks.
- **Analytics.** Vercel Web Analytics and Speed Insights are always on. Google
  Analytics loads only after the page is idle.

## Getting started

```sh
pnpm install
cp .env.example .env   # optional: set PUBLIC_GA_TRACKING_ID
pnpm dev               # http://localhost:4321
```

| Script        | What it does                       |
| ------------- | ---------------------------------- |
| `pnpm dev`    | Dev server                         |
| `pnpm build`  | Production build (Vercel output)   |
| `pnpm checks` | `astro check`, ESLint and Prettier |
| `pnpm fix`    | Auto-fix lint and formatting       |

## Editing content

| What                           | Where                        |
| ------------------------------ | ---------------------------- |
| Name, contact, education       | `src/data/profile.ts`        |
| Packet-router stack graph      | `src/data/stack.ts`          |
| Experience                     | `src/data/experience.ts`     |
| Full arsenal                   | `src/data/arsenal.ts`        |
| Lab papers (authors, abstract) | `src/data/publications.ts`   |
| Hover GIFs                     | `src/assets/gifs/<key>.webp` |
| Résumé                         | `public/Rohit's-Resume.pdf`  |

A paper's "Abstract preview" button only appears once its `abstract` is set.
