## ADDED Requirements

### Requirement: Contact form
The site SHALL provide a contact form that sends messages to Xavier via Formspree.

#### Scenario: Successful send
- **WHEN** the visitor submits the contact form with valid fields
- **THEN** the message is posted to the Formspree endpoint and a clear success confirmation
  (a "Message sent!" state replacing the form) is shown

#### Scenario: Send failure fallback
- **WHEN** the Formspree request fails or no endpoint is configured
- **THEN** an error message is shown with a direct email fallback address

#### Scenario: Vite env configuration
- **WHEN** the app reads its form configuration
- **THEN** it uses `import.meta.env.VITE_FORMSPREE_ENDPOINT` (and `VITE_CONTACT_EMAIL` for the
  fallback), documented in `.env.example`

### Requirement: Resume download and social links
The site SHALL expose the current resume for download and link to LinkedIn and GitHub.

#### Scenario: Resume download
- **WHEN** the visitor activates the resume link
- **THEN** the current resume PDF opens or downloads

#### Scenario: Social links
- **WHEN** the visitor activates a social link
- **THEN** the correct LinkedIn or GitHub profile opens in a new tab
