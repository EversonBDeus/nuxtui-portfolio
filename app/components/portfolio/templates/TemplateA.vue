<script setup lang="ts">
import type { PortfolioData, Profile } from '~/app/types/portfolio'

defineProps<{
  profileData: Profile
  portfolioData: PortfolioData
}>()
</script>

<template>
  <div class="mx-auto max-w-5xl space-y-6 p-4 md:p-8">
    <UCard>
      <h1 class="text-3xl font-bold">{{ profileData.fullName }}</h1>
      <p class="text-lg text-[var(--pf-neutral)]">{{ profileData.headline }}</p>
      <p class="mt-3">{{ profileData.bio }}</p>
    </UCard>

    <UCard>
      <h2 class="mb-3 text-xl font-semibold">Projetos</h2>
      <div class="grid gap-3 md:grid-cols-2">
        <UCard v-for="project in portfolioData.projects" :key="project.id">
          <h3 class="font-semibold">{{ project.title }}</h3>
          <p class="text-sm">{{ project.description }}</p>
        </UCard>
      </div>
    </UCard>
  </div>
</template>
