# intro-sequence Specification

## Purpose
TBD - created by archiving change cinematic-scroll-experience. Update Purpose after archive.
## Requirements
### Requirement: Minimalist intro that develops on scroll
The site SHALL open on a minimalist first screen that develops into the hero as the visitor
scrolls, via a single pinned "develop" morph.

#### Scenario: Minimal first screen
- **WHEN** the site first loads
- **THEN** it shows a near-empty screen with one opening question ("What are you building?"),
  a scroll cue, a dormant (faint) background, and no section rail

#### Scenario: Scroll develops into the hero
- **WHEN** the visitor scrolls through the intro
- **THEN** the question fades out, a humble answer ("Maybe I can help with the data part.")
  appears and fades, the background blooms to life, and the hero composes in — as one
  continuous pinned morph, not a hard cut

#### Scenario: Chrome appears after the intro
- **WHEN** the hero has formed
- **THEN** the navigation and section rail become visible

#### Scenario: Reduced motion
- **WHEN** the visitor has `prefers-reduced-motion: reduce`
- **THEN** the intro morph is skipped and the hero is shown directly (no pin, no scrubbing),
  with navigation visible

