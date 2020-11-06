import React, { useState } from 'react'
import get from 'lodash/get'
import { Link, useStaticQuery } from 'gatsby'
import navigation from './navigation.module.css'

export default () => {
  const data = useStaticQuery(graphql`
    query NavQuery {
      site {
        siteMetadata {
          nav {
            name
            path
          }
        }
      }
    }
  `)
  const items = get(data, 'site.siteMetadata.nav')

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
          <NavEnd children={items} />
        </div>
      </div>
    </nav>
  )
}

function NavEnd({ children }) {
  return (
    <div className="navbar-end">
      {children.map((child) => {
        return (
          <Link className="navbar-item is-tab is-family-code" to={child.path}>
            <span>{child.name}</span>
          </Link>
        )
      })}
    </div>
  )
}
