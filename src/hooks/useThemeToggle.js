import { useState, useEffect } from 'react'

export default function useThemeToggle() {
  const flip = (inp) => (inp === 'dark' && 'light') || 'dark'
  const [theme, setTheme] = useState('light')
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(theme) : value
      // Save state
      setTheme(valueToStore)
      // Save to local storage
      window.localStorage.setItem('theme', JSON.stringify(valueToStore))
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error)
    }
  }

  useEffect(function mount() {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem('theme')
      // Parse stored json or if none return initialValue
      setTheme(item ? JSON.parse(item) : 'light')
    } catch (error) {
      // If error also return initialValue
      console.log(error)
      setTheme('light')
      // return 'light'
    }
    return function unMount() {}
  }, [])

  const handleClick = (event) => {
    setValue(flip(theme))
    event.stopPropagation()
    event.nativeEvent.stopImmediatePropagation()
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return [theme, handleClick]
}
