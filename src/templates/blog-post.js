import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'
import { get } from 'lodash'
import Layout from '../layouts/basic'

import heroStyles from '../components/hero.module.css'
import style from './blog-post.module.css'

export function BlogPostTemplate({ data, location }) {
  const post = get(data, 'contentfulBlogPost')
  const siteTitle = get(data, 'site.siteMetadata.title')
  return (
    <Layout location={location}>
      <div style={{ background: '#fff' }}>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        {/*<div className={heroStyles.hero}>*/}
        {/*  <Img*/}
        {/*    className={style.hero}*/}
        {/*    alt={post.title}*/}
        {/*    fluid={post.heroImage.fluid}*/}
        {/*  />*/}
        {/*</div>*/}
        <div className="wrapper">
          <h1 className="section-headline title">{post.title}</h1>
          <p className={style.publishDate}>{post.publishDate}</p>
          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
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
