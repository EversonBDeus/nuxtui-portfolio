<script setup lang="ts">
import type { Project, ProjectRole } from '~/data/projects'

const props = defineProps<{
  item: Project
}>()

const emit = defineEmits<{
  (e: 'open', item: Project): void
}>()

const roleLabel: Record<ProjectRole, string> = {
  frontend: 'Front-end',
  backend: 'Back-end',
  fullstack: 'Full Stack'
}

const roleColor: Record<ProjectRole, 'primary' | 'secondary' | 'tertiary'> = {
  frontend: 'primary',
  backend: 'secondary',
  fullstack: 'tertiary'
}
</script>

<template>
  <UCard
    class="group cursor-pointer"
    :ui="{ body: 'p-3 space-y-3' }"
    @click="emit('open', item)"
  >
    <div class="relative rounded-xl overflow-hidden border border-default">
      <img :src="item.coverImage" :alt="item.title" class="h-44 w-full object-cover" />

      <div
        class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity
               bg-gradient-to-t from-black/70 via-black/20 to-transparent"
      />

      <div class="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <p class="text-sm font-semibold text-white line-clamp-1">
          {{ item.title }}
        </p>
        <p class="text-xs text-white/80 line-clamp-2">
          {{ item.shortDescription }}
        </p>
      </div>
    </div>

    <div class="flex items-center gap-2">
      <p class="font-semibold line-clamp-1">
        {{ item.title }}
      </p>

      <UBadge
        class="ml-auto"
        :color="roleColor[item.role]"
        variant="solid"
        size="sm"
      >
        {{ roleLabel[item.role] }}
      </UBadge>
    </div>
  </UCard>
</template>