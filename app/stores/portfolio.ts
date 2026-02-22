import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import type { PortfolioData } from '~/app/types/portfolio'
import { portfolioRepo } from '~/app/repositories/portfolioRepo'

export const usePortfolioStore = defineStore('portfolio', () => {
  const data = useStorage<PortfolioData>('portfolio-data', {
    experiences: [],
    projects: [],
    skills: [],
    certificates: []
  })

  async function loadByUsername(username: string) {
    data.value = await portfolioRepo.getByUsername(username)
  }

  async function loadMine() {
    data.value = await portfolioRepo.getMyPortfolio()
  }

  async function savePortfolio(next: PortfolioData) {
    data.value = await portfolioRepo.save(next)
  }

  return { data, loadByUsername, loadMine, savePortfolio }
})
