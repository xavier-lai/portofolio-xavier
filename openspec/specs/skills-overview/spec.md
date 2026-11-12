# skills-overview Specification

## Purpose
TBD - created by archiving change rebrand-portfolio-vite. Update Purpose after archive.
## Requirements
### Requirement: Filterable stack logo cloud
The site SHALL present the tech stack as a cloud of brand logos ("My stack"), filterable by
category.

#### Scenario: Logos shown
- **WHEN** the visitor reaches the stack section
- **THEN** the technologies render as logo chips (brand logos where available, a monogram
  fallback otherwise)

#### Scenario: Category filter
- **WHEN** the visitor selects a category (All, Cloud & Platform, Data Engineering,
  Observability, AI)
- **THEN** the cloud filters to the tools in that category with an animated transition

#### Scenario: Stack from data
- **WHEN** the stack content changes
- **THEN** it is editable from a single typed data file (`tech.ts`) without changing component markup

