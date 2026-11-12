## ADDED Requirements

### Requirement: Engagement cards
The site SHALL present experience as eye-catching engagement cards (one per company/client),
each with a catchy headline, sourced from the resume and previous portfolio. This replaces
both a plain experience list and the separate projects grid.

#### Scenario: Cards shown
- **WHEN** the visitor reaches the work section
- **THEN** it shows a card per engagement (e.g. Doctolib, Cabaia, Rennes 2 teaching, B&B
  Hotels, DGDDI, DGFIP, Le Bon Marché, Domaine des Massifs) with a catchy title, company,
  role and period

#### Scenario: Engagement kind badge
- **WHEN** a card is displayed
- **THEN** it shows a kind badge conveying the stage (e.g. Greenfield, Mature platform,
  Consulting, Teaching), supporting the startup-vs-mature-platform positioning

#### Scenario: Quantified impact on expand
- **WHEN** the visitor expands a card
- **THEN** it reveals quantified impact bullets and the tech used, with themed animation

#### Scenario: Work from data
- **WHEN** engagement content changes
- **THEN** it is editable from a single typed data file without changing component markup
