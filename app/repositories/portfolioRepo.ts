import type { PortfolioData } from '~/app/types/portfolio'

const mockPortfolio: PortfolioData = {
  experiences: [
    {
      id: 'e1',
      company: 'Studio Alpha',
      role: 'Senior Frontend Engineer',
      startDate: '2022-01',
      summary: 'Liderança técnica na construção de plataformas de conteúdo multiusuário.'
    }
  ],
  projects: [
    {
      id: 'p1',
      title: 'Portal de Portfólios',
      description: 'Plataforma para criação de currículo online com templates e temas customizáveis.',
      url: 'https://example.com',
      tags: ['Nuxt', 'Pinia', 'UI']
    }
  ],
  skills: [
    { id: 's1', name: 'Nuxt', level: 'expert' },
    { id: 's2', name: 'TypeScript', level: 'advanced' }
  ],
  certificates: [
    {
      id: 'c1',
      title: 'Arquitetura de Software',
      issuer: 'Instituto Exemplo',
      issueDate: '2024-05',
      url: 'https://example.com/certificate'
    }
  ]
}

export const portfolioRepo = {
  async getByUsername(_username: string) {
    return mockPortfolio
  },
  async getMyPortfolio() {
    return mockPortfolio
  },
  async save(data: PortfolioData) {
    Object.assign(mockPortfolio, data)
    return mockPortfolio
  }
}
