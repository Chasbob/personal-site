import React, { useState } from 'react'
import { graphql, Link, useStaticQuery, navigate } from 'gatsby'
import { FaCode } from 'react-icons/fa'

export default () => {
  const [active, setActive] = useState(false)
  const data = useStaticQuery(graphql`
    query NavQuery {
      site {
        siteMetadata {
          title
          name
        }
      }
      allNavYaml {
        nodes {
          name
          path
        }
      }
    }
  `)
  const items = data.allNavYaml.nodes
  const title = data.site.siteMetadata.name

  const handleToggle = () => {
    setActive(!active)
  }
  return (
    <NavBar sticky={false}>
      <NavBrand active={active} onToggle={handleToggle} title={title} />
      <NavMenu active={active}>
        <NavStart items={items} />
        <NavEnd />
      </NavMenu>
    </NavBar>
  )
}

function NavBar({ children, sticky }) {
  return (
    <nav
      role="navigation"
      className={`navbar is-primary ${
        sticky ? 'has-shadow is-sticky-custom' : ''
      }`}
    >
      <div className="container">{children}</div>
    </nav>
  )
}

function NavBrand({ active, onToggle }) {
  return (
    <div className="navbar-brand">
      <a
        className="navbar-item is-transparent is-button is-static"
        onClick={() => {
          navigate('/')
        }}
      >
        <FaCode />
      </a>
      <a
        onClick={onToggle}
        role="button"
        className={`navbar-burger ${active ? 'is-active' : ''}`}
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
  )
}

function NavMenu({ active, children }) {
  return (
    <div className={`navbar-menu ${active ? 'is-active' : ''}`}>{children}</div>
  )
}

function NavStart({ items }) {
  return (
    <div className="navbar-start">
      {items.map((item, index) => {
        if (item.path[0] === '/') {
          // internal links get the link component
          return (
            <Link
              to={item.path}
              key={index}
              className="navbar-item"
              activeClassName="is-active"
            >
              {item.name}
            </Link>
          )
        } else {
          // external links just get the normal anchor tag
          return (
            <a href={item.path} key={index} className="navbar-item">
              {item.name}
            </a>
          )
        }
      })}
    </div>
  )
}

function NavEnd({ children }) {
  return (
    <div className="navbar-end">
      {React.Children.map(children, (child, index) => (
        <span key={index} className="navbar-item">
          {child}
        </span>
      ))}
    </div>
  )
}
