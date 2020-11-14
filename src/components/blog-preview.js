import React from 'react'
import { Link } from 'gatsby'
import Card, { CardHeader, CardImage, CardContent } from './layout/card'
import style from './article-preview.module.css'

export default ({ article }) => {
  return (
    <div>
      <Card className={`${style.card} is-title is-size-3`}>
        <CardHeader
          // className={style.previewTitle}
          title={<Link to={`/blog/${article.slug}`}>{article.title}</Link>}
        />
        <CardImage image={article.heroImage.fluid} fluid={true} />
        <CardContent>
          <small className="is-italic">{article.publishDate}</small>
          <div
            dangerouslySetInnerHTML={{
              __html: article.description.childMarkdownRemark.html,
            }}
          />
        </CardContent>
        <div className="card-footer">
          {article.tags &&
            article.tags.map((tag) => (
              <p className="tag is-primary is-rounded" key={tag}>
                {tag}
              </p>
            ))}
        </div>
      </Card>
    </div>
  )
}
