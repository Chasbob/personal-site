import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Layout, Section } from '../layouts/basic'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'

export function BlogPostTemplate({ data }) {
  const post = get(data, 'contentfulBlogPost')
  return (
    <Layout>
      <Section>
        <h1 className="section-headline title is-capitalized">{post.title}</h1>
        <p className="subtitle">{post.publishDate}</p>
        <SRLWrapper>
          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </SRLWrapper>
      </Section>
    </Layout>
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
