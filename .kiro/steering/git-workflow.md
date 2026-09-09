# Git Workflow

## Branch policy

- **All commits and pushes go to the `dev` branch — never to `main`.**
- `main` is the production/deploy branch and is only updated by merging `dev`
  into it (via pull request), not by direct commits or pushes.
- Before committing, confirm the current branch is `dev`
  (`git rev-parse --abbrev-ref HEAD`). If it is not, switch to `dev` (or create
  it from the current base) before committing.
- Push with `git push origin dev`. Do not push to `main` unless the user
  explicitly asks.

## Commits

- Only create commits when explicitly asked.
- Stage specific files by name rather than `git add .` to avoid committing
  unrelated changes.
- Never commit secrets or env files (`.env`, `.env.local`, `.env.production`).
- Keep commit messages concise and descriptive.

## Deploy note

AWS Amplify auto-deploys on pushes to its connected branch. Keep day-to-day work
on `dev` so production (`main`) only changes through an intentional merge.
