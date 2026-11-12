# services-offer Specification

## Purpose
TBD - created by archiving change rebrand-portfolio-vite. Update Purpose after archive.
## Requirements
### Requirement: Freelance services section
The site SHALL include a services section describing the freelance engagements Xavier offers,
framed as client outcomes ("what I can do for you").

#### Scenario: Services displayed
- **WHEN** the visitor reaches the services section
- **THEN** it shows distinct service offerings (e.g., data platform engineering on GCP, data
  modeling & analytics enablement, platform reliability & observability, AI-assisted /
  spec-driven delivery), each with a short client-benefit description

#### Scenario: Services from data
- **WHEN** service content changes
- **THEN** it is editable from a single typed data file without changing component markup

#### Scenario: Service card interaction
- **WHEN** the visitor hovers or focuses a service card
- **THEN** the card gives a clear interactive visual response consistent with the theme

### Requirement: Dual value proposition
The services section SHALL present two engagement tracks to show Xavier can either build a
startup's first data architecture or strengthen an already-mature data platform.

#### Scenario: Two tracks shown
- **WHEN** the visitor reaches the services section
- **THEN** it shows a "for startups" track (build first data architecture) and a
  "for scale-ups & enterprises" track (strengthen a mature platform)

