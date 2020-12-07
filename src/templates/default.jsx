import React from 'react'
import { Section } from '../components/layout/section'

const DefaultTemplate = ({ pageContext }) => {
  const {
    page: {
      name,
      content: {
        childMarkdownRemark: { html },
      },
    },
  } = pageContext

  return (
    <Section>
      <h1 className="title is-capitalized has-text-centered is-size-1 is-family-sans-serif">
        {name}
      </h1>
      <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
    </Section>
  )
}

export default DefaultTemplate
