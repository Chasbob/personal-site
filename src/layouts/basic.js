import React from 'react'

import Navigation from '../components/navigation'

export default function Full({ children }) {
  return (
    <Layout>
      <Section>{children}</Section>
    </Layout>
  )
}

export function Layout({ children }) {
  return (
    <>
      <Navigation sticky={true} />

      {children}
    </>
  )
}

export function Section({ children }) {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-two-thirds-desktop is-full-tablet">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
