<script setup lang="ts">
import type { Project, ProjectRole } from '~/data/projects'

const props = defineProps<{
  modelValue: boolean
  item: Project | null
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const open = computed({
  get: () => props.modelValue,
  set: (v) => emit('update:modelValue', v)
})

const toast = useToast()

const roleLabel: Record<ProjectRole, string> = {
  frontend: 'Front-end',
  backend: 'Back-end',
  fullstack: 'Full Stack'
}

const screenshotsPath = computed(() => (props.item ? `/projects/${props.item.slug}` : '/'))

const hasLink = (u?: string) => !!u && u.startsWith('http')

function notify(msg: string) {
  toast.add({ title: 'Ação', description: msg, icon: 'i-lucide-info' })
}
</script>

<template>
  <USlideover
    v-model:open="open"
    side="right"
    inset
    :title="item?.title || 'Projeto'"
    :description="item ? roleLabel[item.role] : undefined"
  >
    <template #body>
      <div class="space-y-5">
        <p class="text-sm text-toned">
          {{ item?.description }}
        </p>

        <div class="flex flex-wrap gap-2">
          <UBadge v-for="t in item?.stack || []" :key="t" color="neutral" variant="soft">
            {{ t }}
          </UBadge>
        </div>

        <div class="flex gap-3 flex-wrap">
          <UButton
            icon="i-lucide-images"
            variant="soft"
            :to="screenshotsPath"
            @click="notify('Abrindo screenshots do projeto.')"
          >
            Ver screenshots
          </UButton>

          <UButton
            icon="i-lucide-github"
            variant="soft"
            :to="item?.repoUrl || ''"
            target="_blank"
            :disabled="!hasLink(item?.repoUrl)"
            @click="notify('Abrindo GitHub em nova guia.')"
          >
            GitHub
          </UButton>

          <UButton
            icon="i-lucide-external-link"
            variant="soft"
            :to="item?.demoUrl || ''"
            target="_blank"
            :disabled="!hasLink(item?.demoUrl)"
            @click="notify('Abrindo link do projeto em nova guia.')"
          >
            Link
          </UButton>
        </div>

        <UCard :ui="{ body: 'p-3' }">
          <div class="rounded-xl overflow-hidden border border-default">
            <img
              v-if="item"
              :src="item.coverImage"
              :alt="item.title"
              class="w-full object-cover"
            />
            <USkeleton v-else class="h-44 w-full" />
          </div>
        </UCard>

        <UCard v-if="item?.details?.trim()" :ui="{ body: 'p-3 space-y-2' }">
          <div class="flex items-center justify-between">
            <p class="font-semibold">Detalhes</p>
          </div>

          <UScrollArea class="h-40 pr-2">
            <p class="text-sm text-muted whitespace-pre-line">
              {{ item.details }}
            </p>
          </UScrollArea>
        </UCard>
      </div>
    </template>
  </USlideover>
</template>