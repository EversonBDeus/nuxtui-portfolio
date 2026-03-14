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