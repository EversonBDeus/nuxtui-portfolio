import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import type { TemplateId, Theme } from '~/app/types/portfolio'
import { themeRepo } from '~/app/repositories/themeRepo'

const defaultTheme: Theme = {
  id: 'theme-default',
  name: 'Default',
  primary: '#0ea5e9',
  neutral: '#64748b',
  background: '#f8fafc',
  surface: '#ffffff',
  text: '#0f172a',
  radius: '0.75rem',
  font: 'Inter, sans-serif'
}

export const useThemeStore = defineStore('theme', () => {
  const templateId = useStorage<TemplateId>('portfolio-template', 'template-a')
  const theme = useStorage<Theme>('portfolio-theme', defaultTheme)

  const cssVars = computed(() => ({
    '--pf-primary': theme.value.primary,
    '--pf-neutral': theme.value.neutral,
    '--pf-background': theme.value.background,
    '--pf-surface': theme.value.surface,
    '--pf-text': theme.value.text,
    '--pf-radius': theme.value.radius,
    '--pf-font': theme.value.font
  }))

  async function loadTheme() {
    const current = await themeRepo.getMyTheme()
    templateId.value = current.templateId
    theme.value = current.theme
  }

  async function saveTheme(nextTheme: Theme, nextTemplate: TemplateId) {
    const saved = await themeRepo.save(nextTheme, nextTemplate)
    templateId.value = saved.templateId
    theme.value = saved.theme
  }

  return { templateId, theme, cssVars, loadTheme, saveTheme }
})
