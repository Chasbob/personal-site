import React from 'react'
import { graphql } from 'gatsby'
import style from './portfolio.module.scss'
import { Section } from '../components/layout/section'
import Card, {
  CardContent,
  CardHeader,
  CardImage,
} from '../components/layout/card'

export default ({ data }) => {
  const { allContentfulPortfolio } = data
  const { edges: portfolio } = allContentfulPortfolio
  const categories = portfolio
    .map((i) => i.node)
    .reduce((acc, cur) => {
      acc[cur.category] = acc[cur.category] || []
      acc[cur.category].push(cur)
      return acc
    }, {})
  return (
    <>
      <Section>
        <h1 className="title is-capitalized has-text-centered is-size-1 is-family-sans-serif">
          Portfolio{' '}
        </h1>
      </Section>
      <Section>
        <Category items={categories['work']} title="work" />
        <Category items={categories['projects']} title="projects" />
        <Category items={categories['volunteering']} title="volunteering" />
      </Section>
    </>
  )
}

const Category = ({ items, title }) =>
  !!items && (
    <div className="section" key={title}>
      <h2 className="is-size-2 title is-capitalized is-family-primary">
        {title}
      </h2>
      <div className={style.grid}>
        {items.map((item) => (
          <Item {...item} key={item.title} />
        ))}
      </div>
    </div>
  )

const Item = ({ title, link, image, role, description }) => {
  return (
    <div className={style.gridItem}>
      <Card className={`tile is-child ${style.card}`} key={title}>
        <CardHeader
          title={
            <a className={style.link} href={link}>
              {title}
            </a>
          }
        />
        <CardImage image={image.fluid} fluid />
        <CardContent>
          <h1 className="is-text has-text-weight-bold">{role}</h1>
          <p className="is-text has-text-weight-light">{description}</p>
        </CardContent>
      </Card>
    </div>
  )
}

export const pageQuery = graphql`
  query PortfolioWorkQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPortfolio {
      edges {
        node {
          title
          slug
          category
          link
          image {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          role
          description
        }
      }
    }
  }
`
