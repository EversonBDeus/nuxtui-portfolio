<script setup lang="ts">
import type { Certificate } from '~/data/certificates'
import { formatDatePt, formatMonthYearPt, toPublicPath } from '~/utils/format'

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
const issuer = computed(() => props.item?.issuer || '')
const credentialId = computed(() => props.item?.credentialId || '')
const credentialUrl = computed(() => props.item?.credentialUrl || '')
const workload = computed(() => props.item?.workload || '')

const imgSrc = computed(() => (props.item?.image ? toPublicPath(props.item.image) : ''))
const hasImage = computed(() => !!imgSrc.value)

const issuedDateLabel = computed(() => {
  return props.item?.issuedDate ? formatDatePt(props.item.issuedDate) : ''
})

const issuedMonthYear = computed(() => {
  return props.item?.issuedDate ? formatMonthYearPt(props.item.issuedDate) : ''
})

const toast = useToast()

function toastOpen(label: string) {
  toast.add({
    title: label,
    description: 'Abrindo em uma nova guia.',
    icon: 'i-lucide-external-link'
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
      <div class="space-y-6">
        <div class="space-y-3">
          <div class="flex flex-wrap gap-2 text-xs">
            <span
              v-if="issuedMonthYear"
              class="rounded-full border border-default px-2.5 py-1 text-muted"
            >
              {{ issuedMonthYear }}
            </span>

            <span
              v-if="workload"
              class="rounded-full border border-default px-2.5 py-1 text-muted"
            >
              {{ workload }}
            </span>
          </div>

          <p v-if="description" class="text-sm leading-6 text-muted">
            {{ description }}
          </p>
        </div>

        <div class="flex flex-wrap gap-3">
          <UButton
            v-if="credentialUrl"
            icon="i-lucide-badge-check"
            variant="soft"
            :to="credentialUrl"
            target="_blank"
            @click="toastOpen('Credencial oficial')"
          >
            Ver credencial
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

        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <UCard :ui="{ body: 'p-4 space-y-1.5' }">
            <p class="text-xs uppercase tracking-[0.18em] text-muted">
              Emitido em
            </p>
            <p class="font-medium leading-snug">
              {{ issuedDateLabel || '—' }}
            </p>
          </UCard>

          <UCard v-if="workload" :ui="{ body: 'p-4 space-y-1.5' }">
            <p class="text-xs uppercase tracking-[0.18em] text-muted">
              Carga horária
            </p>
            <p class="font-medium leading-snug">
              {{ workload }}
            </p>
          </UCard>

          <UCard v-if="issuer" :ui="{ body: 'p-4 space-y-1.5' }">
            <p class="text-xs uppercase tracking-[0.18em] text-muted">
              Instrutor(es)
            </p>
            <p class="font-medium leading-snug">
              {{ issuer }}
            </p>
          </UCard>

          <UCard v-if="credentialId" :ui="{ body: 'p-4 space-y-1.5' }">
            <p class="text-xs uppercase tracking-[0.18em] text-muted">
              Código do certificado
            </p>
            <p class="font-medium break-all leading-snug">
              {{ credentialId }}
            </p>
          </UCard>
        </div>

        <UCard :ui="{ body: 'p-3' }">
          <div class="overflow-hidden rounded-xl border border-default bg-white">
            <img
              v-if="hasImage"
              :src="imgSrc"
              :alt="title"
              class="max-h-[70vh] w-full object-contain bg-white"
            >
            <USkeleton v-else class="h-72 w-full" />
          </div>
        </UCard>
      </div>
    </template>
  </USlideover>
</template>