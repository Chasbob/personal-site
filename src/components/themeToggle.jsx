import React from 'react'

import useThemeToggle from '../hooks/useThemeToggle'
import styles from './themeToggle.module.scss'

import { FaMoon, FaSun } from 'react-icons/all'

export default () => {
  const [theme, toggleTheme] = useThemeToggle()
  let icon
  if (theme === 'light') {
    icon = <FaSun key="sun" />
  } else {
    icon = <FaMoon key="moon" />
  }

  return (
    <button className="button is-warning" onClick={toggleTheme}>
      {icon}
    </button>
  )
}
