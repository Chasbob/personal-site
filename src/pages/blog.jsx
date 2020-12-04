import React from 'react'
import { graphql } from 'gatsby'
import { Layout, Section } from '../layouts/basic'
import BlogPreview from '../components/blog-preview'

export default function Blog({ data, location }) {
  const posts = data.allContentfulBlogPost.edges
  return (
    <Layout title="blog" location={location}>
      <Section>
        <h1 className="title is-capitalized has-text-centered is-size-1 is-family-sans-serif">
          My Blog{' '}
        </h1>
      </Section>
      <section className="section">
        <div className="container">
          {posts.map(({ node }) => {
            return <BlogPreview article={node} key={node.slug} />
          })}
        </div>
      </section>
    </Layout>
  )
}

// export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 800, maxHeight: 200, resizingBehavior: FILL) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
