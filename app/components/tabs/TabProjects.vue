<script setup lang="ts">
import { projects } from '~/data/projects'
import type { Project } from '~/data/projects'

import ProjectCard from '../projects/ProjectCard.vue'
import ProjectSlideover from '../projects/ProjectSlideover.vue'

const selected = ref<Project | null>(null)
const isOpen = ref(false)

function openProject(item: Project) {
  selected.value = item
  isOpen.value = true
}
</script>

<template>
  <div class="pt-4 space-y-4">
    <div class="text-left">
      <h2 class="text-lg font-semibold">Projetos</h2>
      <p class="text-sm text-muted">
        Clique no card para detalhes. Clique na imagem para ver screenshots.
      </p>
    </div>

    <UEmpty
      v-if="projects.length === 0"
      icon="i-lucide-folder-x"
      title="Nenhum projeto ainda"
      description="Adicione projetos em data/projects.ts."
    />

    <div v-else>
      <div class="hidden lg:block">
        <UScrollArea class="h-130 pr-2">
          <div class="grid grid-cols-2 xl:grid-cols-3 gap-3">
            <ProjectCard v-for="p in projects" :key="p.id" :item="p" @open="openProject" />
          </div>
        </UScrollArea>
      </div>

      <div class="lg:hidden">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <ProjectCard v-for="p in projects" :key="p.id" :item="p" @open="openProject" />
        </div>
      </div>
    </div>

    <ProjectSlideover v-model="isOpen" :item="selected" />
  </div>
</template>