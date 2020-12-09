import React, { useState } from 'react'
import { navigate } from 'gatsby'
import { Section } from '../components/layout/section'
import styles from './cv.module.scss'

const DefaultTemplate = ({ pageContext }) => {
  const [wide, setWide] = useState(false)
  const handleClick = () => setWide(!wide)
  const {
    page: {
      name,
      content: {
        childMarkdownRemark: { html },
      },
    },
  } = pageContext

  return (
    <div
      onClick={handleClick}
      className={`${styles.cv} ${(wide && styles.narrow) || ''}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default DefaultTemplate
