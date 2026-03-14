<script setup lang="ts">
import type { Project, ProjectRole } from '~/data/projects'

const props = defineProps<{ item: Project }>()
const emit = defineEmits<{ (e: 'open', item: Project): void }>()

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

function openScreenshots(e: MouseEvent | KeyboardEvent) {
  e.stopPropagation()
  navigateTo(`/projects/${props.item.slug}`)
}
</script>

<template>
  <UCard
    v-reveal
    class="group cursor-pointer"
    :ui="{ body: 'p-2 sm:p-3 space-y-2 sm:space-y-3' }"
    @click="emit('open', item)"
  >
    <div
      class="relative overflow-hidden rounded-xl border border-default focus:outline-none"
      role="link"
      tabindex="0"
      @click="openScreenshots"
      @keydown.enter="openScreenshots"
      @keydown.space.prevent="openScreenshots"
    >
      <img :src="item.coverImage" :alt="item.title" class="h-32 w-full object-cover sm:h-44" />

      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      <UBadge
        v-reveal
        class="absolute left-2 top-2 z-10"
        :color="roleColor[item.role]"
        variant="solid"
        size="xs"
      >
        {{ roleLabel[item.role] }}
      </UBadge>

      <UBadge
        v-if="item.stack?.length"
        v-reveal
        class="absolute right-2 top-2 z-10 border border-white/10 bg-black/40 text-white"
        color="neutral"
        variant="solid"
        size="xs"
      >
        {{ item.stack.length }} techs
      </UBadge>

      <div
        class="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden p-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:block"
      >
        <div class="flex flex-wrap gap-1.5">
          <UBadge
            v-for="t in (item.stack || []).slice(0, 4)"
            :key="t"
            v-reveal
            color="neutral"
            variant="solid"
            size="xs"
            class="border border-white/10 bg-black/45 text-white"
          >
            {{ t }}
          </UBadge>

          <UBadge
            v-if="(item.stack || []).length > 4"
            v-reveal
            color="neutral"
            variant="solid"
            size="xs"
            class="border border-white/10 bg-black/45 text-white"
          >
            +{{ (item.stack || []).length - 4 }}
          </UBadge>
        </div>

        <p class="mt-2 text-[11px] text-white/80">
          Clique na imagem para screenshots • clique no card para detalhes
        </p>
      </div>
    </div>

    <div class="text-left">
      <p class="line-clamp-1 text-sm font-semibold sm:text-base">
        {{ item.title }}
      </p>
      <p class="line-clamp-2 text-xs text-muted sm:text-sm">
        {{ item.shortDescription }}
      </p>
    </div>
  </UCard>
</template>