## ADDED Requirements

### Requirement: Freelance rate (TJM) estimator
The site SHALL provide a client-facing TJM (daily rate) estimator that computes an indicative
rate from the mission parameters, on submit.

#### Scenario: Compute on submit
- **WHEN** the visitor picks a mission type, duration and work mode and submits
- **THEN** a brief calculating state is shown, then a single approximate rate (≈ X €) counts up

#### Scenario: Shorter missions cost more
- **WHEN** a shorter duration is selected
- **THEN** the estimated TJM is higher than for a longer one, all else equal

#### Scenario: Calibrated, finely-valued output
- **WHEN** scale-a-mature-platform · 6+ months · full remote is estimated
- **THEN** the result is ≈ 654 €, and ≈ 685 € for hybrid/on-site (non-rounded figures)

#### Scenario: Leads to contact
- **WHEN** a result is shown
- **THEN** a CTA invites the visitor to request an exact quote (links to contact) with an
  "indicative only" disclaimer

#### Scenario: Reduced motion
- **WHEN** the visitor has `prefers-reduced-motion: reduce`
- **THEN** the result appears instantly without the calculating/count-up animation
