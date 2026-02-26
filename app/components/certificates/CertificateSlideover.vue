<script setup lang="ts">
import type { Certificate } from '~/data/certificates'
import { formatYm, toPublicPath } from '~/utils/format'

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

const imgSrc = computed(() => (props.item ? toPublicPath(props.item.image) : ''))

const timelineItems = computed(() => {
  if (!props.item) return []
  return [
    { title: 'Início', date: formatYm(props.item.startDate), icon: 'i-lucide-play' },
    { title: 'Conclusão', date: formatYm(props.item.endDate), icon: 'i-lucide-check-circle' }
  ]
})

const toast = useToast()

function toastOpen(label: string) {
  toast.add({
    title: label,
    description: 'Abrindo em uma nova guia.',
    icon: 'i-lucide-external-link'
  })
}

function toastDownload() {
  toast.add({
    title: 'Download',
    description: 'Abrindo o arquivo para baixar.',
    icon: 'i-lucide-download'
  })
}

function openImage() {
  if (!imgSrc.value) return
  toastOpen('Imagem do certificado')
  window.open(imgSrc.value, '_blank', 'noopener,noreferrer')
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
    <template #body>
      <div class="space-y-5">
        <p v-if="item?.description" class="text-sm text-muted">
          {{ item.description }}
        </p>

        <!-- Ações -->
        <div class="flex gap-3 flex-wrap">
          <UButton
            v-if="item?.viewUrl"
            icon="i-lucide-external-link"
            variant="soft"
            :to="item.viewUrl"
            target="_blank"
            @click="toastOpen('Visualizar certificado')"
          >
            Visualizar
          </UButton>

          <UButton
            v-if="item?.downloadUrl"
            icon="i-lucide-download"
            variant="soft"
            :to="item.downloadUrl"
            target="_blank"
            @click="toastDownload"
          >
            Baixar
          </UButton>

          <UButton
            icon="i-lucide-image"
            variant="soft"
            color="neutral"
            @click="openImage"
          >
            Abrir imagem
          </UButton>
        </div>

        <!-- Imagem -->
        <UCard :ui="{ body: 'p-3' }">
          <div class="rounded-lg overflow-hidden border border-default bg-muted">
            <img
              v-if="item"
              :src="imgSrc"
              :alt="item.title"
              class="w-full object-cover"
            />
            <USkeleton v-else class="h-56 w-full" />
          </div>
        </UCard>

        <!-- Timeline -->
        <div class="space-y-2">
          <h4 class="font-semibold">Linha do tempo</h4>
          <UTimeline :items="timelineItems" />
        </div>
      </div>
    </template>
  </USlideover>
</template>