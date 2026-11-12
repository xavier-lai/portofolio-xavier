# cinematic-reveals Specification

## Purpose
TBD - created by archiving change cinematic-scroll-experience. Update Purpose after archive.
## Requirements
### Requirement: Cinematic chapter framing
Key sections SHALL be framed as full-viewport cinematic chapters that read one idea at a time,
without trapping scroll on long sections.

#### Scenario: Chapter framing
- **WHEN** the visitor arrives at a chapter section (e.g. hero, a statement beat)
- **THEN** it fills the viewport and reads as a distinct chapter

#### Scenario: Long sections not trapped
- **WHEN** a section is content-heavy (e.g. Work, Stack)
- **THEN** scrolling through it is natural and nothing is clipped or scroll-jacked

### Requirement: Scroll-driven reveals
Headings and content SHALL reveal with scroll-driven animation as they enter the viewport.

#### Scenario: Heading line reveal
- **WHEN** a section heading scrolls into view
- **THEN** it reveals line-by-line (translate/clip) rather than appearing at once

#### Scenario: Staggered content
- **WHEN** a grid of cards enters the viewport
- **THEN** the cards reveal in a staggered sequence

#### Scenario: Stats count up on enter
- **WHEN** the hero stats enter the viewport
- **THEN** each number counts up to its value

#### Scenario: Reduced motion
- **WHEN** the visitor has `prefers-reduced-motion: reduce`
- **THEN** reveals are instant and stats show their final value immediately

### Requirement: Pinned, parallax hero
The hero SHALL pin and transform on scroll, with parallax on its visual elements.

#### Scenario: Hero parallax on scroll
- **WHEN** the visitor scrolls out of the hero
- **THEN** the hero visual/portrait moves with parallax and the headline transforms (scale/opacity)

#### Scenario: Reduced motion
- **WHEN** the visitor has `prefers-reduced-motion: reduce`
- **THEN** the hero is static with no pin/parallax transforms

