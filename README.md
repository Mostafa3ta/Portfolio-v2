# Mostafa Mahmoud: Frontend Engineer portfolio

Personal site of a frontend engineer (React · Next.js · TypeScript), with a case study of
[Elevent](https://elevent.ae/), a live event-operations platform I built and operate as its sole developer.

Live: https://portfolio-v2-7p0.pages.dev

## Stack

- **Next.js 15** (App Router), mostly Server Components; client code only for the section nav and scroll reveals
- **TypeScript**, **Tailwind CSS**, **Framer Motion** (respects `prefers-reduced-motion`), **React Icons**
- **Cloudflare Pages** via `@cloudflare/next-on-pages`. Every route is prerendered as static content.
  `next-on-pages` supports Next.js up to 15.5.2, so don't upgrade Next past that without moving to OpenNext.

## Structure

```
app/
├── layout.tsx            # site-wide metadata (title, description, OG/Twitter), font, skip link
├── page.tsx              # home: hero + Experience, Skills, Work, How I work, Contact; JSON-LD Person
├── work/elevent/page.tsx # Elevent case study
├── opengraph-image.tsx   # OG image generated with next/og at build time (twitter-image.tsx shares it)
├── sitemap.ts, robots.ts
└── not-found.tsx, error.tsx
components/               # Hero, Nav, Experience, Skills, Work, HowIWork, ContactCTA, ArchitectureDiagram, ...
constant/
├── site.ts               # domain, title, description, keywords, contact links
└── index.tsx             # page content: hero copy, experience, skills, work, "How I work"
lib/og.tsx                # OG image layout
next.config.mjs           # redirects: /cv → Google Drive CV, /projects → /#work
```

## Editing content

- **Text on the home page**: `constant/index.tsx`.
- **Domain, title, description, contact links**: `constant/site.ts`. Canonical URLs, the sitemap, robots and the OG image all read from it.
- **CV**: the site only links to `/cv`; the Google Drive URL lives in `next.config.mjs`. The redirect is temporary (307) on purpose, so swapping the file never gets stuck in browser caches.
- **Case study**: `app/work/elevent/page.tsx`.

## Develop and deploy

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

Pushing to `master` deploys on Cloudflare Pages.

## Contact

- **Email**: mostafa.mahmoud.frontend@gmail.com
- **LinkedIn**: [mostafa-m-dev](https://www.linkedin.com/in/mostafa-m-dev)
- **GitHub**: [Mostafa3ta](https://github.com/Mostafa3ta)
