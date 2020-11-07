import React from 'react'
import SEO from './seo'
import Container from './container'
import Navigation from './navigation'
import Footer from './footer'
import base from '../style/base.scss'

function Template({ location, children }) {
  let header

  let rootPath = `/`
  if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    rootPath = __PATH_PREFIX__ + `/`
  }

  return (
    <div>
      <SEO path={location} />
      <Container>
        <Navigation />
        {children}
      </Container>
      {/*<Footer location={location} />*/}
    </div>
  )
}

export default Template
