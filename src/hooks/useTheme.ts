import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const THEME_COOKIE_NAME = 'preferred-theme'
const COOKIE_EXPIRY_DAYS = 365

function getCookie(name: string): string | undefined {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(';').shift()
  return undefined
}

function setCookie(name: string, value: string, days: number) {
  const date = new Date()
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
  const expires = `expires=${date.toUTCString()}`
  document.cookie = `${name}=${value};${expires};path=/;samesite=strict`
}

export function useTheme() {
  // Remove preload class after initial load
  useEffect(() => {
    document.documentElement.classList.add('preload')
    const timeoutId = setTimeout(() => {
      document.documentElement.classList.remove('preload')
    }, 0)
    return () => clearTimeout(timeoutId)
  }, [])

  const [theme, setTheme] = useState<Theme>(() => {
    // Check cookie, default to light theme
    const savedTheme = getCookie(THEME_COOKIE_NAME) as Theme
    return savedTheme || 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    setCookie(THEME_COOKIE_NAME, theme, COOKIE_EXPIRY_DAYS)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return { theme, toggleTheme }
}
