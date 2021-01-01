import React, { useState } from 'react'
import styles from './cv.module.scss'

const DefaultTemplate = ({ pageContext }) => {
  const [wide, setWide] = useState(false)
  const handleClick = () => setWide(!wide)
  const {
    page: {
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
