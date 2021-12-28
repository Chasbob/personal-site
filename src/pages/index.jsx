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
import { FaGithub, FaLink, FaSpotify } from 'react-icons/fa'
import { image } from './index.module.scss'

export default function RootIndex({ data, serverData }) {
  const { allContentfulPerson } = data
  const { edges } = allContentfulPerson
  const [author] = edges

  return (
    <>
      <Hero data={author.node} />
      <section className="section">
        <div className="container">
          <Columns>
            <SocialCard />
            <Readme src={serverData.stats} />
            <Spotify src={serverData.spotify} />
          </Columns>
        </div>
      </section>
    </>
  )
}

const Spotify = ({ src }) => {
  return (
    <Card fill>
      <CardHeader title="Currently Vibing to..." icon={<FaSpotify />} />
      <CardImage
        image={
          <div
            className={image}
            dangerouslySetInnerHTML={{ __html: atob(src) }}
          />
        }
      />
    </Card>
  )
}

const Readme = ({ src }) => (
  <Card fill>
    <CardHeader title="Working on..." icon={<FaGithub />} />
    <CardImage
      image={
        <div
          className={image}
          dangerouslySetInnerHTML={{ __html: atob(src) }}
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

export async function getServerData() {
  const urlToB64 = (url) =>
    fetch(url)
      .then((resp) => resp.blob())
      .then((blob) => blob.text())
      .then((txt) => Buffer.from(txt).toString('base64'))
  try {
    const stats = await urlToB64(
      `https://github-readme-stats-six-tau.vercel.app/api?username=chasbob&count_private=true&hide_rank=true&hide=stars&hide_title=true&hide_border=true`
    )
    const spotify = await urlToB64(
      `https://novatorem.chasbob.vercel.app/api/spotify`
    )
    return {
      props: {
        spotify: spotify,
        stats: stats,
      },
    }
    const res = await fetch(`https://novatorem.chasbob.vercel.app/api/spotify`)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    // const blob = await res.blob();
    const blob = await res.blob().then(async (b) => {
      // const t =
      const bt = Buffer.from(await b.text()).toString('base64')
      return bt
    })
    return {
      props: {
        spotify: blob,
      },
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }
}
