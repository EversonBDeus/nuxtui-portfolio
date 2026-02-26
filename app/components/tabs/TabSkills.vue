<script setup lang="ts">
import { skills } from '~/data/skills'
import SkillGrid from '~/components/skills/SkillGrid.vue'

const isLoading = ref(false)
</script>

<template>
  <div class="pt-4">
    <div v-if="isLoading" class="space-y-3">
      <USkeleton class="h-10 w-full" />
      <USkeleton class="h-24 w-full" />
      <USkeleton class="h-24 w-full" />
    </div>

    <div v-else class="space-y-6">
      <div class="text-left">
        <h2 class="text-lg font-semibold">Habilidades</h2>
        <p class="text-sm text-muted">
          Tecnologias e ferramentas que uso no dia a dia.
        </p>
      </div>

      <SkillGrid :items="skills" />
    </div>
  </div>
</template>