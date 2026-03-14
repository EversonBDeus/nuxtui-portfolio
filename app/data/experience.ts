export type Experience = {
  id: string
  role: string
  company: string
  location?: string
  startDate: string
  endDate?: string
  description?: string
  highlights?: string[]
}

export const experiences: Experience[] = [
  {
    id: 'tahto-aprovisionamento-fixo',
    role: 'Atendente de Telemarketing',
    company: 'Tahto',
    location: 'Campo Grande, MS',
    startDate: '2019-05',
    endDate: '2024-05',
    description:
      'Atuação no gerenciamento de ordens de serviço em telefonia fixa, com foco em desbloqueio de linha, ativação de bina, testes técnicos e tratamento de falhas críticas.',
    highlights: [
      'Abertura de protocolos e encaminhamento para equipes de campo',
      'Suporte em casos emergenciais de serviços essenciais',
      'Treinamento de novos agentes e apoio operacional por e-mail'
    ]
  },
  {
    id: 'tahto-suporte-tecnico-fibra',
    role: 'Suporte Técnico Fibra',
    company: 'Tahto',
    location: 'Campo Grande, MS',
    startDate: '2024-06',
    description:
      'Atendimento técnico direto ao cliente para serviços de internet e telefone fixo, com diagnóstico de falhas, orientação de uso, configuração de equipamentos e suporte a dúvidas técnicas.',
    highlights: [
      'Análise e resolução de falhas de conexão',
      'Atendimento de clientes com histórico de múltiplos chamados',
      'Abordagem técnica, precisa e resolutiva em casos recorrentes'
    ]
  }
]