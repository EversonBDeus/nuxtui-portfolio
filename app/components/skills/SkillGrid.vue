<script setup lang="ts">
import type { Skill, SkillLevel } from '~/data/skills'

defineProps<{ items: Skill[] }>()

const labelByLevel: Record<SkillLevel, string> = {
  basic: 'Básico',
  intermediate: 'Intermediário',
  advanced: 'Avançado'
}

const colorByLevel: Record<SkillLevel, 'primary' | 'secondary' | 'tertiary'> = {
  basic: 'tertiary',
  intermediate: 'secondary',
  advanced: 'primary'
}
</script>

<template>
  <div class="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
    <UCard
      v-for="skill in items"
      :key="skill.name"
      v-reveal
      class="text-center"
      :ui="{ body: 'p-3 sm:p-4 flex flex-col items-center gap-2' }"
    >
      <UIcon :name="skill.icon" class="text-2xl sm:text-3xl" :class="skill.colorClass || ''" />

      <p class="text-xs font-medium leading-tight sm:text-sm">
        {{ skill.name }}
      </p>

      <UBadge
        :color="colorByLevel[skill.level]"
        variant="subtle"
        size="xs"
        class="mt-1 font-semibold"
      >
        {{ labelByLevel[skill.level] }}
      </UBadge>
    </UCard>
  </div>
</template>