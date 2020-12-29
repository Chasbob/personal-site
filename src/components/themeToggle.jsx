import React from 'react'

import useThemeToggle from '../hooks/useThemeToggle'

import { FaMoon, FaSun } from 'react-icons/all'

export default () => {
  const [theme, toggleTheme] = useThemeToggle()
  let colour
  let icon
  let light
  if (theme === 'light') {
    light = true
    icon = <FaSun key="sun" />
    colour = 'warning'
  } else {
    light = false
    colour = 'dark'
    icon = <FaMoon key="moon" />
  }
  console.log(theme)

  return (
    <button className={`button is-${colour}`} onClick={toggleTheme}>
      {icon}
    </button>
  )
}
