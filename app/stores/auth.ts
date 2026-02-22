import { defineStore } from 'pinia'
import { authRepo, type SessionUser } from '~/app/repositories/authRepo'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as SessionUser | null,
    isAuthenticated: false,
    loading: false
  }),
  actions: {
    async fetchSession() {
      this.loading = true
      const session = await authRepo.getSession()
      this.user = session
      this.isAuthenticated = !!session
      this.loading = false
    },
    async login() {
      this.loading = true
      this.user = await authRepo.login()
      this.isAuthenticated = true
      this.loading = false
    },
    async logout() {
      this.loading = true
      await authRepo.logout()
      this.user = null
      this.isAuthenticated = false
      this.loading = false
    }
  }
})
