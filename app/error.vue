<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()

function goHome() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <!-- Pode usar layout aqui também, como o Nuxt recomenda -->
  <NuxtLayout>
    <UError
      :error="error"
      :clear="{
        label: 'Voltar ao início',
        icon: 'i-lucide-arrow-left',
        color: 'neutral',
        variant: 'soft',
        class: 'rounded-full'
      }"
      @clear="goHome"
    />
  </NuxtLayout>
</template>