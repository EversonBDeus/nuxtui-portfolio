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
  name: 'Everson Boeira de Deus',
  headline: 'Desenvolvedor Full Stack | Vue.js | Node.js | Suporte Técnico',
  avatarSrc: '/img/profile/avatar.jpeg',

  cv: {
    url: '/files/cv.pdf',
    openInNewTab: true
  },

  socials: [
    {
      label: 'LinkedIn',
      icon: 'i-simple-icons-linkedin',
      url: 'https://www.linkedin.com/in/everson-deus',
      brandClass: 'brand-linkedin'
    },
    {
      label: 'GitHub',
      icon: 'i-simple-icons-github',
      url: 'https://github.com/EversonBDeus',
      brandClass: 'brand-github'
    }
  ] satisfies SocialLink[],

  contact: {
    whatsappUrl: 'https://wa.me/5567991014315',
    emailUrl: 'mailto:everson.deus@outlook.com.br'
  },

  about: [
    {
      label: 'Sobre mim',
      icon: 'i-lucide-user',
      content:
        'Profissional de TI com experiência em desenvolvimento web e suporte técnico. Atuo na criação de interfaces responsivas, construção de sistemas e resolução de problemas com foco em eficiência, qualidade e boa experiência do usuário.'
    },
    {
      label: 'Stack principal',
      icon: 'i-lucide-code',
      content:
        'Trabalho principalmente com JavaScript, TypeScript, Vue.js, Nuxt.js, Node.js, Tailwind CSS, Bootstrap, Supabase, AWS, MySQL e MongoDB. Tenho foco em aplicações web modernas, organização de código e interfaces bem estruturadas.'
    },
    {
      label: 'Experiência atual',
      icon: 'i-lucide-briefcase',
      content:
        'Atualmente atuo com suporte técnico em fibra, atendendo casos recorrentes e mais sensíveis, com diagnóstico de falhas, orientação ao cliente, análise técnica e busca por soluções mais precisas e resolutivas.'
    }
  ] satisfies AboutItem[]
}