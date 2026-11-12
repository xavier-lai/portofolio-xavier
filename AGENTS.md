# AGENTS.md

Guidelines for any AI agent or contributor working on this repository. Keep changes small,
typed, and on-brand. Read this before editing.

## What this is

Personal portfolio & online resume for **Xavier Lai — Data Platform Engineer / Data Ops**,
used as his freelance brand. Single-page React site deployed to GitHub Pages.

## Stack

- **Vite + React 18 + TypeScript** (strict)
- **Tailwind CSS** for styling (design tokens, not ad-hoc CSS)
- **Framer Motion** for animation
- **simple-icons** for brand logos
- App lives in `app/`. Spec-driven changes tracked with **OpenSpec** in `openspec/`.

## Architecture & conventions

**Content-as-data.** All copy and content live in typed files under `app/src/data/`.
Components are presentational and render from that data — to change wording, logos, rates,
projects, etc., edit the data file, not the component.

```
app/src/
  data/         # typed content — the single source of truth for copy
    profile.ts      # name, title, tagline, bio, stats, links
    services.ts     # freelance tracks + service cards
    engagements.ts  # work cards (title, company, kind, tags, impact, tech)
    tech.ts         # "My stack" logos, grouped by category (filterable)
  components/   # one component per section, composed in App.tsx
  lib/          # shared helpers (motion.tsx, icons.ts)
  index.css     # Tailwind layers + reusable component classes + tokens
  App.tsx       # section composition order
```

**Rules**

- **Use design tokens, never ad-hoc hex.** Colors/gradients/fonts come from
  `tailwind.config.js` and the component classes in `index.css`
  (`.btn-primary`, `.btn-ghost`, `.card-glass`, `.section`, `.section-title`, `.text-gradient`).
- **Respect reduced motion.** Wrap scroll-reveals in `<Reveal>` (`src/lib/motion.tsx`) or
  guard with `useReducedMotion()`. Never ship an animation that ignores it.
- **Keep dependencies light.** Prefer a small custom SVG over a heavy chart/UI library.
  (The skills graph was deliberately rebuilt as custom SVG after `reaviz` proved heavy and
  unreliable.) Pin exact-ish versions in `package.json`.
- **TypeScript is strict** — no unused locals/params, no implicit any. The build enforces it.
- Keep components presentational; put reusable logic in `lib/`.
- Assets: only keep what's imported. Remove unused files from `src/assets/`.

## Brand / design tokens

Defined in `app/tailwind.config.js`:

| Token | Value | Use |
|---|---|---|
| `ink-900` | `#0b0a14` | page background (darkest) |
| `ink-800 / 700 / 600` | `#12101f` / `#1a1730` / `#241f44` | surfaces, borders |
| `brand-violet` | `#8b5cf6` | primary accent |
| `brand-fuchsia` | `#d946ef` | secondary accent (eyebrows, highlights) |
| `brand-cyan` | `#22d3ee` | tertiary accent (bullets, "current") |
| `brand-blue` | `#3b82f6` | extra accent |

- **Gradient:** `bg-grad-brand` (violet → fuchsia → cyan); text gradient via `.text-gradient`.
- **Fonts:** `Space Grotesk` for display/headings (`font-display`), `Inter` for body.
- Theme is **dark only**; `body` background is the `grad-radial` glow on `ink-900`.

## Run, test, build

```bash
cd app
npm install
npm run dev        # http://localhost:5173/portofolio-xavier/
npm run build      # tsc --noEmit + vite build -> app/dist (MUST pass)
npm run preview    # serve the production build locally
npm run lint       # TypeScript check only
```

**Quality gates (there is no unit-test suite yet):**

1. `npm run build` must pass — this is the type-check + production build gate. Treat a failing
   build as a failing test.
2. Manually verify in `npm run preview` **under the `/portofolio-xavier/` base path**:
   responsive layout (mobile → desktop), nav + smooth scroll, section animations, the tag
   filters (Work, Stack), the TJM estimator math, the contact form, and `prefers-reduced-motion`.
3. If you add real logic worth testing (e.g. the TJM calculation in `Rates.tsx`), add
   **Vitest** and a focused unit test rather than leaving it uncovered.

**Dev-server gotcha:** after adding/removing dependencies, Vite's optimized-deps cache can go
stale (blank page, `ENOENT ... node_modules/<pkg>`). Fix: `rm -rf app/node_modules/.vite` and
restart `npm run dev`.

## Spec-driven workflow (OpenSpec)

Substantial changes go through OpenSpec: a proposal + design + specs + tasks under
`openspec/changes/<name>/`. See `openspec/project.md` for context and
`openspec/changes/` for current/active changes. Validate with `openspec validate <name>`.

## Git conventions

- Branch names: `<type>/short-description` where type ∈ `feature | fix | chore | docs`.
- Don't commit or push unless asked. Never commit secrets or a `.env` file.

## Deployment

Push to `main` → GitHub Actions builds with Vite and publishes `app/dist/` to the `gh-pages`
branch (GitHub Pages). See `README.md` → **Ship to production** for the full flow and the
required repository secrets.
