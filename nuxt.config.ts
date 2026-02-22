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

  // Travar compatibilidade do Nuxt para evitar mudanças inesperadas
  compatibilityDate: '2025-07-15',
   typescript: {
    typeCheck: false,
    // strict fica ligado por padrão quando typeCheck está ligado.
    // Só desliga se estiver migrando aos poucos:
    // strict: false,
  },

  // Nuxt DevTools (útil no desenvolvimento)
  devtools: {
    enabled: true,

    // Abre arquivo no editor / Component Inspector / Inspect
    componentInspector: true, // default: true
    vueDevTools: true,
    viteInspect: true, // default: true

    // Se você NÃO quer o DevTools te pedindo code-server:
    vscode: {
      enabled: false,
      startOnBoot: false
    },

    // Timeline é desligada por padrão — útil pra debugar estado/rotas
    timeline: {
      enabled: true,
      functions: {
        // por padrão inclui '#app' e '@unhead/vue' (bom manter)
        includeFrom: ['#app', '@unhead/vue']
      }
    },

    // Assets tab: útil para PDF / imagens / 3D
    assets: {
      uploadExtensions: ['png', 'jpg', 'jpeg', 'webp', 'pdf', 'glb', 'gltf']
    },

    // Telemetria do DevTools (opcional)
    telemetry: false
  },

  // Módulos principais do projeto
  modules: [// UI + DX
  '@nuxt/ui', '@pinia/nuxt', '@vueuse/nuxt', // Assets
  '@nuxt/image', '@nuxt/icon', '@nuxt/scripts', // Auth + Segurança
  '@sidebase/nuxt-auth', 'nuxt-security', // SEO (inclui sitemap/robots/og-image por dependência)
  '@nuxtjs/seo', // Hints (performance/a11y/boas práticas no devtools)
// '@nuxt/hints'
   '@nuxt/eslint'],

  // CSS global (Tailwind + Nuxt UI)
  css: ['~/assets/css/main.css'],

  

  // MUITO recomendado para SEO/Sitemap (troque para seu domínio quando publicar)
  // Em produção, defina NUXT_PUBLIC_SITE_URL (ex.: https://meudominio.com)
site: {
  url: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
  name: 'Portfolio'
}

  
})

