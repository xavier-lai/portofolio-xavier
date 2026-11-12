## ADDED Requirements

### Requirement: Brand hero
The hero section SHALL present Xavier Lai's name, the "Data Platform Engineer" positioning,
and a freelance-oriented tagline over the bold gradient theme.

#### Scenario: Hero content
- **WHEN** the site loads
- **THEN** the hero shows the name "Xavier Lai", the title "Data Platform Engineer", and a
  tagline positioning him as an available freelance data platform / GCP cloud specialist

#### Scenario: Entrance animation
- **WHEN** the hero first renders
- **THEN** its elements animate in fluidly (unless reduced motion is requested)

#### Scenario: Personal brand voice
- **WHEN** the hero renders
- **THEN** it uses Xavier's own voice ("Build Data Platforms people can actually rely on",
  his cross-stage journey, and his personal quip) rather than a generic summary

#### Scenario: Companies stat
- **WHEN** the hero stats render
- **THEN** one stat reflects the number of companies and clients served (not a generic
  "platforms built" count)

### Requirement: Primary calls to action
The hero SHALL include primary CTAs to contact and to view/download the resume.

#### Scenario: Contact CTA
- **WHEN** the visitor clicks the primary "Get in touch" CTA
- **THEN** the page scrolls to the contact section

#### Scenario: Resume CTA
- **WHEN** the visitor clicks the resume CTA
- **THEN** the current resume PDF opens or downloads
