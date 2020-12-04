import React from 'react'

import Navigation from '../components/navigation'
import SEO from '../components/seo'
import Container from '../components/container'
import Footer from '../components/footer'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'

export function Home({ children, title, location }) {
  return (
    <>
      <SEO title={title} location={location} />
      <div className="site">
        <Navigation />
        <div className="site-content">{children}</div>
        <Footer location={location} />
      </div>
    </>
  )
}

export function Layout({ children, title, location }) {
  let rootPath = `/`
  if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    rootPath = __PATH_PREFIX__ + `/`
  }
  const options = {
    buttons: {
      showAutoplayButton: false,
      showCloseButton: true,
      showDownloadButton: false,
      showFullscreenButton: true,
      showNextButton: false,
      showPrevButton: false,
      showThumbnailsButton: false,
    },
    thumbnails: {
      showThumbnails: false,
    },
  }

  return (
    <>
      <SEO title={title} location={location} />
      <div className="site">
        <SimpleReactLightbox>
          <Navigation />
          <div className="site-content">
            <SRLWrapper options={options}>{children}</SRLWrapper>
          </div>
        </SimpleReactLightbox>
      </div>
      <Footer location={location} />
    </>
  )
}

export function Section({ children }) {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">{children}</div>
        </div>
      </div>
    </section>
  )
}
