import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import Social from '../components/social'

export default function RootIndex({ location, data }) {
  const siteTitle = get(data, 'site.siteMetadata.title')
  const [author] = get(data, 'allContentfulPerson.edges')
  const { github, twitter, linkedin, email } = author.node

  return (
    <Layout location={location}>
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <Hero data={author.node} />
        <section className="section">
          <div className="container">
            <div className="card is-medium">
              <div className="card-content">
                <div className="content">
                  <p className="title is-4 is-family-code is-inline">
                    $ whoami{' '}
                  </p>
                  <Social
                    github={github}
                    twitter={twitter}
                    linkedin={linkedin}
                    email={email}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid
            }
          }
          github
          twitter
          linkedin
          email
        }
      }
    }
  }
`
