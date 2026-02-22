import type { TemplateId, Theme } from '~/app/types/portfolio'

const mockTheme: Theme = {
  id: 'theme-1',
  name: 'Ocean',
  primary: '#2563eb',
  neutral: '#64748b',
  background: '#f8fafc',
  surface: '#ffffff',
  text: '#0f172a',
  radius: '0.75rem',
  font: 'Inter, sans-serif'
}

let currentTemplate: TemplateId = 'template-a'

export const themeRepo = {
  async getMyTheme() {
    return { templateId: currentTemplate, theme: mockTheme }
  },
  async save(theme: Theme, templateId: TemplateId) {
    Object.assign(mockTheme, theme)
    currentTemplate = templateId
    return { templateId: currentTemplate, theme: mockTheme }
  }
}
