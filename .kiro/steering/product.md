# Product

First Cloud Solutions is a consulting company marketing website hosted at
**firstcloudsolutions.net**. It presents the company's services, publishes a
blog, and lets visitors get in touch through a contact form.

## Purpose

- Establish credibility for the consultancy (cloud / AI engineering focus).
- Publish thought-leadership blog posts (MDX-based, no code changes needed to
  add a post).
- Capture inbound leads via a contact form that emails the business.

## Primary user journeys

- **Visitor** browses the homepage sections, reads the blog, and submits the
  contact form.
- **Author** publishes a new blog post by adding an `.mdx` file to `/posts/`
  and pushing to `main` (Amplify auto-deploys).

## Key behaviours to preserve

- The blog is file-driven: dropping a valid `.mdx` file in `/posts/` publishes a
  new post. Never require code changes to add ordinary posts.
- Contact form submissions are protected by Google reCAPTCHA v3 and delivered
  via AWS SES.
- A cookie banner and Google Analytics are present — respect consent and privacy
  (see `/privacy`).

## Non-goals

- No user accounts, authentication, or dashboards.
- No CMS backend — content is git-managed MDX and static React sections.
