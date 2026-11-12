// Experience counted from the first professional role (1 Jan 2020).
const CAREER_START = new Date('2020-01-01')
const yearsExperience = Math.floor(
  (Date.now() - CAREER_START.getTime()) / (365.25 * 24 * 60 * 60 * 1000),
)

export const profile = {
  name: 'Xavier Lai',
  title: 'Data Platform Engineer / Data Ops',
  kicker: 'I build Data Platforms.',
  tagline: 'Build Data Platforms people can actually rely on.',
  bio: [
    'From building data stacks from scratch to working on mature Data & AI platforms, I’ve worked across very different stages of the data journey — in consulting and in-house.',
    'I enjoy the messy part: making architecture choices, scaling platforms, improving developer experience, and avoiding unnecessary complexity.',
  ],
  location: 'France · Remote-friendly',
  availability: 'Available for freelance engagements',
  email: 'xavier.lai.pro@gmail.com',
  phone: '+33 6 80 76 77 25',
  links: {
    github: 'https://github.com/xavier-lai',
    linkedin: 'https://www.linkedin.com/in/xavier-lai-85a861131/',
  },
  stats: [
    { value: `${yearsExperience}+`, label: 'Years in data engineering' },
    { value: 'GCP', label: 'Certified cloud engineer' },
    { value: '7+', label: 'Companies & clients served' },
  ],
} as const
