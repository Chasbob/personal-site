require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
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
    ],
  },

  plugins: [
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
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Available options and their defaults:
        base64Width: 42,
        forceBase64Format: `png`, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 90,
        failOnError: true,
      },
    },
    'gatsby-plugin-transition-link',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
  ],
}
