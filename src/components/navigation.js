import React from 'react'
import { graphql, Link, navigate, useStaticQuery } from 'gatsby'
import { FaCode } from 'react-icons/fa'
import useClickToggle from '../hooks/useClickToggle'
import ThemeToggle from './themeToggle'

export default () => {
  const [active, handleActivate] = useClickToggle()
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

  return (
    <NavBar sticky={false}>
      <NavBrand active={active} onToggle={handleActivate} title={title} />
      <NavMenu active={active}>
        <NavStart items={allItems} handleClick={handleActivate} />
        <NavEnd>
          <ThemeToggle />
        </NavEnd>
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
        role="button"
        className="navbar-item is-transparent is-button is-static is-unselectable"
        onClick={() => {
          navigate('/')
        }}
      >
        <FaCode />
      </a>
      <a
        role="button"
        onClick={onToggle}
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
            <Link
              to={item.path}
              key={index}
              className="navbar-item"
              activeClassName="is-active"
              onClick={handleClick}
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
