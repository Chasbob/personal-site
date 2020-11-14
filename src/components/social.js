import React from 'react'
import { get } from 'lodash'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      contentfulPerson(contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" }) {
        github
        twitter
        email
        linkedin
      }
    }
  `)
  const { github, twitter, linkedin, email } = get(data, 'contentfulPerson')
  let socials = []
  if (github) {
    socials.push(
      <a
        key="github"
        className="panel-block"
        href={`https://github.com/${github}`}
      >
        <span className="panel-icon">
          <FaGithub />
        </span>
        GitHub
      </a>
    )
  }
  if (twitter) {
    socials.push(
      <a
        key="twitter"
        className="panel-block"
        href={`https://twitter.com/${twitter}`}
      >
        <span className="panel-icon">
          <FaTwitter />
        </span>
        Twitter
      </a>
    )
  }
  if (linkedin) {
    socials.push(
      <a
        key="linkedin"
        className="panel-block"
        href={`https://linkedin.com/in/${linkedin}`}
      >
        <span className="panel-icon">
          <FaLinkedin />
        </span>
        Linkedin
      </a>
    )
  }
  if (email) {
    socials.push(
      <a key="email" className="panel-block" href={`mailto:${email}`}>
        <span className="panel-icon">
          <FaEnvelope />
        </span>
        Email
      </a>
    )
  }

  return <nav className="panel mt-3">{socials}</nav>
}
