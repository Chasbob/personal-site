import React from 'react'
import { Link } from 'gatsby'

import { FaHome } from 'react-icons/fa'

export default function Breadcrumb({ location }) {
  let path = location.pathname
  let parts = []
  parts.push(
    <li key="root">
      <Link to="/">
        <span className="icon">
          <FaHome />
        </span>
        <span className="is-family-code">Home</span>
      </Link>
    </li>
  )

  parts.push(
    path
      .split('/')
      .filter((part) => part !== '')
      .map((part, index) => {
        if (
          index !==
          path.split('/').filter((part) => part !== '').length - 1
        ) {
          return (
            <li key={part}>
              <Link
                to={path
                  .split('/')
                  .slice(0, index + 2)
                  .join('/')}
              >
                <span className="is-family-code">{part}</span>
              </Link>
            </li>
          )
        } else {
          return (
            <li key={part}>
              <span className="mx-2 is-family-code">{part}</span>
            </li>
          )
        }
      })
  )

  if (parts.length > 1) {
    return (
      <nav className="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
        <ul>{parts}</ul>
      </nav>
    )
  } else {
    return <div></div>
  }
}
