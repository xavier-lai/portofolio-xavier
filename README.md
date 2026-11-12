# portofolio-xavier

Personal portfolio & online resume for **Xavier Lai — Data Platform Engineer / Data Ops**.

Built with **React + Vite + TypeScript**, styled with **Tailwind CSS**, animated with **Framer Motion**.

## Develop locally

```bash
cd app
npm install
npm run dev
```

Opens at http://localhost:5173/portofolio-xavier/

Other scripts:

- `npm run build` — type-check and build to `app/dist/`
- `npm run preview` — serve the production build locally
- `npm run lint` — TypeScript check only

## Content

All content lives in typed data files under `app/src/data/`:

- `profile.ts` — name, title, tagline, bio, stats, links
- `services.ts` — freelance tracks + service cards
- `engagements.ts` — work case studies (title, company, kind, tags, impact, tech) + education
- `tech.ts` — "My stack" logos, grouped by category (filterable)

Edit these to update the site — no component changes needed. See `AGENTS.md` for the full
architecture and conventions.

## Contact form (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com/). Copy `app/.env.example` to
`app/.env` and fill in your keys:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
VITE_CONTACT_EMAIL=...
```

For deployment, set the same variables as GitHub Actions **secrets**.

## Ship to production

The site is hosted on **GitHub Pages** and deploys automatically on every push to `main`.

### How it works

```
push to main
  → GitHub Actions (.github/workflows/deploy-to-gh-pages.yml)
    → npm ci && npm run build   (Vite → app/dist/)
      → publishes app/dist/ to the gh-pages branch
        → GitHub Pages serves it at
           https://xavier-lai.github.io/portofolio-xavier/
```

### To ship a change

1. Merge (or push) your change to `main`.
2. Watch the **Actions** tab — the *Build and Deploy* workflow runs (~1–2 min).
3. When it's green, the live site is updated. Hard-refresh if you don't see it immediately
   (GitHub Pages CDN can cache for a minute).

### One-time setup / things to know

- **Base path:** Vite is configured with `base: '/portofolio-xavier/'` (project page). If the
  repo is ever renamed, update `base` in `app/vite.config.ts` to match, or assets 404.
- **Pages source:** repo *Settings → Pages* must point at the `gh-pages` branch (root).
- **Secrets:** the contact form needs these as repo secrets (*Settings → Secrets and variables
  → Actions*), matching `app/.env.example`:
  - `VITE_EMAILJS_SERVICE_ID`
  - `VITE_EMAILJS_TEMPLATE_ID`
  - `VITE_EMAILJS_PUBLIC_KEY`
  - `VITE_CONTACT_EMAIL`
  Without them the site still builds; the contact form just falls back to the email link.

### Manual deploy (fallback)

Only if CI is unavailable:

```bash
cd app
npm ci
npm run build          # outputs app/dist/
npx gh-pages -d dist   # publishes dist/ to the gh-pages branch
```

Verify a production build locally before shipping: `npm run build && npm run preview`, then
open the printed URL (served under `/portofolio-xavier/`).

## Spec-driven development

This project uses [OpenSpec](https://github.com/Fission-AI/OpenSpec). Change proposals live
in `openspec/changes/`. See `openspec/project.md` for project context.
