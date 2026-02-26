<script setup lang="ts">
import type { Certificate } from '~/data/certificates'

const props = defineProps<{
  modelValue: boolean
  item: Certificate | null
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const open = computed({
  get: () => props.modelValue,
  set: (v) => emit('update:modelValue', v)
})

const timelineItems = computed(() => {
  if (!props.item) return []
  return [
    { title: 'Início', date: props.item.startDate, icon: 'i-lucide-play' },
    { title: 'Conclusão', date: props.item.endDate, icon: 'i-lucide-check-circle' }
  ]
})

const toast = useToast()
function linkToast() {
  toast.add({
    title: 'Abrindo certificado',
    description: 'O link será aberto em uma nova guia.',
    icon: 'i-lucide-external-link'
  })
}
</script>

<template>
  <USlideover
    v-model:open="open"
    side="right"
    inset
    :title="item?.title || 'Certificado'"
    :description="item?.provider"
  >
    <!-- IMPORTANTE: conteúdo do painel vai no #body -->
    <template #body>
      <div class="space-y-5">
        <p v-if="item?.description" class="text-sm text-gray-600 dark:text-gray-300">
          {{ item.description }}
        </p>

        <div class="flex gap-3 flex-wrap">
          <UButton
            v-if="item?.viewUrl"
            icon="i-lucide-external-link"
            variant="soft"
            :to="item.viewUrl"
            target="_blank"
            @click="linkToast"
          >
            Visualizar
          </UButton>

          <UButton
            v-if="item?.downloadUrl"
            icon="i-lucide-download"
            :to="item.downloadUrl"
            target="_blank"
            @click="linkToast"
          >
            Baixar
          </UButton>
        </div>

        <UCard :ui="{ body: 'p-3' }">
          <div class="rounded-lg overflow-hidden border border-default">
            <img
              v-if="item"
              :src="item.image"
              :alt="item.title"
              class="w-full object-cover"
            />
            <USkeleton v-else class="h-56 w-full" />
          </div>
        </UCard>

        <div class="space-y-2">
          <h4 class="font-semibold">Linha do tempo</h4>
          <UTimeline :items="timelineItems" />
        </div>
      </div>
    </template>
  </USlideover>
</template>