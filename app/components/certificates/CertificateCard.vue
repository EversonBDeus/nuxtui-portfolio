<script setup lang="ts">
import type { Certificate } from '~/data/certificates'
import { formatMonthYearPt, toPublicPath } from '~/utils/format'

const props = defineProps<{
  item: Certificate
}>()

const emit = defineEmits<{
  (e: 'open', item: Certificate): void
}>()

const cardImageSrc = computed(() => toPublicPath(props.item.coverImage || props.item.image))
const issuedLabel = computed(() => formatMonthYearPt(props.item.issuedDate))
</script>

<template>
  <UCard
    v-reveal
    class="group cursor-pointer transition hover:-translate-y-0.5 hover:shadow-md"
    :ui="{ body: 'p-3 space-y-3' }"
    @click="emit('open', props.item)"
  >
    <div class="overflow-hidden rounded-xl border border-default bg-white">
      <img
        :src="cardImageSrc"
        :alt="props.item.title"
        class="h-40 w-full object-contain bg-white p-2 transition duration-300 group-hover:scale-[1.01]"
      >
    </div>

    <div class="space-y-3 text-left">
      <div class="flex flex-wrap gap-2 text-xs">
        <span class="rounded-full border border-default px-2.5 py-1 text-muted">
          {{ issuedLabel }}
        </span>

        <span
          v-if="props.item.workload"
          class="rounded-full border border-default px-2.5 py-1 text-muted"
        >
          {{ props.item.workload }}
        </span>
      </div>

      <div class="space-y-1.5">
        <p class="font-semibold leading-snug line-clamp-2">
          {{ props.item.title }}
        </p>

        <p v-if="props.item.provider" class="text-sm text-muted">
          {{ props.item.provider }}
          <span v-if="props.item.issuer"> · {{ props.item.issuer }}</span>
        </p>
      </div>
    </div>
  </UCard>
</template>