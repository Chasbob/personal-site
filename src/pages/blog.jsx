import React from 'react'
import { graphql } from 'gatsby'
import BlogPreview from '../components/blog-preview'
import { Section } from '../components/layout/section'

export default function Blog({ data }) {
  const { allContentfulBlogPost } = data
  const { edges } = allContentfulBlogPost
  return (
    <>
      <Section>
        <h1 className="title is-capitalized has-text-centered is-size-1 is-family-sans-serif">
          My Blog{' '}
        </h1>
      </Section>
      <section className="section">
        <div className="container">
          {edges.map(({ node }) => {
            return <BlogPreview article={node} key={node.slug} />
          })}
        </div>
      </section>
    </>
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
            gatsbyImageData(height: 350, cropFocus: CENTER)
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
