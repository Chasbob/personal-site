import React from 'react'

import Navigation from '../components/navigation'
import SEO from '../components/seo'
import Container from '../components/container'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'

export function Home({ children, title }) {
  return (
    <>
      <SEO title={title} />
      <Navigation />
      {children}
    </>
  )
}

export function Layout({ children, title }) {
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
    <SimpleReactLightbox>
      <SEO title={title} />
      <Container>
        <Navigation />
        <SRLWrapper options={options}>{children}</SRLWrapper>
      </Container>
      {/*<Footer location={location} />*/}
    </SimpleReactLightbox>
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
