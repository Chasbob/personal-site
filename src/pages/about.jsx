import React from 'react'
import { Section } from '../components/layout/section'


export default () => (
    <>
      <Section>
        <h1 className="title is-capitalized has-text-centered is-size-1 is-family-sans-serif">
          About{' '}
        </h1>
      </Section>
      <Section>
        <p className='content'>
        This site was built with Gatsbyjs, styled (mostly) with bulma and backed by Contentful.
        You can see the source code here on GitHub.
        </p>
        </Section>
    </>
)
