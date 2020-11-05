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
          <a
            onClick={handleToggle}
            role="button"
            className={`navbar-burger burger ${active ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
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
