## ADDED Requirements

### Requirement: Contact form
The site SHALL provide a contact form that sends messages via EmailJS.

#### Scenario: Successful send
- **WHEN** the visitor submits the contact form with valid fields
- **THEN** the message is sent via EmailJS and a success confirmation is shown

#### Scenario: Send failure fallback
- **WHEN** the EmailJS send fails
- **THEN** an error message is shown with a direct email fallback address

#### Scenario: Vite env configuration
- **WHEN** the app reads EmailJS configuration
- **THEN** it uses `import.meta.env.VITE_*` variables documented in `.env.example`

### Requirement: Resume download and social links
The site SHALL expose the current resume for download and link to LinkedIn and GitHub.

#### Scenario: Resume download
- **WHEN** the visitor activates the resume link
- **THEN** the current resume PDF opens or downloads

#### Scenario: Social links
- **WHEN** the visitor activates a social link
- **THEN** the correct LinkedIn or GitHub profile opens in a new tab
