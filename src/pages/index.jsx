import React from 'react'
import { graphql } from 'gatsby'
import Hero from '../components/hero'
import Social from '../components/social'
import { Columns } from '../components/layout/column'
import Card, {
  CardContent,
  CardHeader,
  CardImage,
} from '../components/layout/card'
import { FaGithub, FaLink, FaSpotify } from 'react-icons/all'
import useThemeToggle from '../hooks/useThemeToggle'

export default function RootIndex({ data }) {
  const [author] = data.allContentfulPerson.edges
  const [toggleTheme] = useThemeToggle()

  return (
    <>
      <Hero data={author.node} />
      <section className="section">
        <div className="container">
          <Columns>
            <SocialCard />
            <Readme />
            <Spotify />
            <button className="button is-warning" onClick={toggleTheme}>
              Theme
            </button>
          </Columns>
        </div>
      </section>
    </>
  )
}

const Spotify = () => {
  return (
    <Card fill>
      <CardHeader title="Currently Vibing to..." icon={<FaSpotify />} />
      <CardImage
        image={
          <img
            src="https://novatorem.chasbob.vercel.app/api/spotify"
            alt="Spotify Playing"
            width="350"
          />
        }
      />
    </Card>
  )
}

const Readme = () => (
  <Card fill>
    <CardHeader title="Working on..." icon={<FaGithub />} />
    <CardImage
      image={
        <img
          src="https://github-readme-stats-six-tau.vercel.app/api?username=chasbob"
          alt="Github stats"
          width="350"
        />
      }
    />
  </Card>
)

function SocialCard() {
  return (
    <Card fill>
      <CardHeader title="Links" icon={<FaLink />} />
      <CardContent>
        <Social />
      </CardContent>
    </Card>
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
        }
      }
    }
  }
`
