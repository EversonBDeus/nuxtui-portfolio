<script setup lang="ts">
import type { Theme } from '~/app/types/portfolio'

const props = defineProps<{
  theme: Theme
}>()

const styleVars = computed(() => ({
  '--pf-primary': props.theme.primary,
  '--pf-neutral': props.theme.neutral,
  '--pf-background': props.theme.background,
  '--pf-surface': props.theme.surface,
  '--pf-text': props.theme.text,
  '--pf-radius': props.theme.radius,
  '--pf-font': props.theme.font
}))
</script>

<template>
  <div :style="styleVars" class="min-h-screen bg-[var(--pf-background)] text-[var(--pf-text)] [font-family:var(--pf-font)]">
    <slot />
  </div>
</template>
