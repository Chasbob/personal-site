import React from 'react'
import { graphql } from 'gatsby'
import { Section } from '../components/layout/section'

export default ({ data }) => {
  const { content, name } = data.contentfulPage
  const { childMarkdownRemark } = content
  return (
    <Section>
      <h1 className="title is-capitalized has-text-centered is-size-1 is-family-sans-serif">
        {name}
      </h1>

      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: childMarkdownRemark.html }}
      />
    </Section>
  )
}

export const pageQuery = graphql`
  {
    contentfulPage {
      name
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
