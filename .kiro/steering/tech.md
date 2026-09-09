# Tech Stack

## Framework & language

- **Next.js 14.2.5** using the **App Router** (`app/` directory).
- **TypeScript** with `strict: true`. Path alias `@/*` maps to the project root.
- **React 18**.
- Output mode is `standalone` (see `next.config.js`) for Amplify hosting.

## Styling

- **CSS Modules** (`*.module.css`) for component-scoped styles.
- Global design tokens and utilities live in `app/globals.css`.
- Fonts: Fraunces (display) + DM Sans (body), via Google Fonts.
- Do not introduce a CSS-in-JS library or a UI framework — match the existing
  CSS Modules + tokens approach.

## Content / blog

- Blog posts are **MDX** files in `/posts/`, rendered with `next-mdx-remote`
  and `remark-gfm`.
- Frontmatter is parsed with `gray-matter` in `lib/posts.ts`.
- `getAllPosts()` lists + sorts posts (newest first); `getPostBySlug()` loads a
  single post.

## Integrations

- **AWS SES** (`@aws-sdk/client-ses`) powers the contact form API at
  `app/api/contact/route.ts`.
- **Google reCAPTCHA v3** (`react-google-recaptcha-v3`) guards the form.
- **Google Analytics** via `components/GoogleAnalytics.tsx`.

## Hosting & deployment

- **AWS Amplify**, build spec in `amplify.yml`. Push to `main` triggers a build.
- Environment variables are injected by Amplify at build time (SES emails,
  reCAPTCHA keys, GA measurement ID). Never hardcode these.

## Environment variables

Referenced in `amplify.yml` / API code — configure in Amplify Console, never
commit real values:

- `SES_FROM_EMAIL`, `SES_TO_EMAIL`, `AWS_REGION`
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, `RECAPTCHA_SECRET_KEY`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`

Local development uses `.env.local` (gitignored).

## Commands

Run these from the `firstcloudsolutions/` directory:

- `npm install` — install dependencies
- `npm run dev` — dev server at http://localhost:3000
- `npm run build` — production build (run before considering a change done)
- `npm run start` — serve the production build
- `npm run lint` — ESLint (`eslint-config-next`)

Note: `npm run dev` / `start` are long-running — start them manually, do not
block on them in automation.
