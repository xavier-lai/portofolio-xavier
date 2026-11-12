# site-shell Specification

## Purpose
TBD - created by archiving change rebrand-portfolio-vite. Update Purpose after archive.
## Requirements
### Requirement: Vite + React + TypeScript foundation
The application SHALL be built with Vite, React, and TypeScript, replacing the Create React
App toolchain.

#### Scenario: Local development server
- **WHEN** a developer runs `npm run dev` in `app/`
- **THEN** Vite serves the site locally with hot module replacement and no CRA dependency

#### Scenario: Production build
- **WHEN** a developer runs `npm run build`
- **THEN** Vite produces a static bundle in `dist/` that loads without runtime errors

### Requirement: Styling and animation stack
The application SHALL use Tailwind CSS for styling and Framer Motion for animation.

#### Scenario: Tailwind utilities apply
- **WHEN** a component uses Tailwind utility classes
- **THEN** the styles render as configured by the Tailwind theme tokens

#### Scenario: Reduced motion respected
- **WHEN** the visitor's OS sets `prefers-reduced-motion: reduce`
- **THEN** entrance and scroll animations are disabled or minimized

### Requirement: Gradient design theme
The site SHALL define a bold, colorful gradient theme as reusable design tokens (colors,
gradients, typography) applied consistently across sections.

#### Scenario: Consistent theme
- **WHEN** any section renders
- **THEN** it uses the shared gradient/color tokens rather than ad-hoc per-component colors

### Requirement: Responsive single-page layout with navigation
The site SHALL be a single page with anchor-based navigation and SHALL be responsive from
mobile to desktop.

#### Scenario: Anchor navigation
- **WHEN** the visitor clicks a nav item
- **THEN** the page smoothly scrolls to the matching section

#### Scenario: Mobile layout
- **WHEN** the site is viewed at mobile width
- **THEN** content reflows without horizontal overflow and the nav collapses into a mobile menu

### Requirement: GitHub Pages deployment
The site SHALL deploy to GitHub Pages under the `/portofolio-xavier` base path via CI.

#### Scenario: Correct base path
- **WHEN** the built site is served from `https://xavier-lai.github.io/portofolio-xavier/`
- **THEN** all assets, links, and routes resolve correctly under that base path

#### Scenario: CI publishes build
- **WHEN** code is pushed to `main`
- **THEN** CI builds with Vite and publishes `dist/` to the `gh-pages` branch

