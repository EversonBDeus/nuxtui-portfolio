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
  set: (value: boolean) => emit('update:modelValue', value)
})

const title = computed(() => props.item?.title || 'Certificado')
const provider = computed(() => props.item?.provider || '')
const description = computed(() => props.item?.description || '')

const imgSrc = computed(() => (props.item?.image ? toPublicPath(props.item.image) : ''))
const hasImage = computed(() => !!imgSrc.value)

const viewUrl = computed(() => props.item?.viewUrl || '')
const downloadUrl = computed(() => props.item?.downloadUrl || '')

const canView = computed(() => !!viewUrl.value)
const canDownload = computed(() => !!downloadUrl.value && downloadUrl.value !== viewUrl.value)

const timelineItems = computed(() => {
  if (!props.item) return []

  return [
    {
      title: 'Início',
      date: formatYm(props.item.startDate),
      icon: 'i-lucide-play'
    },
    {
      title: 'Conclusão',
      date: formatYm(props.item.endDate),
      icon: 'i-lucide-check-circle'
    }
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
  if (!hasImage.value || !import.meta.client) return

  toastOpen('Imagem do certificado')
  window.open(imgSrc.value, '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <USlideover
    v-model:open="open"
    side="right"
    inset
    :title="title"
    :description="provider"
  >
    <template #body>
      <div class="space-y-5">
        <p v-if="description" class="text-sm text-muted">
          {{ description }}
        </p>

        <!-- Ações -->
        <div class="flex flex-wrap gap-3">
          <UButton
            v-if="canView"
            icon="i-lucide-external-link"
            variant="soft"
            :to="viewUrl"
            target="_blank"
            @click="toastOpen('Visualizar certificado')"
          >
            Visualizar
          </UButton>

          <UButton
            v-if="canDownload"
            icon="i-lucide-download"
            variant="soft"
            :to="downloadUrl"
            target="_blank"
            @click="toastDownload"
          >
            Baixar
          </UButton>

          <UButton
            icon="i-lucide-image"
            variant="soft"
            color="neutral"
            :disabled="!hasImage"
            @click="openImage"
          >
            Abrir imagem
          </UButton>
        </div>

        <!-- Imagem -->
        <UCard :ui="{ body: 'p-3' }">
          <div class="overflow-hidden rounded-lg border border-default bg-muted">
            <img
              v-if="hasImage"
              :src="imgSrc"
              :alt="title"
              class="w-full object-cover"
            >
            <USkeleton v-else class="h-56 w-full" />
          </div>
        </UCard>

        <!-- Timeline -->
        <div v-if="timelineItems.length" class="space-y-2">
          <h4 class="font-semibold">Linha do tempo</h4>
          <UTimeline :items="timelineItems" />
        </div>
      </div>
    </template>
  </USlideover>
</template>