import { projects } from './app/data/projects'

const projectRoutes = projects.map((project) => `/projects/${project.slug}`)

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  typescript: {
    typeCheck: true
  },

  devtools: {
    enabled: process.env.NODE_ENV === 'development',
    componentInspector: true,
    vueDevTools: true,
    viteInspect: true,
    vscode: {
      enabled: false,
      startOnBoot: false
    },
    timeline: {
      enabled: true,
      functions: {
        includeFrom: ['#app', '@unhead/vue']
      }
    },
    assets: {
      uploadExtensions: ['png', 'jpg', 'jpeg', 'webp', 'pdf']
    },
    telemetry: false
  },

  modules: [
    '@nuxt/fonts',
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxt/icon',
    'nuxt-security',
    '@nuxtjs/seo',
    '@nuxt/eslint'
  ],

  css: ['~/assets/css/main.css'],

  ui: {
    theme: {
      colors: ['primary', 'secondary', 'tertiary', 'success', 'info', 'warning', 'error', 'neutral']
    }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/robots.txt', '/sitemap.xml', ...projectRoutes]
    }
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://seu-dominio.com'
    }
  },

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://seu-dominio.com',
    name: 'Everson Boeira de Deus • Portfólio'
  }
})