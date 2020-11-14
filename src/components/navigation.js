import React, { useState } from 'react'
import { graphql, Link, navigate, useStaticQuery } from 'gatsby'
import { FaCode } from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

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
      allContentfulPage {
        nodes {
          name
          path
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
  const {
    site,
    allNavYaml: { nodes: items },
    allContentfulPage: { nodes },
  } = data
  const title = site.siteMetadata.name
  const allItems = items.concat(nodes)

  const handleToggle = () => {
    setActive(!active)
  }
  return (
    <NavBar sticky={false}>
      <NavBrand active={active} onToggle={handleToggle} title={title} />
      <NavMenu active={active}>
        <NavStart items={allItems} handleClick={handleToggle} />
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
          onToggle()
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

function NavStart({ items, handleClick }) {
  return (
    <div className="navbar-start">
      {items.map((item, index) => {
        if (item.path[0] === '/') {
          // internal links get the link component
          return (
            <AniLink
              fade
              duration={0.5}
              to={item.path}
              key={index}
              className="navbar-item"
              activeClassName="is-active"
              onClick={handleClick}
            >
              {item.name}
            </AniLink>
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
