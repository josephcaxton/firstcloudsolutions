# First Cloud Solutions — Next.js Website

A production-ready Next.js 14 consulting website for firstcloudsolutions.net, hosted on AWS Amplify.

---

## Project structure

```
firstcloudsolutions/
├── app/
│   ├── api/contact/route.ts       ← SES contact form API
│   ├── blog/
│   │   ├── page.tsx               ← Blog index (lists all posts)
│   │   └── [slug]/
│   │       └── page.tsx           ← Individual post page
│   ├── globals.css                ← Design tokens + utilities + blog styles
│   ├── layout.tsx                 ← Root layout + SEO metadata
│   ├── page.tsx                   ← Homepage (all sections)
│   ├── page.module.css
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── Nav.tsx                    ← Sticky nav with mobile burger (includes Blog link)
│   ├── Nav.module.css
│   ├── Footer.tsx
│   ├── Footer.module.css
│   ├── ContactForm.tsx            ← Client form → /api/contact
│   ├── ContactForm.module.css
│   └── ScrollReveal.tsx           ← Intersection Observer animations
├── posts/                         ← MDX blog post files live here
│   ├── forward-deployed-ai-engineering.mdx
│   └── getting-started-with-aws-bedrock.mdx
├── lib/
│   └── posts.ts                   ← Reads and parses MDX frontmatter
├── amplify.yml                    ← AWS Amplify build spec
├── next.config.js
├── tsconfig.json
├── .env.example
└── package.json
```

---

## Local development

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your AWS credentials (local only)

# 3. Run dev server
npm run dev
# → http://localhost:3000
```

---

## Writing a new blog post

No code changes are needed to publish a new post. Follow these five steps:

### Step 1 — Create the MDX file

Create a new file in the `/posts/` directory. The filename becomes part of the URL, so keep it lowercase with hyphens:

```
posts/your-post-title-here.mdx
```

### Step 2 — Add the frontmatter

Every post must start with a frontmatter block between `---` markers. Copy and fill in this template:

```mdx
---
title: "Your Post Title Here"
date: "2026-06-01"
excerpt: "A one or two sentence summary shown on the blog index page."
slug: "your-post-title-here"
tags: ["Tag One", "Tag Two"]
---
```

- `title` — displayed as the post heading
- `date` — used for sorting (newest first); format must be `YYYY-MM-DD`
- `excerpt` — shown on the blog listing page, keep it under 30 words
- `slug` — must match the filename without `.mdx` and be unique
- `tags` — first tag shown as the category badge; add as many as relevant

### Step 3 — Write your content

After the closing `---`, write your post in standard Markdown:

```mdx
Your opening paragraph here.

## A section heading

More content. **Bold text** and *italic text* work as normal.

- Bullet point one
- Bullet point two

> This becomes a styled pull quote on the page.
```

Supported elements and how they render:

| Markdown | Renders as |
|---|---|
| `## Heading` | Section heading in Fraunces display font |
| `**bold**` | Bold in ink colour |
| `*italic*` | Italic |
| `> quote` | Styled pull quote with accent left border |
| `- item` | Bullet list |
| ` ```code``` ` | Syntax-highlighted code block |
| Tables | Full styled table (requires remark-gfm, already configured) |
| `---` | Horizontal divider between sections |

### Step 4 — Commit and push

```bash
git add posts/your-post-title-here.mdx
git commit -m "Add blog post: Your Post Title Here"
git push
```

Amplify will detect the push, rebuild automatically, and your post will be live at:
```
firstcloudsolutions.net/blog/your-post-title-here
```

### Step 5 — Verify

Once the build completes (usually 2–3 minutes), check:
- `firstcloudsolutions.net/blog` — your post appears in the listing
- `firstcloudsolutions.net/blog/your-post-title-here` — the post page renders correctly
- The tag, date, and excerpt are displaying as expected

---

## AWS Amplify deployment

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/josephcaxton/firstcloudsolutions.git
git push -u origin main
```

### Step 2 — Connect Amplify
1. Go to **AWS Console → AWS Amplify → Create new app**
2. Choose **GitHub**, authorise, select your repo and `main` branch
3. Amplify detects Next.js automatically — build settings pre-filled from `amplify.yml`
4. Click **Save and deploy**

### Step 3 — Add environment variables
In **Amplify Console → App settings → Environment variables**, add:
```
AWS_REGION          = eu-west-2
SES_FROM_EMAIL      = hello@firstcloudsolutions.net
SES_TO_EMAIL        = josephcaxtonidowu@yahoo.com
```

### Step 4 — Custom domain
1. **Amplify Console → Domain management → Add domain**
2. Enter `firstcloudsolutions.net`
3. Amplify generates CNAME records — add these to your domain registrar's DNS
4. SSL certificate is provisioned automatically via ACM (takes ~15 minutes)

### Step 5 — Enable preview branches (optional but recommended)
- **Amplify Console → Previews → Enable** — every pull request gets its own URL

---

## SES setup (for contact form)

The contact form sends email via AWS Simple Email Service.

### 1. Verify your domain in SES
```
AWS Console → SES → Verified identities → Create identity → Domain
Enter: firstcloudsolutions.net
Add the DKIM/TXT records SES generates to your DNS
```

### 2. Request production access
By default SES is in sandbox mode (only sends to verified addresses).
```
SES Console → Account dashboard → Request production access
Reason: transactional contact form emails
```
Takes ~24 hours for approval.

### 3. IAM permissions for Amplify
Amplify uses an IAM service role. Attach this policy to it:
```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": ["ses:SendEmail", "ses:SendRawEmail"],
    "Resource": "*"
  }]
}
```
Find the role at **IAM → Roles → search "amplify"**.

---

## Adding features

### Case studies
Create `app/case-studies/[slug]/page.tsx` with structured data for SEO.

### Analytics
Add GA4 or Plausible by installing the script in `app/layout.tsx`.

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Hosting | AWS Amplify |
| CDN + SSL | CloudFront + ACM (via Amplify) |
| DNS | Route 53 or existing registrar |
| Email | AWS SES |
| Fonts | Fraunces + DM Sans (Google Fonts) |
| Styling | CSS Modules + global design tokens |
| Blog | MDX files + next-mdx-remote + remark-gfm |
| Language | TypeScript |
