# scroll-reactive-background Specification

## Purpose
TBD - created by archiving change cinematic-scroll-experience. Update Purpose after archive.
## Requirements
### Requirement: Scroll-reactive background
The site SHALL render a persistent, fixed background layer whose gradient/aurora reacts to
scroll position, creating a continuous visual that changes as the visitor scrolls.

#### Scenario: Background reacts to scroll
- **WHEN** the visitor scrolls through the page
- **THEN** the background's gradient (position/opacity/hue) visibly changes in response

#### Scenario: Per-chapter mood
- **WHEN** the visitor reaches a different section
- **THEN** the background accent shifts to that section's mood (hero → work → stack → rates → contact)

#### Scenario: Behind content, non-interactive
- **WHEN** the background is rendered
- **THEN** it sits behind all content, is non-interactive, and never obscures text legibility

#### Scenario: Reduced motion
- **WHEN** the visitor has `prefers-reduced-motion: reduce`
- **THEN** the background is static (no scroll-driven motion)

