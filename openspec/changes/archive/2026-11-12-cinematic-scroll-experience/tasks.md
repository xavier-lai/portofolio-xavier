## 1. Smooth scroll (smooth-scroll)

- [x] 1.1 Add `lenis` dependency
- [x] 1.2 Create `useSmoothScroll` hook (init Lenis, RAF loop, cleanup), gated by `prefers-reduced-motion`
- [x] 1.3 Wire anchor nav + section rail to Lenis `scrollTo`; verify Framer `useScroll` stays in sync

## 2. Scroll-reactive background (scroll-reactive-background)

- [x] 2.1 Build `ScrollBackground` fixed layer (radial-gradient blobs on ink-900)
- [x] 2.2 Drive blob position/opacity/hue from global `useScroll` progress via `useTransform`
- [x] 2.3 Interpolate per-chapter accent (hero→work→stack→rates→contact); move body glow here
- [x] 2.4 Static fallback under reduced motion

## 3. Cinematic reveals (cinematic-reveals)

- [x] 3.1 Add line-by-line heading reveal helper (words/lines, translate+clip)
- [x] 3.2 Add staggered reveal for card grids
- [x] 3.3 Count-up-on-enter for hero stats (reuse CountUp)
- [x] 3.4 Full-viewport framing for hero + one statement beat; keep Work/Stack natural height
- [x] 3.5 Pin + parallax hero (sticky + scroll-linked transforms)
- [x] 3.6 Reduced-motion: instant reveals, final stats, no pin/parallax

## 4. Scroll progress / section rail (scroll-progress-nav)

- [x] 4.1 Build vertical rail with section entries + active state (IntersectionObserver / useInView)
- [x] 4.2 Thin progress line from global scroll progress
- [x] 4.3 Rail entries smooth-scroll to sections; aria-hidden decorative, real anchors preserved

## 6. Intro sequence (intro-sequence)

- [x] 6.1 Refactor hero content into a presentational `HeroContent` (no own section/parallax)
- [x] 6.2 Build `Intro` pinned scene (`#home`, tall track + sticky): question → answer → hero morph
- [x] 6.3 Scroll cue on the first screen; background blooms from dormant via global progress
- [x] 6.4 Hide nav + rail during the intro; reveal once the hero has formed
- [x] 6.5 Reduced-motion: skip morph, render hero directly, nav visible

## 5. Verification

- [x] 5.1 `npm run build` passes
- [x] 5.2 `npm run preview` under `/portofolio-xavier/`: smooth scroll, background morph, reveals, pins, rail
- [ ] 5.3 Reduced-motion pass (no inertia/parallax/background motion, instant reveals)
- [ ] 5.4 Mobile + keyboard pass; no clipped content, no scroll-jacking, 60fps check
