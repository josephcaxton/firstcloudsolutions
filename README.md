# First Cloud Solutions — Next.js Website

A production-ready Next.js 14 consulting website for firstcloudsolutions.net, hosted on AWS Amplify.

---

## Project structure

```
firstcloudsolutions/
├── app/
│   ├── api/contact/route.ts   ← SES contact form API
│   ├── globals.css            ← Design tokens + utilities
│   ├── layout.tsx             ← Root layout + SEO metadata
│   ├── page.tsx               ← Homepage (all sections)
│   ├── page.module.css
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── Nav.tsx                ← Sticky nav with mobile burger
│   ├── Nav.module.css
│   ├── Footer.tsx
│   ├── Footer.module.css
│   ├── ContactForm.tsx        ← Client form → /api/contact
│   ├── ContactForm.module.css
│   └── ScrollReveal.tsx       ← Intersection Observer animations
├── amplify.yml                ← AWS Amplify build spec
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

### Blog / insights (great for SEO)
Create `app/insights/page.tsx` and `app/insights/[slug]/page.tsx`.
Use MDX files in `/content/posts/` for easy authoring, or connect Sanity CMS.

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
| Language | TypeScript |
