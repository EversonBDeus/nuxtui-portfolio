<script setup lang="ts">
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
</script>

<template>
  <!-- bg-theme = gradiente guiado pelo tema -->
  <div class="app-bg bg-theme">
    <!-- bg-fx = camada só de efeitos -->
    <div class="bg-fx bg-anim-07" aria-hidden="true" />

    <AppHeader />

    <UMain>
      <slot />
    </UMain>

    <USeparator type="dashed" class="h-px" />

    <AppFooter />
  </div>
</template>