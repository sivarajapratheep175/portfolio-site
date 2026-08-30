# Sivaraja Pratheep — Portfolio v2

Rebuild of the portfolio in Next.js 14 (App Router), TypeScript, and Tailwind CSS, following the
"Portfolio v2" redesign plan: a terminal-style hero signature, a categorized tech stack, project
case studies with stats, a chronological education/experience timeline, certifications, a live
GitHub pulse panel, and a stronger contact call-to-action.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Content

All personal content (skills, projects, journey, certifications, links) lives in one place:
`lib/data.ts`. Edit that file to update copy without touching components.

- `public/images/photo.jpg` — your profile photo (used in the hero).
- `public/resume.pdf` — the file behind the "Download resume" button.

## GitHub pulse section

`components/GithubPulse.tsx` fetches your public repo count, followers, and four most recently
updated repos directly from the public GitHub REST API in the browser — no token needed, no
build-time step. It fails gracefully (with a link straight to your GitHub profile) if the API is
unreachable or rate-limited.

## Deploying

This project is configured for **static export** (`output: "export"` in `next.config.mjs`), so it
deploys the same way your previous site did — as a folder of static files:

```bash
npm run build
```

This produces an `out/` folder. Push that to GitHub Pages (or any static host). If you'd rather
deploy to Vercel and use Next.js's full server features, delete the `output: "export"` line from
`next.config.mjs` first.

## Structure

```
app/            Root layout, global styles, the single home page
components/     One component per section (Hero, TechStack, Projects, Journey, ...)
lib/data.ts     All content: profile, skills, projects, journey, certifications, links
public/         Static assets: your photo and resume
```
