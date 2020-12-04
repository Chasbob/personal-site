import React from 'react'
import Navigation from '../components/navigation'
import SEO from '../components/seo'
import Container from '../components/container'
import Footer from '../components/footer'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'

export default ({ children, location }) => {
  let rootPath = `/`
  if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    rootPath = __PATH_PREFIX__ + `/`
  }
  return (
    <>
      <SEO location={location} />
      <div className="site">
        <SimpleReactLightbox>
          <Navigation />
          <div className="site-content">{children}</div>
        </SimpleReactLightbox>
      </div>
      <Footer location={location} />
    </>
  )
}
