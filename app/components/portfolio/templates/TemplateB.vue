<script setup lang="ts">
import type { PortfolioData, Profile } from '~/app/types/portfolio'

defineProps<{
  profileData: Profile
  portfolioData: PortfolioData
}>()
</script>

<template>
  <div class="mx-auto grid max-w-6xl gap-6 p-4 md:grid-cols-[280px_1fr] md:p-8">
    <UCard class="h-fit">
      <h1 class="text-2xl font-bold">{{ profileData.fullName }}</h1>
      <p class="text-[var(--pf-neutral)]">{{ profileData.headline }}</p>
      <p class="mt-2 text-sm">{{ profileData.location }}</p>
    </UCard>

    <div class="space-y-6">
      <UCard>
        <h2 class="mb-2 text-xl font-semibold">Experiências</h2>
        <ul class="space-y-2">
          <li v-for="exp in portfolioData.experiences" :key="exp.id">
            <p class="font-medium">{{ exp.role }} · {{ exp.company }}</p>
            <p class="text-sm text-[var(--pf-neutral)]">{{ exp.summary }}</p>
          </li>
        </ul>
      </UCard>

      <UCard>
        <h2 class="mb-2 text-xl font-semibold">Skills</h2>
        <div class="flex flex-wrap gap-2">
          <UBadge v-for="skill in portfolioData.skills" :key="skill.id" color="primary" variant="soft">
            {{ skill.name }}
          </UBadge>
        </div>
      </UCard>
    </div>
  </div>
</template>
