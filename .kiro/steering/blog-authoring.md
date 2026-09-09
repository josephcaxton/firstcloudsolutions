---
inclusion: fileMatch
fileMatchPattern: 'posts/**/*.mdx'
---

# Blog Authoring

Blog posts are MDX files in `/posts/`. Adding a post requires **no code
changes** — create the file, commit, and push; Amplify rebuilds and publishes.

## Required frontmatter

Every post must start with a frontmatter block between `---` markers:

```mdx
---
title: "Your Post Title Here"
date: "2026-06-01"
excerpt: "A one or two sentence summary shown on the blog index page."
slug: "your-post-title-here"
tags: ["Tag One", "Tag Two"]
---
```

- `title` — post heading (displayed in Fraunces display font).
- `date` — sorting key, newest first; format **must** be `YYYY-MM-DD`.
- `excerpt` — shown on the blog listing; keep under ~30 words.
- `slug` — must match the filename without `.mdx` and be unique.
- `tags` — first tag renders as the category badge; add as many as relevant.

## Filename

Lowercase, hyphen-separated, ending in `.mdx`. The filename (minus `.mdx`)
becomes the URL and should match `slug`:

```
posts/your-post-title-here.mdx  →  /blog/your-post-title-here
```

## Content

Standard Markdown after the closing `---`. Supported: `## headings`, `**bold**`,
`*italic*`, `> pull quotes`, `- lists`, fenced code blocks, GFM tables (via
`remark-gfm`), and `---` dividers.

## Checklist before publishing

- [ ] Frontmatter present with all five keys.
- [ ] `date` in `YYYY-MM-DD` format.
- [ ] `slug` matches the filename and is unique across `/posts/`.
- [ ] `excerpt` is concise.
- [ ] Post renders locally (`npm run dev` → `/blog` and `/blog/<slug>`).
