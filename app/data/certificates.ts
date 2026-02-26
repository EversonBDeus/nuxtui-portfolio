export type Certificate = {
  id: string
  title: string
  provider?: string
  image: string // caminho em /public
  viewUrl?: string // url para visualizar
  downloadUrl?: string // url para baixar
  startDate: string // YYYY-MM
  endDate: string // YYYY-MM
  description?: string
}

export const certificates: Certificate[] = [
  {
    id: 'nuxt-supabase',
    title: 'Nuxt 3 & Supabase Mastery: Build 2 Full-Stack Apps',
    provider: 'Udemy',
    image: 'img/certificate/nuxt-supabase.png',
    viewUrl: 'https://udemy-certificate.s3.amazonaws.com/image/UC-b5d67768-a7ed-42e9-84ba-046d7b049387.jpg',
    downloadUrl: 'https://udemy-certificate.s3.amazonaws.com/image/UC-b5d67768-a7ed-42e9-84ba-046d7b049387.jpg',
    startDate: '2024-01',
    endDate: '2024-02',
    description: 'Curso focado em Nuxt + Supabase com projetos práticos.'
  },
  {
    id: 'bootstrap5',
    title: 'Bootstrap 5: Crie Sites Responsives de Forma Ágil e Moderna',
    provider: 'Udemy',
    image: 'img/certificate/bootstrap5.png',
    viewUrl: 'https://udemy-certificate.s3.amazonaws.com/image/UC-e5a61481-3950-4fcd-961c-25f2ad7b1a45.jpg',
    downloadUrl: 'https://udemy-certificate.s3.amazonaws.com/image/UC-e5a61481-3950-4fcd-961c-25f2ad7b1a45.jpg',
    startDate: '2023-11',
    endDate: '2023-11',
    description: 'Curso de Bootstrap 5 com foco em layout responsivo.'
  }
]