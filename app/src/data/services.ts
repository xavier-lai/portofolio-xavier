export type Track = {
  tag: string
  title: string
  description: string
}

// The two ways Xavier gets brought in.
export const tracks: Track[] = [
  {
    tag: 'For startups',
    title: 'Build your first data architecture',
    description:
      'Set up a reliable data stack from scratch — ingestion, modeling, dashboards — without over-engineering. Get a single source of truth your team can trust from day one.',
  },
  {
    tag: 'For scale-ups & enterprises',
    title: 'Strengthen a mature data platform',
    description:
      'Embed in your team to scale an existing Data & AI platform: reliability, observability, developer experience, and taming unnecessary complexity.',
  },
]

export type Service = {
  icon: string // lucide-react icon name
  title: string
  description: string
  bullets: string[]
}

export const services: Service[] = [
  {
    icon: 'CloudCog',
    title: 'Data Platform Engineering on GCP',
    description:
      'Design and build a cloud-native data platform that scales — from ingestion to serving — on a modern, maintainable stack.',
    bullets: [
      'GCP, BigQuery, Kubernetes, Crossplane, Terraform',
      'Batch & streaming ingestion and export',
      'Self-service tooling for data teams',
    ],
  },
  {
    icon: 'Boxes',
    title: 'Data Modeling & Analytics Enablement',
    description:
      'Turn messy sources into a trusted semantic layer your whole business can self-serve from.',
    bullets: [
      'dbt, Dagster, Airbyte, BigQuery',
      'Reusable fact tables & a single source of truth',
      'Power BI dashboards on a unified model',
    ],
  },
  {
    icon: 'Activity',
    title: 'Platform Reliability & Observability',
    description:
      'Keep data flowing with monitoring, alerting and incident response that let teams sleep at night.',
    bullets: [
      'Datadog observability, SLOs & alerting',
      'On-call practices & incident response',
      'Cost optimization & reliability',
    ],
  },
  {
    icon: 'Sparkles',
    title: 'AI-Assisted Delivery',
    description:
      'Spec-driven development with AI agents to ship platform work faster, with quality built in.',
    bullets: [
      'Spec-driven development & context engineering',
      'Agents, subagents, routines & evaluation',
      'Automation applied to platform work',
    ],
  },
]
