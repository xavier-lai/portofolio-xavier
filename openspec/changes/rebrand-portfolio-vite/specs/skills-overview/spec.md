## ADDED Requirements

### Requirement: Interactive skills graph
The site SHALL present skills as an interactive Venn-style graph (reaviz), themed to the
gradient palette, with a toggle between Hard and Soft skills.

#### Scenario: Graph renders
- **WHEN** the visitor reaches the skills section
- **THEN** a Venn graph of skill areas renders with readable labels on the dark theme

#### Scenario: Hard / Soft toggle
- **WHEN** the visitor toggles between "Hard skills" and "Soft skills"
- **THEN** the graph updates to show the selected skill set

#### Scenario: Skills from data
- **WHEN** skills content changes
- **THEN** it is editable from the skills component's data arrays without changing the chart markup
