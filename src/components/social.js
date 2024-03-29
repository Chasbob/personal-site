import React, { useCallback, useEffect, useState } from 'react'
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaSpotify,
  FaTwitter,
} from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { graphql, useStaticQuery } from 'gatsby'
import { invert } from './social.module.scss'
import useThemeToggle from '../hooks/useThemeToggle'

const Social = () => {
  const [theme, toggleTheme] = useThemeToggle()
  const [ghColour, setGhColour] = useState('#dbd6d1')
  useCallback(() => {
    setGhColour(theme === 'light' ? '#24292e' : '#dbd6d1')
  }, [theme, setGhColour])
  const data = useStaticQuery(graphql`
    query SocialQuery {
      contentfulPerson(contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" }) {
        github
        twitter
        email
        linkedin
        spotify
      }
    }
  `)
  const { contentfulPerson } = data
  const { github, twitter, linkedin, email, spotify } = contentfulPerson
  let socials = []
  if (github) {
    socials.push(
      <a
        key="github"
        className="panel-block"
        href={`https://github.com/${github}`}
      >
        <span className="panel-icon">
          <IconContext.Provider value={{ color: ghColour }}>
            <FaGithub />
          </IconContext.Provider>
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
          <IconContext.Provider value={{ color: '#1DA1F2' }}>
            <FaTwitter />
          </IconContext.Provider>
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
          <IconContext.Provider value={{ color: '#2867B2' }}>
            <FaLinkedin />
          </IconContext.Provider>
        </span>
        Linkedin
      </a>
    )
  }
  if (spotify) {
    socials.push(
      <a
        key="spotify"
        className="panel-block"
        href={`https://open.spotify.com/user/${spotify}`}
      >
        <span className="panel-icon">
          <IconContext.Provider value={{ color: '#1db954' }}>
            <FaSpotify />
          </IconContext.Provider>
        </span>
        Spotify
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

export default Social
