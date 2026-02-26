<script setup lang="ts">
const siteName = 'Everson Deus • Portfólio'

useSeoMeta({
  titleTemplate: (titleChunk) => (titleChunk ? `${titleChunk} · ${siteName}` : siteName),
  description: 'Portfólio de Everson Deus. Projetos, habilidades e certificados.',
  ogTitle: siteName,
  ogDescription: 'Projetos, habilidades e certificados.',
  ogType: 'website',
  ogImage: '/og.png',
  twitterCard: 'summary_large_image',
  twitterImage: '/og.png'
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>