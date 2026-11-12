## Why

The site has strong content and shape, but it reads as a conventional scroll page. To stand
out as a freelance brand (inspiration: Lando Norris, Jesko Jets, Breakthrough Energy), it
needs to feel like an *experience*: smooth inertia scroll, a living background that reacts to
scroll, full-viewport cinematic chapters, and scroll-driven reveals — while staying fast,
professional, and accessible.

## What Changes

- Add **Lenis** smooth/inertia scrolling, wired to Framer Motion's scroll + reduced-motion.
- Add a **persistent scroll-reactive background** (aurora/gradient field) behind all content
  that shifts mood/hue per chapter as the visitor scrolls.
- Make sections read as **full-viewport cinematic chapters** with scroll-driven reveals
  (line-by-line headings, staggered cards, stats that count up on enter) and a **pinned,
  parallax hero**.
- Add a **vertical scroll-progress / section rail** indicator.
- Everything degrades gracefully under `prefers-reduced-motion` (no inertia, no parallax,
  instant reveals) and must not regress performance or the GitHub Pages deploy.

## Capabilities

### New Capabilities
- `smooth-scroll`: Lenis-based inertia scrolling integrated with the scroll system, reduced-motion aware.
- `scroll-reactive-background`: a fixed background layer whose gradient/aurora reacts to scroll position and shifts per chapter.
- `cinematic-reveals`: full-viewport chapter framing, scroll-driven reveals (line/stagger), counting stats, and a pinned/parallax hero.
- `scroll-progress-nav`: a vertical progress indicator / section rail tracking scroll position and active section.

### Modified Capabilities
<!-- None archived yet; prior change's specs are not in openspec/specs/. -->

## Impact

- `app/`: new deps (`lenis`), new `src/lib` scroll helpers, a background component, updates to
  Hero/section components and `App.tsx`, `index.css` tokens.
- Must respect `prefers-reduced-motion` and keep the production build + GitHub Pages deploy green.
- No WebGL/3D (explicitly out of scope) to stay lean and maintainable.
