import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

export default function SEO({ title, description, location }) {
  const path = (!!location && location.pathname) || ''
  const { site, dataYaml } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            name
            author {
              name
            }
            title
            description
            siteUrl
          }
        }
        dataYaml {
          keywords
        }
      }
    `
  )

  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description
  const { keywords } = dataYaml

  const metas = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: metaTitle,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `twitter:title`,
      content: metaTitle,
    },
    {
      property: `twitter:description`,
      content: metaDescription,
    },
    {
      property: `twitter:creator`,
      content: site.siteMetadata.author.name,
    },
    {
      name: 'msapplication-TileColor',
      content: '#da532c',
    },
    {
      name: 'theme-color',
      content: '#e1e1e1',
    },
    {
      name: 'keywords',
      content: keywords.join(', '),
    },
  ]

  let links = []
  if (path) {
    links.push({
      href: new URL(path, site.siteMetadata.siteUrl).href,
      rel: `canonical`,
    })
  }

  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.name}`}
      defaultTitle={site.siteMetadata.name}
      meta={metas}
      link={links}
      htmlAttributes={{
        lang: 'en',
      }}
    >
      <script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "f89c64f1c48e416ab9614f14f862af63"}'
      ></script>
    </Helmet>
  )
}
