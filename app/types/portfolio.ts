export type TemplateId = 'template-a' | 'template-b'

export interface Theme {
  id: string
  name: string
  primary: string
  neutral: string
  background: string
  surface: string
  text: string
  radius: string
  font: string
}

export interface Skill {
  id: string
  name: string
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
}

export interface Experience {
  id: string
  company: string
  role: string
  startDate: string
  endDate?: string
  summary: string
}

export interface Project {
  id: string
  title: string
  description: string
  url?: string
  thumbnail?: string
  tags: string[]
}

export interface Certificate {
  id: string
  title: string
  issuer: string
  issueDate: string
  url?: string
  image?: string
}

export interface Profile {
  id: string
  username: string
  fullName: string
  headline: string
  bio: string
  email?: string
  location?: string
  avatar?: string
}

export interface PortfolioData {
  experiences: Experience[]
  projects: Project[]
  skills: Skill[]
  certificates: Certificate[]
}
