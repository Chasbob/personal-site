import React from 'react'
import SEO from './seo'
import Container from './container'
import Navigation from './navigation'

export default ({ children, title }) => {
  let rootPath = `/`
  if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    rootPath = __PATH_PREFIX__ + `/`
  }

  return (
    <div>
      <SEO title={title} />
      <Container>
        <Navigation />
        {children}
      </Container>
      {/*<Footer location={location} />*/}
    </div>
  )
}
