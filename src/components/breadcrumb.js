import React from 'react'
import { Link } from 'gatsby'

import { FaHome } from 'react-icons/fa'
import { currentCrumb } from './breadcrumb.module.scss'

export default function Breadcrumb({ location }) {
  const spanClass = 'mx-2'
  const path = (!!location && location.pathname) || ''
  let parts = []
  parts.push(
    <li key="root">
      <Link to="/">
        <span className="icon">
          <FaHome />
        </span>
        <span className={spanClass}>Home</span>
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
                <span className={spanClass}>{part}</span>
              </Link>
            </li>
          )
        } else {
          return (
            <li key={part}>
              <span className={`${spanClass} ${currentCrumb}`}>{part}</span>
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
    return <></>
  }
}
