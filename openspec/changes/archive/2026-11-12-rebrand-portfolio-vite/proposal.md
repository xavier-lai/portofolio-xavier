## Why

The portfolio was built 4 years ago on Create React App with generic, outdated content
("Former data scientist", 19 logo-only projects). Xavier is pivoting to freelancing and
needs the site to be his brand and sales pitch: modern, fluid, and focused on converting
future clients. CRA is also deprecated and unreliable on Node 26, so the toolchain must
be rebuilt.

## What Changes

- **BREAKING**: Replace the Create React App toolchain with Vite + React + TypeScript.
- Add Tailwind CSS for styling and Framer Motion for fluid, scroll-driven animation.
- Redesign the UI around a bold, colorful gradient direction.
- Rewrite all content from the current resume (Data Platform Engineer; Doctolib, Cabaia,
  C-Ways, Rennes 2 teaching).
- Add a **freelance services** section ("what I can do for you").
- Replace the 19-logo project grid with a small set of curated **case-study** projects.
- Replace the reaviz Venn skills chart with a filterable "My stack" logo cloud.
- Add a client-facing freelance rate (TJM) estimator.
- Provide a contact form (Formspree) and resume download; refresh LinkedIn/GitHub links.
- Keep GitHub Pages deployment working (project page under `/portofolio-xavier`).

## Capabilities

### New Capabilities
- `site-shell`: Vite + React + TypeScript foundation, Tailwind + Framer Motion setup,
  theming (gradient design tokens), responsive layout, navigation, and GitHub Pages
  deployment config.
- `hero-branding`: Bold gradient hero with name, Data Platform Engineer positioning,
  freelance tagline, and primary CTAs.
- `services-offer`: Freelance services/offer section describing engagements Xavier takes on.
- `experience-timeline`: Experience & impact timeline with quantified results per role.
- `selected-projects`: Curated case-study projects with problem/impact framing.
- `skills-overview`: Filterable "My stack" logo cloud, grouped by category (Cloud & Platform,
  Data Engineering, Observability, AI).
- `rate-estimator`: Client-facing freelance rate (TJM) estimator.
- `contact-cta`: Contact form (Formspree), resume download, and social links.

### Modified Capabilities
<!-- None: no existing OpenSpec specs. -->

## Impact

- `app/`: full rebuild (build config, dependencies, `src/` components and styles).
- Dependencies: remove CRA (`react-scripts`, bootstrap, react-bootstrap, animate.css,
  reaviz, react-on-screen, `@emailjs/browser`); add Vite, TypeScript, Tailwind, Framer Motion,
  simple-icons; contact posts to Formspree via `fetch`.
- `.github/workflows/deploy-to-gh-pages.yml`: update build command/output for Vite.
- `README.md`: update setup and deploy instructions.
- Content source of truth: `Xavier Lai - Data Platform Engineer.pdf`.
