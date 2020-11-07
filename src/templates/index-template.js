// import React from 'react'
// import { graphql } from 'gatsby'
// import Layout from '../layouts/home'
// import SEO from '../components/seo'
//
// export function IndexTemplate({ data, location }) {
//   const content = data.contentfulPage
//   const siteTitle = data.site.siteMetadata.title
//
//   return (
//     <Layout>
//       <SEO path={location} />
//     </Layout>
//   )
// }
//
// export const pageQuery = graphql`
//   query PageByName($name: String!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     contentfulPage(name: { eq: $name }) {
//       content {
//         childMarkdownRemark {
//           html
//         }
//       }
//     }
//   }
// `
