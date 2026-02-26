<script setup lang="ts">
const colorMode = useColorMode()
const { presets, preset, setPreset } = useThemePresets()

const isThemeOpen = ref(false)
</script>

<template>
  <!-- UHeader (Nuxt UI) + visual transparente (sem barra preta) -->
  <UHeader v-reveal
    class="fixed top-0 left-0 right-0 z-50"
    :ui="{
      root: 'bg-transparent border-0 shadow-none',
      container: 'flex items-center justify-end h-16 px-4'
    }"
  >
    <template #right>
      <div class="flex items-center gap-2">
        <!-- Seletor de temas -->
        <UPopover v-model:open="isThemeOpen" placement="bottom-end">
          <UButton
            icon="i-lucide-palette"
            variant="ghost"
            size="lg"
            aria-label="Selecionar tema"
          />

          <template #content>
            <div class="w-64 p-3 space-y-2">
              <div class="text-xs text-muted">
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
  </UHeader>
</template>