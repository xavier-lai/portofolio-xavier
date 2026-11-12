## Context

The site is Vite + React + TS + Tailwind + Framer Motion, deployed to GitHub Pages. It has the
right content but a conventional feel. Goal: an immersive, scroll-driven experience in the vein
of award-winning sites, without the WebGL/3D weight — keep it fast, maintainable, accessible.

## Goals / Non-Goals

**Goals:**
- Premium inertia scroll (Lenis) synced with Framer Motion.
- A persistent background that visibly reacts to scroll and shifts per chapter.
- Full-viewport cinematic chapters with scroll-driven reveals and a pinned/parallax hero.
- Vertical scroll-progress / section rail.
- Full `prefers-reduced-motion` fallback; no perf or deploy regression.

**Non-Goals:**
- No WebGL/3D, no canvas frame sequences, no heavy animation libs beyond Framer + Lenis.
- No content changes (copy/data stay as-is).
- No routing changes; still a single page under the Pages base path.

## Decisions

- **Lenis for smooth scroll**, initialized once in a `useSmoothScroll` hook; its `scrollTo`
  used by anchor nav. Disabled entirely when `prefers-reduced-motion` is set. Drive Lenis'
  RAF so Framer Motion `useScroll` stays in sync (Lenis updates native scroll, which Framer
  reads).
- **Background as a single fixed layer** (`<ScrollBackground/>`) behind `#root` content:
  a few large radial-gradient blobs on `ink-900`, their position/opacity/hue driven by a
  global `useScroll()` progress via `useTransform`. Per-chapter mood = interpolating accent
  color stops across scroll progress. One layer, GPU-friendly (transform/opacity only).
- **Chapters:** each `<section>` gets min-height ~100vh framing where it suits (hero, maybe a
  statement). Not hard scroll-snap (hurts long sections like Work); use generous spacing +
  reveal-on-enter so it *reads* chaptered without trapping scroll.
- **Reveals:** extend the existing `Reveal`/Framer pattern — add line-by-line heading reveal
  (wrap words/lines, translate+clip), stagger for card grids, and count-up for stats on enter
  (reuse the `CountUp` approach from `Rates`).
- **Pinned hero:** `position: sticky` + scroll-linked transforms (portrait parallax, headline
  scale/opacity) via `useScroll({ target })` + `useTransform`.
- **Section rail:** fixed vertical dots/labels; active state from an `IntersectionObserver`
  (or Framer `useInView` per section); a thin progress line from global scroll progress.
- **Reduced motion:** a single `useReducedMotion()` gate — skip Lenis, parallax, and
  background motion; reveals become instant; stats show final value.

## Risks / Trade-offs

- [Lenis + Framer scroll desync] → drive both from one RAF; test `useScroll` values update.
- [Full-viewport chapters hurt long sections / mobile] → avoid hard snap; cap min-heights on
  mobile; verify no content is clipped.
- [Scroll-linked work janky on low-end] → animate only transform/opacity, throttle, keep blob
  count low; verify 60fps in preview.
- [Accessibility regressions] → keyboard nav + anchor links still work with Lenis; reduced
  motion fully bypasses effects; rail is decorative (aria-hidden) with real anchors elsewhere.
- [Bundle growth] → Lenis is ~3KB; no other deps.

## Migration Plan

1. Add Lenis; `useSmoothScroll` hook + reduced-motion gate; wire anchor nav to `scrollTo`.
2. Add `ScrollBackground` fixed layer; move body glow into it; drive with global scroll.
3. Upgrade reveals (line reveal, stagger, count-up-on-enter); apply across sections.
4. Pin + parallax the hero.
5. Add section rail / progress.
6. QA: reduced motion, mobile, keyboard, `npm run build` + `preview` under base path.

Rollback: revert the change branch; nothing else depends on it.

## Open Questions

- Section rail as dots-only or dots+labels? (default: dots, labels on hover/desktop)
- Which sections get full-viewport framing vs. natural height? (default: hero + a statement
  beat; Work/Stack stay natural height.)
