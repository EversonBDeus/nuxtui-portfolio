export type Education = {
  id: string
  title: string
  institution: string
  startDate: string
  endDate?: string
  description?: string
}
export const education: Education[] = [
  {
    id: 'estacio-ads',
    title: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    institution: 'Universidade Estácio de Sá',
    startDate: '2018-12',
    endDate: '2022-03',
    description:
      'Graduação em Análise e Desenvolvimento de Sistemas concluída na Estácio, com foco em desenvolvimento de software, lógica de programação, bancos de dados e construção de aplicações.'
  }
]
