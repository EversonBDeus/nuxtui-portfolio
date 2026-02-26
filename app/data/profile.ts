export type SocialLink = {
  label: string
  icon: string
  url: string
  brandClass: string
}

export type AboutItem = {
  label: string
  icon: string
  content: string
}

export const profile = {
  name: 'Everson Deus',
  headline: 'Desenvolvedor Web',
  avatarSrc: '/img/profile/avatar.jpeg',

  socials: [
    { label: 'LinkedIn', icon: 'i-lucide-linkedin', url: '', brandClass: 'brand-linkedin' },
    { label: 'GitHub', icon: 'i-lucide-github', url: '', brandClass: 'brand-github' },
    { label: 'Instagram', icon: 'i-lucide-instagram', url: '', brandClass: 'brand-instagram' }
  ] satisfies SocialLink[],

  contact: {
    whatsappUrl: '',
    telegramUrl: ''
  },

  about: [
    {
      label: 'Sobre mim',
      icon: 'i-lucide-user',
      content: 'Escreva aqui um resumo curto sobre você.'
    },
    {
      label: 'Stack e foco',
      icon: 'i-lucide-code',
      content: 'Liste as tecnologias que você domina e o que você gosta de construir.'
    },
    {
      label: 'Próximo passo (SaaS)',
      icon: 'i-lucide-rocket',
      content: 'Explique em 2–3 linhas sua visão do portfólio virar um SaaS com templates.'
    }
  ] satisfies AboutItem[]
}