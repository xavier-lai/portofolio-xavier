export type EngagementKind = 'Mature platform' | 'Greenfield' | 'Consulting' | 'Teaching'

// Filter tags shown in the projects slicer. Keep the vocabulary small and relevant.
export type EngagementTag =
  | 'Platform'
  | 'Greenfield'
  | 'Mature platform'
  | 'Consulting'
  | 'Machine Learning'
  | 'Analytics'
  | 'Teaching'

export type Engagement = {
  title: string // eye-catching headline
  company: string
  role: string
  period: string
  kind: EngagementKind
  tags: EngagementTag[]
  summary: string
  impact: string[]
  tech: string[]
  current?: boolean
}

// One eye-catching card per engagement. Seeded from the resume + previous
// portfolio; content to be expanded with Xavier.
export const engagements: Engagement[] = [
  {
    title: 'Industrializing a Health Data Mesh at Scale',
    company: 'Doctolib',
    role: 'Senior Data Platform Engineer',
    period: 'Jan 2026 – Present',
    kind: 'Mature platform',
    tags: ['Platform', 'Mature platform'],
    current: true,
    summary:
      'Embedded in the Platform Team during the GCP migration and Data Mesh rollout, building reusable self-service components for highly sensitive health data.',
    impact: [
      'Self-service ingestion & export for feature teams across a governed Data Mesh',
      'Cloud-native stack: Kubernetes, Crossplane, custom controllers',
      'Platform reliability: Datadog observability, alerting, on-call & incident response',
      'Spec-driven development with AI agents applied to platform work',
    ],
    tech: ['GCP', 'Kubernetes', 'Crossplane', 'BigQuery', 'Datadog', 'Dagster'],
  },
  {
    title: 'From Zero to a Company-Wide Source of Truth',
    company: 'Cabaia',
    role: 'Tech Lead Data',
    period: 'Jan 2024 – Jan 2026',
    kind: 'Greenfield',
    tags: ['Platform', 'Greenfield', 'Analytics'],
    summary:
      'Built a resilient data platform from scratch on GCP, adopted as the source of truth by every department — and hired & mentored the data team around it.',
    impact: [
      'Fewer than 10 reusable fact tables covered 80% of reporting needs',
      'Trusted Power BI dashboards on a unified semantic model for self-service',
      '12+ months of uninterrupted data reliability',
      'Hired and mentored a data team',
    ],
    tech: ['GCP', 'Airbyte', 'dbt', 'Dagster', 'BigQuery', 'Power BI'],
  },
  {
    title: 'Training the Next Data Engineers',
    company: 'Rennes 2 University',
    role: 'Adjunct Professor',
    period: '2022 – Present · 30h/year',
    kind: 'Teaching',
    tags: ['Teaching'],
    summary:
      'Teach advanced Python for data engineering to Master’s students and mentor them through real end-to-end projects.',
    impact: [
      'Advanced Python for data engineering curriculum',
      'End-to-end project mentorship',
    ],
    tech: ['Python', 'Teaching', 'Mentorship'],
  },
  {
    title: 'Real-Time Marketing on a Customer Data Platform',
    company: 'B&B Hotels',
    role: 'Lead · via C-Ways',
    period: '2021 – 2024',
    kind: 'Consulting',
    tags: ['Consulting', 'Platform'],
    summary:
      'Architected a data platform integrated with a CDP so marketing could act on customer signals in real time instead of overnight batches.',
    impact: [
      'Real-time marketing automation enabled',
      'CDP integrated into the data platform',
    ],
    tech: ['GCP', 'CDP', 'Streaming'],
  },
  {
    title: 'NLP Risk Scoring that Cut Review from a Day to an Hour',
    company: 'DGDDI — French Customs',
    role: 'Tech Lead · via C-Ways',
    period: '2021 – 2024',
    kind: 'Consulting',
    tags: ['Consulting', 'Machine Learning'],
    summary:
      'Led a team building an NLP-based risk scoring tool fed by social-media webscraping to triage cases for French Customs.',
    impact: [
      'Manual review time cut from 1 day to 1 hour',
      'NLP risk scoring over scraped social-media signals',
    ],
    tech: ['Python', 'NLP', 'Webscraping', 'Machine Learning'],
  },
  {
    title: 'Mapping Social Networks for the French Tax Authority',
    company: 'DGFIP',
    role: 'Lead Data Engineer · via C-Ways',
    period: '2021 – 2024',
    kind: 'Consulting',
    tags: ['Consulting', 'Machine Learning'],
    summary:
      'Built social-network analysis pipelines to surface relationships hidden in large-scale data for the French tax administration.',
    impact: [
      'Social-network graph analysis at scale',
      'Lead on the data engineering delivery',
    ],
    tech: ['Python', 'SQL', 'Graph analysis'],
  },
  {
    title: 'Customer Reactivation Scoring',
    company: 'Le Bon Marché',
    role: 'Data Scientist · via C-Ways',
    period: '2021 – 2024',
    kind: 'Consulting',
    tags: ['Consulting', 'Machine Learning'],
    summary:
      'Designed a reactivation score to predict which customers to win back, powering targeted CRM campaigns.',
    impact: [
      'Reactivation scoring model for CRM targeting',
      'CRM automation enabling €20K of billable insight in under 2 days',
    ],
    tech: ['Python', 'Machine Learning', 'SQL'],
  },
  {
    title: 'Farm v3 Data Product',
    company: 'Domaine des Massifs',
    role: 'Developer · via C-Ways',
    period: '2021 – 2024',
    kind: 'Consulting',
    tags: ['Consulting'],
    summary:
      'Developed a data product (Farm v3) delivering reliable, structured data to the business.',
    impact: ['Delivered the Farm v3 data product'],
    tech: ['Python', 'SQL'],
  },
]

export const education = {
  degree: 'Master in Applied Mathematics, Data Science',
  school: 'Rennes 2 University',
  year: '2020',
  note: 'With honours — data science, digisport option.',
}
