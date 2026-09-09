# Project Structure

```
firstcloudsolutions/
├── app/                          ← Next.js App Router
│   ├── api/contact/route.ts      ← SES contact form API route
│   ├── blog/
│   │   ├── page.tsx              ← Blog index (lists all posts)
│   │   └── [slug]/page.tsx       ← Individual post page
│   ├── privacy/                  ← Privacy policy page
│   ├── globals.css               ← Design tokens + utilities + blog styles
│   ├── layout.tsx                ← Root layout + SEO metadata
│   ├── page.tsx                  ← Homepage (all sections)
│   ├── page.module.css
│   ├── sitemap.ts                ← Generated sitemap
│   └── robots.ts                 ← robots.txt
├── components/                   ← Reusable React components (+ CSS Modules)
│   ├── Nav.tsx / Nav.module.css
│   ├── Footer.tsx / Footer.module.css
│   ├── ContactForm.tsx / ContactForm.module.css
│   ├── ScrollReveal.tsx          ← Intersection Observer animations
│   ├── RecaptchaProvider.tsx     ← reCAPTCHA v3 context
│   ├── GoogleAnalytics.tsx       ← GA4 script
│   └── CookieBanner.tsx          ← Consent banner
├── posts/                        ← MDX blog posts (one file = one post)
├── lib/
│   └── posts.ts                  ← Reads + parses MDX frontmatter
├── public/                       ← Static assets
├── amplify.yml                   ← AWS Amplify build spec
├── next.config.js
└── tsconfig.json
```

## Conventions

- **Components**: PascalCase `.tsx` files in `components/`, each paired with its
  own `Name.module.css`. Keep styles co-located.
- **Pages/routes**: App Router file conventions under `app/`
  (`page.tsx`, `layout.tsx`, `route.ts`, `[slug]/`).
- **Imports**: use the `@/` alias for absolute imports from the project root.
- **Client vs server**: mark interactive components with `'use client'`; keep
  data-loading (e.g. `lib/posts.ts` filesystem reads) on the server.
- **New pages**: add a folder under `app/` with a `page.tsx`; wire nav links in
  `components/Nav.tsx` and update `app/sitemap.ts`.

## Known cleanup item

There is a stray directory named `{app` (containing `{api`) at the project root,
most likely created by an accidental shell brace-expansion. It is not part of the
build. Leave it alone unless explicitly asked to remove it — flag it rather than
silently deleting.
