import React from 'react'

import useThemeToggle from '../hooks/useThemeToggle'

import { FaMoon, FaSun } from 'react-icons/fa'

export default () => {
  const [theme, toggleTheme] = useThemeToggle()
  let colour
  let icon
  if (theme === 'light') {
    icon = <FaSun key="sun" />
    colour = 'warning'
  } else {
    colour = 'dark'
    icon = <FaMoon key="moon" />
  }

  return (
    <button
      className={`button is-rounded is-${colour}`}
      onClick={toggleTheme}
      title="Toggle Theme"
    >
      <span className="icon">{icon}</span>
    </button>
  )
}
