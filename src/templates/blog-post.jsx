import React from 'react'
import { graphql } from 'gatsby'
import { Section } from '../components/layout/section'
import styles from './blog-post.module.scss'

export function BlogPostTemplate({ data, location }) {
  const post = data.contentfulBlogPost
  return (
    <>
      <Section>
        <h1 className="section-headline title is-capitalized">{post.title}</h1>
        <p className="subtitle">{post.publishDate}</p>
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: post.body.childMarkdownRemark.html,
          }}
        />
      </Section>
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
