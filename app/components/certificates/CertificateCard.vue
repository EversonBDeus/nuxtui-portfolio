<script setup lang="ts">
import type { Certificate } from '~/data/certificates'

const props = defineProps<{
  item: Certificate
}>()

const emit = defineEmits<{
  (e: 'open', item: Certificate): void
}>()
</script>

<template>
  <UCard
    class="cursor-pointer hover:shadow-md transition-shadow"
    :ui="{ body: 'p-3 space-y-3' }"
    @click="emit('open', props.item)"
  >
    <div class="rounded-lg overflow-hidden border border-default">
      <img :src="props.item.image" :alt="props.item.title" class="w-full h-36 object-cover" />
    </div>

    <div class="text-left">
      <p class="font-semibold leading-snug line-clamp-2">
        {{ props.item.title }}
      </p>

      <p v-if="props.item.provider" class="text-sm text-muted">
        {{ props.item.provider }}
      </p>
    </div>
  </UCard>
</template>