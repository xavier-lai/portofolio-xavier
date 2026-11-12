import type { SimpleIcon } from 'simple-icons'
import {
  siAirbyte,
  siApachekafka,
  siApachespark,
  siArgo,
  siClaude,
  siCursor,
  siDatadog,
  siDocker,
  siGithubactions,
  siGooglebigquery,
  siGooglecloud,
  siGrafana,
  siKubernetes,
  siModelcontextprotocol,
  siPagerduty,
  siPostgresql,
  siPython,
  siTerraform,
} from 'simple-icons'

export type TechCategory =
  | 'Cloud & Platform'
  | 'Data Engineering'
  | 'Observability'
  | 'AI'

export type Tech = {
  name: string
  category: TechCategory
  icon?: SimpleIcon // omitted when no brand logo exists -> monogram fallback
  mono?: string // custom monogram text when there is no logo
}

export const TECH_CATEGORIES: TechCategory[] = [
  'Cloud & Platform',
  'Data Engineering',
  'Observability',
  'AI',
]

export const tech: Tech[] = [
  // Cloud & Platform
  { name: 'GCP', category: 'Cloud & Platform', icon: siGooglecloud },
  { name: 'AWS', category: 'Cloud & Platform', mono: 'AWS' },
  { name: 'Kubernetes', category: 'Cloud & Platform', icon: siKubernetes },
  { name: 'Argo CD', category: 'Cloud & Platform', icon: siArgo },
  { name: 'Crossplane', category: 'Cloud & Platform', mono: 'Cp' },
  { name: 'Terraform', category: 'Cloud & Platform', icon: siTerraform },
  { name: 'Docker', category: 'Cloud & Platform', icon: siDocker },
  { name: 'GitHub Actions', category: 'Cloud & Platform', icon: siGithubactions },

  // Data Engineering
  { name: 'Python', category: 'Data Engineering', icon: siPython },
  { name: 'SQL', category: 'Data Engineering', mono: 'SQL' },
  { name: 'PostgreSQL', category: 'Data Engineering', icon: siPostgresql },
  { name: 'dbt', category: 'Data Engineering', mono: 'dbt' },
  { name: 'Dagster', category: 'Data Engineering', mono: 'Dg' },
  { name: 'Airbyte', category: 'Data Engineering', icon: siAirbyte },
  { name: 'Spark', category: 'Data Engineering', icon: siApachespark },
  { name: 'Kafka', category: 'Data Engineering', icon: siApachekafka },
  { name: 'BigQuery', category: 'Data Engineering', icon: siGooglebigquery },
  { name: 'Power BI', category: 'Data Engineering', mono: 'BI' },

  // Observability
  { name: 'Datadog', category: 'Observability', icon: siDatadog },
  { name: 'PagerDuty', category: 'Observability', icon: siPagerduty },
  { name: 'Grafana', category: 'Observability', icon: siGrafana },
  { name: 'Cloud Logging', category: 'Observability', icon: siGooglecloud },

  // AI
  { name: 'Claude', category: 'AI', icon: siClaude },
  { name: 'OpenSpec', category: 'AI', mono: 'OS' },
  { name: 'MCP', category: 'AI', icon: siModelcontextprotocol },
  { name: 'Cursor', category: 'AI', icon: siCursor },
  { name: 'OpenAI', category: 'AI', mono: 'AI' },
]
