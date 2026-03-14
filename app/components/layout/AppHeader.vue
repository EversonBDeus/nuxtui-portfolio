<script setup lang="ts">
const colorMode = useColorMode()
const { presets, preset, setPreset } = useThemePresets()

const isThemeOpen = ref(false)
</script>

<template>
  <UHeader
    v-reveal
    class="fixed left-0 right-0 top-0 z-50"
    :ui="{
      root: 'border-0 bg-transparent shadow-none',
      container: 'flex h-14 items-center justify-end px-3 sm:h-16 sm:px-4'
    }"
  >
    <template #right>
      <div class="flex items-center gap-1 sm:gap-2">
        <UPopover v-model:open="isThemeOpen" placement="bottom-end">
          <UButton
            icon="i-lucide-palette"
            variant="ghost"
            size="md"
            aria-label="Selecionar tema"
          />

          <template #content>
            <div class="w-64 space-y-2 p-3">
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

        <UButton
          :icon="colorMode.value === 'dark' ? 'i-lucide-sun' : 'i-lucide-moon'"
          variant="ghost"
          size="md"
          aria-label="Alternar modo"
          @click="colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'"
        />
      </div>
    </template>
  </UHeader>
</template>