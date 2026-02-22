import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import type { Profile } from '~/app/types/portfolio'
import { profileRepo } from '~/app/repositories/profileRepo'

export const useProfileStore = defineStore('profile', () => {
  const profile = useStorage<Profile | null>('portfolio-profile', null)

  async function loadMyProfile() {
    profile.value = await profileRepo.getMyProfile()
  }

  async function loadPublicProfile(username: string) {
    profile.value = await profileRepo.getByUsername(username)
  }

  async function saveProfile(next: Profile) {
    profile.value = await profileRepo.save(next)
  }

  return { profile, loadMyProfile, loadPublicProfile, saveProfile }
})
