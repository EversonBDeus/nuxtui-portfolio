import { watch } from 'vue'
import { useThemePresets } from '../composables/useThemePresets'

export default defineNuxtPlugin(() => {
  const appConfig = useAppConfig()
  const { preset } = useThemePresets()

  const applyPreset = () => {
    Object.assign(appConfig.ui.colors, preset.value.colors)
  }

  applyPreset()

  if (import.meta.client) {
    watch(preset, applyPreset, { deep: true })
  }
})