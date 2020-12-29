require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST || 'cdn.contentful.com',
}

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'chasbob',
    name: 'chasbob',
    description: "My personal website | It's all about me!",
    author: {
      name: 'Charles de Freitas',
    },
    siteUrl: 'https://chasbob.dev',
    github: 'https://github.com/chasbob/personal-site',
  },

  plugins: [
    // Source yaml from ./data
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
    // Add contentful source
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    // PWA manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `chasbob`,
        short_name: `chasbob`,
        start_url: `/`,
        icon: 'static/favicon.png',
        background_color: `#375a7f`,
        theme_color: `#375a7f`,
        display: `standalone`,
        lang: 'en',
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // Use dart-sass
        implementation: require('sass'),
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Work Sans'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: [
          'https://github-readme-stats-six-tau.vercel.app',
          'https://novatorem.chasbob.vercel.app',
        ],
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about/`, `/blog/*`],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
