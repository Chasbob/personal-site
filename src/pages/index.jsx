import React from 'react'
import { graphql } from 'gatsby'
import Hero from '../components/hero'
import Social from '../components/social'
import { Columns } from '../components/layout/column'
import { FullCard } from '../components/layout/card'
import { FaLink } from 'react-icons/all'

export default function RootIndex({ data, location }) {
  const [author] = data.allContentfulPerson.edges

  return (
    <div style={{ background: '#ffffff' }}>
      <Hero data={author.node} />
      <section className="section">
        <div className="container">
          <Columns>
            <SocialCard />
            <Readme />
            <Spotify />
          </Columns>
        </div>
      </section>
    </div>
  )
}

const Spotify = () => (
  <FullCard
    title="Currently Vibing to..."
    icon="🎧"
    image={
      <img
        src="https://novatorem.chasbob.vercel.app/api/spotify"
        alt="Spotify Playing"
        width="350"
      />
    }
  />
)

const Readme = () => (
  <FullCard
    title="Working on..."
    icon="💻"
    image={
      <img
        src="https://github-readme-stats-six-tau.vercel.app/api?username=chasbob"
        alt="Github stats"
        width="350"
      />
    }
  />
)

function SocialCard() {
  return (
    <FullCard title="Links" icon={<FaLink />}>
      <Social />
    </FullCard>
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
        }
      }
    }
  }
`
