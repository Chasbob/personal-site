import React from 'react'
import Navigation from '../components/navigation'
import SEO from '../components/seo'
import Footer from '../components/footer'
import SimpleReactLightbox from 'simple-react-lightbox'
import styles from './index.module.scss'
import {
  Transition as ReactTransition,
  TransitionGroup,
} from 'react-transition-group'

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
          <Transition location={location}>
            <div className="site-content">{children}</div>
          </Transition>
        </SimpleReactLightbox>
      </div>
      <Footer location={location} />
    </>
  )
}

const timeout = 300
const Transition = ({ children, location }) => (
  <TransitionGroup>
    <ReactTransition key={location.pathname} timeout={timeout}>
      {(status) => (
        <div className={`${styles.defaultStyle} ${styles[status]}`}>
          {children}
        </div>
      )}
    </ReactTransition>
  </TransitionGroup>
)
