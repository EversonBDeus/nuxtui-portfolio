import type { Profile } from '~/app/types/portfolio'

const mockProfile: Profile = {
  id: 'u1',
  username: 'johndoe',
  fullName: 'John Doe',
  headline: 'Arquiteto de Software e UI Engineer',
  bio: 'Profissional focado em soluções web escaláveis e experiências ricas para portfólio.',
  email: 'john@example.com',
  location: 'São Paulo, BR'
}

export const profileRepo = {
  async getByUsername(username: string) {
    return username === mockProfile.username ? mockProfile : null
  },
  async getMyProfile() {
    return mockProfile
  },
  async save(profile: Profile) {
    Object.assign(mockProfile, profile)
    return mockProfile
  }
}
