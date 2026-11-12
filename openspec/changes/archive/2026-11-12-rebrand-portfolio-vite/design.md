## Context

The current site is a Create React App bundle under `app/` (react-bootstrap, animate.css,
reaviz, EmailJS), deployed to GitHub Pages. It is outdated in both content and tooling, and
CRA is deprecated and unreliable on Node 26. Xavier is pivoting to freelancing; the site must
become a modern brand and client-conversion tool. Content source of truth is the resume PDF.

## Goals / Non-Goals

**Goals:**
- Rebuild on Vite + React + TypeScript with Tailwind + Framer Motion.
- Bold, colorful gradient design that reads senior/technical and animates fluidly.
- Sections: hero, services, experience timeline, selected projects, skills, contact.
- Keep GitHub Pages deployment working under `/portofolio-xavier`.
- Working contact form and resume download.

**Non-Goals:**
- No backend/CMS; content lives in typed data files.
- No i18n framework (copy stays English; the current FR/EN note is dropped).
- No blog, no e-commerce, no analytics dashboard.

## Decisions

- **Vite + React + TS over Next.js**: User chose Vite. Static SPA fits GitHub Pages with no
  SSR need. TypeScript gives type-safe content models.
- **Tailwind CSS over styled-components / bootstrap**: utility-first, fast to iterate, easy
  gradient/theming via tokens. Removes react-bootstrap entirely.
- **Framer Motion (`motion`) for animation**: replaces animate.css + react-on-screen;
  `whileInView` handles scroll-reveal; respects `prefers-reduced-motion`.
- **Content as typed data** (`src/data/*.ts`): experience, projects, services, skills defined
  as arrays of typed objects; components render from data. One place to edit content.
- **Routing**: single-page scroll with anchor nav (no react-router needed). `base` path set
  to `/portofolio-xavier/` in `vite.config.ts` for Pages.
- **Deploy**: GitHub Actions builds with Vite (`dist/`) and publishes to `gh-pages`. Update
  the existing workflow's build/publish dir from CRA `build/` to Vite `dist/`.
- **Contact via Formspree**: the form posts to a Formspree endpoint with `fetch` (no SDK,
  no backend); the endpoint comes from `import.meta.env.VITE_FORMSPREE_ENDPOINT`. (Originally
  scoped as EmailJS; switched to Formspree for a simpler, SDK-free integration.)

## Risks / Trade-offs

- [Full rebuild diverges from git history] → Keep the change isolated in `app/`; old files
  replaced in one reviewable change; git retains history.
- [GitHub Pages base path mismatch breaks asset URLs] → Set Vite `base` to repo name and use
  relative asset imports; verify built `dist/` locally before deploy.
- [Contact endpoint is build-time env] → Document `VITE_FORMSPREE_ENDPOINT` in README and
  `.env.example`; fall back to a mailto link if unset.
- [Framer Motion animations hurt accessibility/perf] → Guard with `prefers-reduced-motion`
  and keep reveal animations lightweight.

## Migration Plan

1. Scaffold Vite + TS app in place under `app/` (new config, keep repo and assets).
2. Install new deps; remove CRA deps.
3. Build components from typed content data; port usable assets (photo, resume PDF, logos).
4. Update GitHub Actions workflow and README for Vite.
5. Verify `npm run dev` and `npm run build` locally, confirm base path.

Rollback: revert the change branch; previous CRA app remains in git history.

## Open Questions

- Final freelance service packages wording — draft from resume, Xavier to refine.
- Which projects become full case studies vs. a compact "more work" list.
