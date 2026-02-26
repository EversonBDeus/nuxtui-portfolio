export type ProjectRole = 'frontend' | 'backend' | 'fullstack'

export type Project = {
  id: string
  slug: string
  title: string
  role: ProjectRole
  shortDescription: string
  description: string
  details?: string // ✅ texto longo opcional
  stack: string[]
  coverImage: string
  repoUrl?: string
  demoUrl?: string
  screenshots: string[]
}

export const projects: Project[] = [
  {
    id: 'mini-portfolio',
    slug: 'mini-portfolio',
    title: 'Mini Portfólio',
    role: 'frontend',
    shortDescription: 'Portfólio responsivo com Nuxt 4 + Nuxt UI.',
    description:
      'Projeto de portfólio pensado para evoluir para um SaaS com login, templates e edição de conteúdo.',
    // ✅ Se quiser, coloque um texto longo aqui (multi-linhas)
    details: `O que foi feito:
- Layout responsivo (mobile-first)
- Tabs com Projetos / Habilidades / Certificados
- Slideover para detalhes

Melhorias futuras:
- Login admin (Supabase)
- Templates por usuário
- Editor de conteúdo`,
    stack: ['Nuxt 4', 'Nuxt UI', 'TypeScript', 'Tailwind CSS'],
    coverImage: '/projects/mini-portfolio/cover.jpg',
    repoUrl: '', // coloque https://... para aparecer o botão
    demoUrl: '', // coloque https://... para aparecer o botão
    screenshots: [
      '/projects/mini-portfolio/shot-1.png',
      '/projects/mini-portfolio/shot-2.png',
      '/projects/mini-portfolio/shot-3.png'
    ]
  },
  {
    id: 'sistema-agendamentos',
    slug: 'sistema-agendamentos',
    title: 'Sistema de Agendamentos',
    role: 'fullstack',
    shortDescription: 'Agendamentos com calendário e painel admin.',
    description:
      'Sistema com foco em experiência do usuário e visão do administrador para acompanhar horários.',
    // details: ''  // ✅ se não colocar, não aparece nada
    stack: ['Vue', 'Nuxt', 'Pinia', 'UI Components'],
    coverImage: '/projects/sistema-agendamentos/cover.png',
    repoUrl: '',
    demoUrl: '',
    screenshots: [
      '/projects/sistema-agendamentos/shot-1.png',
      '/projects/sistema-agendamentos/shot-2.png'
    ]
  }
]