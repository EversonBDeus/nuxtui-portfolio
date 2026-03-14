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
  id: 'lumio-saass',
  slug: 'lumio-saass',
  title: 'Lumio',
  role: 'fullstack',
  shortDescription: 'Plataforma para criar, personalizar e publicar portfólios profissionais.',
  description:
    'Aplicação web desenvolvida com Nuxt 3 e Supabase para criação e publicação de portfólios profissionais com templates modernos.',
  details:
    'Lumio é uma plataforma de portfólios profissionais desenvolvida com Nuxt 3 e Supabase. A aplicação permite criar, personalizar e publicar portfólios com templates modernos, editor visual, gerenciamento de projetos e publicação com slug público, oferecendo uma solução completa para desenvolvedores e profissionais exibirem seus trabalhos online.',
  stack: ['Vue 3','Nuxt 4', 'TypeScript','Tailwind CSS','Supabase','Html','Css','ScrollReveal'],
  coverImage: 'projects/lumio-saass/cover.jpeg',
  screenshots: [
    'projects/lumio-saass/shot-01.jpeg',
    'projects/lumio-saass/shot-02.jpeg',
    'projects/lumio-saass/shot-03.jpeg',
    'projects/lumio-saass/shot-04.jpeg',
    'projects/lumio-saass/shot-05.jpeg',
    'projects/lumio-saass/shot-06.jpeg'
  ],
  demoUrl: 'https://lumio-web.vercel.app/'
},
{
  id: 'tabela-registro',
  slug: 'tabela-registro',
  title: 'Tabela Registro de BA',
  role: 'fullstack',
  shortDescription: 'Registro e consulta de protocolos BA de reparo técnico.',
  description:
    'Sistema interno para registrar e acompanhar protocolos BA de reparo técnico.',
  details:
    'Aplicação criada para substituir uma ferramenta antiga da empresa que deixou de funcionar. O sistema permite que os agentes do call center consultem rapidamente se o reparo está aberto ou encerrado e também adicionem novos registros para controle e acompanhamento.',
  stack: ['Vue.js 3', 'Nuxt.js 4', 'Nuxt UI 4', 'Tailwind CSS', 'AWS', 'Amplify', 'Charts.css'],
  coverImage: 'projects/tabela-registro/cover.png',
  screenshots: [
    'projects/tabela-registro/shot-01.png',
    'projects/tabela-registro/shot-02.png',
    'projects/tabela-registro/shot-03.png',
    'projects/tabela-registro/shot-04.png',
    'projects/tabela-registro/shot-05.png'
  ],
  repoUrl: 'https://github.com/EversonBDeus/Tabela-Registro-de-Bas',
  demoUrl: 'https://master.d2l8r684q1tda0.amplifyapp.com/'
},
{
  id: 'mascaras-st',
  slug: 'mascaras-st',
  title: 'Máscaras ST',
  role: 'frontend',
  shortDescription: 'Coleção de máscaras operacionais para agilizar o atendimento ao cliente.',
  description:
    'Projeto com três máscaras de atendimento para facilitar a rotina operacional e padronizar respostas.',
  details:
    'Aplicação criada para agilizar o atendimento ao cliente com três fluxos principais: máscara para perfilamento do atendimento, máscara para problemas no home office e máscara para abertura de reparo. O objetivo é reduzir tempo operacional, organizar o atendimento e facilitar o uso pelos agentes.',
  stack: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
  coverImage: 'projects/mascara-form/cover.png',
  screenshots: [
    'projects/mascara-form/shot-01.png',
    'projects/mascara-form/shot-02.png',
    'projects/mascara-form/shot-03.png',
    'projects/mascara-form/shot-04.png',
    'projects/mascara-form/shot-05.png',
    'projects/mascara-form/shot-06.png'
  ],
  repoUrl: 'https://github.com/EversonBDeus/mascaras-st',
  demoUrl: 'https://eversonbdeus.github.io/mascaras-st/'
}
  
]