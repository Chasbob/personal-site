import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default ({ twitter, github, linkedin, email }) => {
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

  return (
    <nav className="panel mt-3">
      <p className="panel-heading is-family-primary">Links</p>
      {socials}
      {/* <TransitionLink className="panel-block is-active" to="/blog">
        <span className="panel-icon">
          <FaBlog />
        </span>
        Blog
      </TransitionLink>
      <TransitionLink className="panel-block is-active" to="/cv">
        <span className="panel-icon">
          <FaScroll />
        </span>
        CV
      </TransitionLink>
      <a className="panel-block is-active" href="https://github.com/Chasbob">
        <span className="panel-icon">
          <DiGithub />
        </span>
        GitHub
      </a>
      <a
        className="panel-block is-active"
        href="https://www.linkedin.com/in/charles-de-freitas/"
      >
        <span className="panel-icon">
          <FaLinkedin />
        </span>
        Linkedin
      </a>
      <a className="panel-block is-active" href="https://twitter.com/chasbob97">
        <span className="panel-icon">
          <FaTwitter />
        </span>
        Twitter
      </a>
      <a className="panel-block is-active" href="mailto:charles@defreitas.io">
        <span className="panel-icon">
          <AiOutlineMail />
        </span>
        Email
      </a> */}
    </nav>
  )
}
