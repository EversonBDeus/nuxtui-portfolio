<script setup lang="ts">
const colorMode = useColorMode()
const { presets, preset, setPreset } = useThemePresets()

const isThemeOpen = ref(false)
</script>

<template>
  <!-- Header flutuante: sem bloco/card, só ícones por cima do background -->
  <div class="fixed top-4 right-4 z-50 flex items-center gap-2">
    <!-- Seletor de temas (palette) -->
    <UPopover v-model:open="isThemeOpen" placement="bottom-end">
      <UButton
        icon="i-lucide-palette"
        variant="ghost"
        size="lg"
        aria-label="Selecionar tema"
      />

      <!-- IMPORTANTE (Nuxt UI): o slot correto é #content, não #panel -->
      <template #content>
        <div class="w-64 p-3 space-y-2">
          <div class="text-xs text-gray-500 dark:text-gray-400">
            Tema atual
          </div>

          <USelectMenu
            :model-value="preset.id"
            :items="presets"
            value-key="id"
            label-key="label"
            class="w-full"
            @update:model-value="(id) => { setPreset(id); isThemeOpen = false }"
          />
        </div>
      </template>
    </UPopover>

    <!-- Modo escuro/claro -->
    <UButton
      :icon="colorMode.value === 'dark' ? 'i-lucide-sun' : 'i-lucide-moon'"
      variant="ghost"
      size="lg"
      aria-label="Alternar modo"
      @click="colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'"
    />
  </div>
</template>