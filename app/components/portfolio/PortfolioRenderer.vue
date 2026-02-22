<script setup lang="ts">
import type { PortfolioData, Profile, TemplateId, Theme } from '~/app/types/portfolio'
import ThemeApplier from '~/app/components/ThemeApplier.vue'
import TemplateA from '~/app/components/portfolio/templates/TemplateA.vue'
import TemplateB from '~/app/components/portfolio/templates/TemplateB.vue'

const props = defineProps<{
  profileData: Profile
  portfolioData: PortfolioData
  theme: Theme
  templateId: TemplateId
}>()

const templateComponent = computed(() => (props.templateId === 'template-b' ? TemplateB : TemplateA))
</script>

<template>
  <ThemeApplier :theme="theme">
    <component :is="templateComponent" :profile-data="profileData" :portfolio-data="portfolioData" />
  </ThemeApplier>
</template>
