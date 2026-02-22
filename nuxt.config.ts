export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/scripts',
    '@sidebase/nuxt-auth',
    'nuxt-security',
    '@nuxtjs/seo',
    '@nuxt/hints'
  ],
  css: ['~/app/assets/css/main.css'],
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://portfolio.example.com'
  },
  compatibilityDate: '2026-01-01',
  devtools: { enabled: true }
})
