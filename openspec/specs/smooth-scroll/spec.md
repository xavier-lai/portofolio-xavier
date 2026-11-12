# smooth-scroll Specification

## Purpose
TBD - created by archiving change cinematic-scroll-experience. Update Purpose after archive.
## Requirements
### Requirement: Smooth inertia scrolling
The site SHALL use Lenis to provide smooth inertia scrolling, integrated with the scroll
system so scroll-linked animations stay in sync.

#### Scenario: Inertia scroll
- **WHEN** the visitor scrolls
- **THEN** the page scrolls with smooth inertia (not a hard native jump) and scroll-linked
  animations update accordingly

#### Scenario: Anchor navigation uses smooth scroll
- **WHEN** the visitor activates a nav anchor
- **THEN** the page smoothly animates to that section via the smooth-scroll controller

#### Scenario: Reduced motion disables inertia
- **WHEN** the visitor has `prefers-reduced-motion: reduce`
- **THEN** inertia scrolling is disabled and native scrolling is used

