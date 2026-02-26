import { watch } from 'vue'

export default defineNuxtPlugin(() => {
  // mesmo cookie que você já usa no useThemePresets
  const theme = useCookie<string>('theme', { default: () => 'cyber-lime' })

  const apply = (v: string) => {
    document.documentElement.dataset.preset = v
  }

  apply(theme.value)
  watch(theme, (v) => apply(v))
})