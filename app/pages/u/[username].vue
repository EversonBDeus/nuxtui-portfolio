<script setup lang="ts">
import PortfolioRenderer from '~/app/components/portfolio/PortfolioRenderer.vue'
import { usePortfolioStore } from '~/app/stores/portfolio'
import { useProfileStore } from '~/app/stores/profile'
import { useThemeStore } from '~/app/stores/theme'

const route = useRoute()
const profileStore = useProfileStore()
const portfolioStore = usePortfolioStore()
const themeStore = useThemeStore()

const username = computed(() => String(route.params.username || ''))

await Promise.all([
  profileStore.loadPublicProfile(username.value),
  portfolioStore.loadByUsername(username.value),
  themeStore.loadTheme()
])
</script>

<template>
  <PortfolioRenderer
    v-if="profileStore.profile"
    :profile-data="profileStore.profile"
    :portfolio-data="portfolioStore.data"
    :theme="themeStore.theme"
    :template-id="themeStore.templateId"
  />
  <main v-else class="mx-auto flex min-h-screen max-w-2xl items-center justify-center p-4">
    <UAlert
      title="Usuário não encontrado"
      description="Este portfólio não existe ou está indisponível no momento."
      color="warning"
    />
  </main>
</template>
