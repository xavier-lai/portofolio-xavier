# scroll-progress-nav Specification

## Purpose
TBD - created by archiving change cinematic-scroll-experience. Update Purpose after archive.
## Requirements
### Requirement: Scroll progress and section rail
The site SHALL show a vertical scroll-progress indicator / section rail that reflects scroll
position and the active section.

#### Scenario: Progress reflects scroll
- **WHEN** the visitor scrolls
- **THEN** the progress indicator advances in proportion to scroll position

#### Scenario: Active section highlighted
- **WHEN** a section is the one currently in view
- **THEN** the rail marks that section as active

#### Scenario: Jump to section
- **WHEN** the visitor activates a rail entry
- **THEN** the page smooth-scrolls to that section

#### Scenario: Non-obtrusive and accessible
- **WHEN** the rail is shown
- **THEN** it does not obstruct content and does not break keyboard navigation or the real anchor nav

