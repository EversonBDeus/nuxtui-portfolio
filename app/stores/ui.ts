import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => ({
    activeTab: 'overview',
    editorDrawerOpen: false,
    selectedItemId: null as string | null
  }),
  actions: {
    setActiveTab(tab: string) {
      this.activeTab = tab
    },
    openEditorDrawer(itemId?: string) {
      this.selectedItemId = itemId || null
      this.editorDrawerOpen = true
    },
    closeEditorDrawer() {
      this.editorDrawerOpen = false
      this.selectedItemId = null
    }
  }
})
