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
    description: 'My personal website and ramblings',
    author: {
      name: 'Charles de Freitas',
    },
    siteUrl: 'https://chasbob.dev',
    github: 'https://github.com/chasbob/personal-site',
    nav: [
      {
        name: 'Home',
        path: '/',
      },
      {
        name: 'Blog',
        path: '/blog',
      },
      {
        name: 'Portfolio',
        path: '/portfolio',
      },
      {
        name: 'CV',
        path: 'https://cv.chasbob.dev',
      },
    ],
  },

  plugins: [
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `chasbob`,
        short_name: `chasbob`,
        start_url: `/`,
        icon: 'static/favicon.png',
        background_color: `#5496ec`,
        theme_color: `#6f8dc6`,
        display: `standalone`,
        lang: 'en',
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    'gatsby-transformer-remark',
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
      },
    },
    `gatsby-plugin-preact`,
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: [
          'https://github-readme-stats-six-tau.vercel.app',
          'https://novatorem.chasbob.vercel.app',
        ],
      },
    },
  ],
}
