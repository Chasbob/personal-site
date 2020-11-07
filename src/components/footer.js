import React from 'react'

import Breadcrumb from './breadcrumb'

export default function Footer({ location }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="level">
          <div className="level-left">
            <Breadcrumb location={location} />
          </div>
        </div>
      </div>
    </footer>
  )
}
