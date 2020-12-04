import React from 'react'
import { Link, navigate } from 'gatsby'
import Img from 'gatsby-image'
import style from './blog-preview.module.scss'

export default ({ article }) => {
  const location = `/blog/${article.slug}/`
  const handleClick = () => navigate(location)
  return (
    <div
      className={`is-clickable box mb-6 ${style.preview}`}
      onClick={handleClick}
    >
      <Link to={location}>
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
