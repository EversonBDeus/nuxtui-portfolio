export interface SessionUser {
  id: string
  username: string
  name: string
  email: string
}

const mockUser: SessionUser = {
  id: 'u1',
  username: 'johndoe',
  name: 'John Doe',
  email: 'john@example.com'
}

export const authRepo = {
  async getSession() {
    return mockUser
  },
  async login() {
    return mockUser
  },
  async logout() {
    return true
  }
}
