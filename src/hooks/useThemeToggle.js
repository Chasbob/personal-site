import { useEffect, useState } from 'react'

export default function useThemeToggle() {
  const flip = (inp) => (inp === 'dark' && 'light') || 'dark'
  const [theme, setTheme] = useState(() => {
    const defaultTheme = 'light'
    try {
      let item
      // catch error while gatsby does server side build
      if (typeof window !== 'undefined') {
        item = window.localStorage.getItem('theme')
        // if the user has a stored preference then us it
        // else use prefers-color-scheme query
        item = item
          ? JSON.parse(item)
          : window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      } else {
        item = defaultTheme
      }
      return item
    } catch (error) {
      return defaultTheme
    }
  })
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(theme) : value
      // Save state
      setTheme(valueToStore)
      // Save to local storage
      window.localStorage.setItem('theme', JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

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
