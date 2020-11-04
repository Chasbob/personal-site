import React, { useState } from 'react'
import { Link } from 'gatsby'
import navigation from './navigation.module.css'

export default () => {
  const [active, setActive] = useState(false)

  const handleToggle = () => {
    setActive(!active)
  }
  return (
    <nav role="navigation" className={`navbar ` + navigation.nav}>
      <div className="container">
        <div className="navbar-brand">
          <button
            className={`navbar-burger is-not-button ${
              active ? 'is-active' : ''
            }`}
            onClick={handleToggle}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div className={`navbar-menu ${active ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <Link className="navbar-item is-tab is-family-code" to="/">
              <span>Home</span>
            </Link>
            <Link className="navbar-item is-tab is-family-code" to="/blog">
              <span>Blog</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
