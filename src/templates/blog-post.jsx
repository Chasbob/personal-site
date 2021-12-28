import React from 'react'
import { graphql } from 'gatsby'
import { Section } from '../components/layout/section'

function BlogPostTemplate({ data }) {
  const { contentfulBlogPost } = data
  const post = contentfulBlogPost
  const { childMarkdownRemark } = post.body
  const { html } = childMarkdownRemark
  return (
    <>
      <Section>
        <h1 className="section-headline title is-capitalized">{post.title}</h1>
        <p className="subtitle">{post.publishDate}</p>
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: html,
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
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
