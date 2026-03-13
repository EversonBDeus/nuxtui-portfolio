<script setup lang="ts">
const siteName = 'Everson Boeira de Deus • Portfólio'
const siteDescription =
  'Portfólio de Everson Boeira de Deus com projetos, habilidades e certificados.'
const ogImage = '/img/profile/avatar.jpeg'

useSeoMeta({
  titleTemplate: (titleChunk) => (titleChunk ? `${titleChunk} · ${siteName}` : siteName),
  description: siteDescription,
  ogTitle: siteName,
  ogDescription: siteDescription,
  ogType: 'website',
  ogImage,
  twitterCard: 'summary_large_image',
  twitterImage: ogImage
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>