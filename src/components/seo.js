import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

export default function SEO({ title, description, location }) {
  const path = location.pathname
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
      content: keywords.join(','),
    },
  ]

  let links = [
    {
      rel: `icon`,
      type: `image/x-icon`,
      href: `/icons/favicon.ico`,
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/icons/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/icons/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/icons/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
    {
      rel: 'mask-icon',
      href: '/icons/safari-pinned-tab.svg',
      color: '#5bbad5',
    },
  ]
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
    />
  )
}
