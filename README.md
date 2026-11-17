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
  Analytics loads only in production builds, after the page is idle, and
  receives the interaction events listed below.
- **Theme** follows the visitor's system setting on every visit; the toggle
  switches it for the current visit only.

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

## Google Analytics events

Events are sent from `src/scripts/analytics.ts`. Clicks are declarative: an
element with `data-ga="event_name"` sends that event, and its `data-ga-*`
attributes become params (`data-ga-paper-id` → `paper_id`). In `pnpm dev`
nothing reaches GA; each event is logged to the console as `[ga] …` instead.

| Event                               | Params                                                                                 |
| ----------------------------------- | -------------------------------------------------------------------------------------- |
| `section_view`                      | `section` — once per section per page view                                             |
| `nav_click`                         | `section`, `location` (`topnav` / `mobile_menu`)                                       |
| `mobile_menu`                       | `state` (`open` / `closed`)                                                            |
| `theme_toggle`                      | `theme`                                                                                |
| `resume_download`                   | `location` (`sidebar` / `topnav` / `mobile_menu`)                                      |
| `contact_click`                     | `method` (`email` / `phone` / `linkedin`), `location` (`sidebar` / `rail` / `contact`) |
| `blog_click`                        | `title`, `position`, `location` (`blogs` / `sidebar_latest`)                           |
| `paper_link_click`                  | `paper_id`                                                                             |
| `router_node`                       | `node`, `action` (`click` / `drag` / `hover` / `focus`; hover and focus once per node) |
| `experience_tab`                    | `company`, `method` (`click` / `keyboard`)                                             |
| `keyword_gif`                       | `keyword` — once per keyword                                                           |
| `dialog_open`                       | `dialog` (`arsenal` / `pill` / `postcard`)                                             |
| `dialog_close`                      | `dialog`, `via` (`button` / `backdrop` / `escape` / `choice`)                          |
| `search`                            | `search_term`, `results` — arsenal grep, after typing pauses                           |
| `pill_choice`                       | `pill` (`blue` / `red`)                                                                |
| `matrix_mode`                       | `state` (`on` / `off`), `via` (`pill` / `button` / `escape`)                           |
| `bibtex_toggle` / `abstract_toggle` | `paper_id`, `state` (`open` / `close`)                                                 |
| `bibtex_copy`                       | `paper_id`, `success` (`yes` / `no`)                                                   |
| `skip_link`                         | —                                                                                      |

To report on these params in GA4, register them as event-scoped custom
dimensions (Admin → Custom definitions): `section`, `location`, `method`,
`state`, `theme`, `title`, `position`, `paper_id`, `node`, `action`,
`company`, `keyword`, `dialog`, `via`, `pill`, `results`, `success`.
