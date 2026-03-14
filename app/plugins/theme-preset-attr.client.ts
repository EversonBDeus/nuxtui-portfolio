import { watch } from 'vue'

export default defineNuxtPlugin(() => {
  const theme = useCookie<string>('theme', { default: () => 'ux-elite' })

  const apply = (v: string) => {
    document.documentElement.dataset.preset = v
  }

  apply(theme.value)
  watch(theme, (v) => apply(v))
})