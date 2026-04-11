import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const stored = localStorage.getItem('cebuCleanUser')
    if (stored) {
      try {
        setUser(JSON.parse(stored))
      } catch {
        localStorage.removeItem('cebuCleanUser')
      }
    }
  }, [])

  const login = (credentials) => {
    // Check against volunteer registry
    const registry = localStorage.getItem('cebuCleanVolunteerRegistry')
    if (!registry) return { success: false, message: 'No account found. Please register first.' }
    try {
      const stored = JSON.parse(registry)
      if (stored.email === credentials.email && stored.password === credentials.password) {
        const userData = { name: stored.name, email: stored.email, area: stored.area, role: stored.role }
        setUser(userData)
        localStorage.setItem('cebuCleanUser', JSON.stringify(userData))
        return { success: true }
      }
      return { success: false, message: 'Incorrect email or password.' }
    } catch {
      return { success: false, message: 'Login error. Please try again.' }
    }
  }

  const register = (formData) => {
    // Store full record (including hashed-like password — plain for demo)
    localStorage.setItem('cebuCleanVolunteerRegistry', JSON.stringify(formData))
    const userData = { name: formData.name, email: formData.email, area: formData.area, role: formData.role }
    setUser(userData)
    localStorage.setItem('cebuCleanUser', JSON.stringify(userData))
    return { success: true }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('cebuCleanUser')
  }

  const updateProfile = (updates) => {
    const updated = { ...user, ...updates }
    setUser(updated)
    localStorage.setItem('cebuCleanUser', JSON.stringify(updated))
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register, updateProfile }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
