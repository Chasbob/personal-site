import React from 'react'
import { navigate } from 'gatsby'
import { Section } from '../components/layout/section'
import styles from './cv.module.scss'

const DefaultTemplate = ({ pageContext }) => {
  const handleClick = () => navigate('https://cv.chasbob.dev/CV.pdf')
  const {
    page: {
      name,
      content: {
        childMarkdownRemark: { html },
      },
    },
  } = pageContext

  return (
    <div className={styles.parent}>
      <div
        onClick={handleClick}
        className={`is-clickable ${styles.content}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}

export default DefaultTemplate
