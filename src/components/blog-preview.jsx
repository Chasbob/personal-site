import React from 'react'
import { Link } from 'gatsby'
import { navigate } from '@reach/router'
import Img from 'gatsby-image'
import style from './blog-preview.module.scss'

export default ({ article }) => {
  const handleClick = () => navigate(`/blog/${article.slug}`)
  return (
    <div
      className={`is-clickable box mb-6 ${style.preview}`}
      onClick={handleClick}
    >
      <Link to={`/blog/${article.slug}`}>
        <h2 className="is-capitalized has-text-weight-bold is-size-5-mobile is-size-4-tablet">
          {article.title}
        </h2>
      </Link>
      <h3 className="subtitle is-italic has-text-weight-light is-family-sans-serif">
        {article.publishDate}
      </h3>
      <Img className="mt-3 image" alt={``} fluid={article.heroImage.fluid} />
    </div>
  )
}
