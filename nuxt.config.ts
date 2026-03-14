import { projects } from './app/data/projects'

const isDev = process.env.NODE_ENV === 'development'
const projectRoutes = projects.map((project) => `/projects/${project.slug}`)

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  typescript: {
    typeCheck: false
  },

  devtools: {
    enabled: isDev
  },
  colorMode: {
  preference: 'dark',
  fallback: 'dark',
  classSuffix: ''
},

  modules: [
    '@nuxt/fonts',
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-security',
    '@nuxtjs/seo',
    ...(isDev ? ['@nuxt/eslint'] : [])
  ],

  css: ['~/assets/css/main.css'],

  ui: {
    theme: {
      colors: ['primary', 'secondary', 'tertiary', 'success', 'info', 'warning', 'error', 'neutral']
    }
  },

  security: {
    headers: {
      contentSecurityPolicy: isDev
        ? false
        : {
            'default-src': ["'self'"],
            'base-uri': ["'self'"],
            'font-src': ["'self'", 'https:', 'data:'],
            'img-src': ["'self'", 'data:', 'blob:', 'https:'],
            'object-src': ["'none'"],
            'script-src': ["'self'", "'unsafe-inline'"],
            'script-src-attr': ["'unsafe-inline'"],
            'style-src': ["'self'", "'unsafe-inline'", 'https:'],
            'connect-src': ["'self'", 'https:', 'ws:', 'wss:'],
            'frame-ancestors': ["'self'"]
          }
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