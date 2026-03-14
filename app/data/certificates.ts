export type Certificate = {
  id: string
  title: string
  provider?: string
  issuer?: string
  coverImage?: string // opcional: imagem específica do card
  image: string // imagem completa do certificado em /public
  credentialUrl?: string // link oficial do certificado
  credentialId?: string
  issuedDate: string // YYYY-MM-DD
  workload?: string
  description?: string
}

export const certificates: Certificate[] = [
  {
    id: 'nuxt-3-fullstack',
    title: 'Master Nuxt 3 - Full-Stack Complete Guide',
    provider: 'Udemy',
    issuer: 'Piotr Jura',
    image: 'img/certificate/nuxt3.jpg',
    credentialUrl: 'https://ude.my/UC-b5d67768-a7ed-42e9-84ba-046d7b049387',
    credentialId: 'UC-b5d67768-a7ed-42e9-84ba-046d7b049387',
    issuedDate: '2025-03-24',
    workload: '15,5 horas',
    description: 'Formação completa em Nuxt 3 com foco em aplicações full-stack modernas.'
  },
  {
    id: 'aws-serverless-typescript',
    title: 'AWS Serverless com TypeScript e AWS Cloud Development Kit',
    provider: 'Udemy',
    issuer: 'Siecola Code',
    image: 'img/certificate/aws.jpg',
    credentialUrl: 'https://ude.my/UC-f95834c9-892b-4f56-aedc-59c42254b09a',
    credentialId: 'UC-f95834c9-892b-4f56-aedc-59c42254b09a',
    issuedDate: '2023-09-20',
    workload: '28 horas',
    description: 'Curso voltado a arquitetura serverless com AWS, TypeScript e CDK.'
  },
  {
    id: 'vue-js-2-guia-completo',
    title: 'Curso Vue JS 2 - O Guia Completo (incl. Vue Router & Vuex)',
    provider: 'Udemy',
    issuer: 'Leonardo Moura Leitao, Cod3r Cursos Online, Maximilian Schwarzmüller',
    image: 'img/certificate/vuejs2.jpg',
    credentialUrl: 'https://ude.my/UC-4f77e047-5f3d-488a-a926-cc6e4b5f4779',
    credentialId: 'UC-4f77e047-5f3d-488a-a926-cc6e4b5f4779',
    issuedDate: '2023-03-24',
    workload: '43 horas',
    description: 'Formação completa em Vue.js 2 com roteamento, Vuex e construção de aplicações reais.'
  },
  {
    id: 'javascript-jquery-ajax-json',
    title: 'Aprenda Javascript, jQuery, Ajax e Json do Zero na Prática',
    provider: 'Udemy',
    issuer: 'Ivan Lourenço Gomes',
    image: 'img/certificate/javascript.jpg',
    credentialUrl: 'https://ude.my/UC-1ccb1cd3-78f4-4dc2-924f-65dfce4f4089',
    credentialId: 'UC-1ccb1cd3-78f4-4dc2-924f-65dfce4f4089',
    issuedDate: '2022-05-22',
    workload: '19 horas',
    description: 'Curso prático com fundamentos de JavaScript, jQuery, Ajax e manipulação de JSON.'
  },
  {
    id: 'bootstrap-5-agil-moderna',
    title: 'Bootstrap 5 - Crie Sites de Forma Ágil e Moderna (2021)',
    provider: 'Udemy',
    issuer: 'Roberto Oliveira',
    image: 'img/certificate/bootstrap.jpg',
    credentialUrl: 'https://ude.my/UC-e5a61481-3950-4fcd-961c-25f2ad7b1a45',
    credentialId: 'UC-e5a61481-3950-4fcd-961c-25f2ad7b1a45',
    issuedDate: '2021-07-02',
    workload: '6 horas',
    description: 'Curso focado em Bootstrap 5 para construção rápida de interfaces responsivas.'
  },
  {
    id: 'cebrac-geracao-web',
    title: 'Geração Web',
    provider: 'CEBRAC',
    image: 'img/certificate/cebrac-gew.jpeg',
    issuedDate: '2018-03-03',
    workload: '200 horas',
    description: 'Curso de formação em Geração Web com aprovação concluída no CEBRAC.'
  },
  {
    id: 'cebrac-hardware',
    title: 'Hardware',
    provider: 'CEBRAC',
    image: 'img/certificate/cebrac-hardware.jpeg',
    issuedDate: '2018-02-07',
    workload: '64 horas',
    description: 'Curso de Hardware com foco em fundamentos técnicos e aprovação concluída no CEBRAC.'
  },
  {
    id: 'estacio-ads-diploma',
    title: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    provider: 'Universidade Estácio de Sá',
    issuer: 'Faculdade Estácio de Sá de Campo Grande',
    image: 'img/certificate/diplama-digital-estacio.png',
    credentialUrl: '/img/certificate/DiplomaDigital.pdf',
    issuedDate: '2022-05-27',
    description: 'Diploma digital do curso superior de tecnologia em Análise e Desenvolvimento de Sistemas.'
  }
]