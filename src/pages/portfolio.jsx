import React from 'react'
import { graphql } from 'gatsby'
import { Layout, Section } from '../layouts/basic'
import get from 'lodash/get'
import style from './portfolio.module.scss'
import Card, {
  CardContent,
  CardFooter,
  CardHeader,
  CardImage,
} from '../components/layout/card'
import { FaBookmark, FaLink } from 'react-icons/all'

export default ({ data, location }) => {
  const portfolio = get(data, 'allContentfulPortfolio.edges')
  const categories = portfolio
    .map((i) => i.node)
    .reduce((acc, cur) => {
      acc[cur.category] = acc[cur.category] || []
      acc[cur.category].push(cur)
      return acc
    }, {})
  return (
    <Layout location={location}>
      <Section>
        <h1 className="title is-capitalized has-text-centered is-size-1 is-family-sans-serif">
          Portfolio{' '}
        </h1>
      </Section>
      <Section>
        {Object.keys(categories).map((category) => (
          <Category items={categories[category]} />
        ))}
      </Section>
    </Layout>
  )
}

const Category = ({ items }) => (
  <div className="section">
    <h2 className="is-size-2 title is-capitalized is-family-primary">
      {items[0].category}
    </h2>
    <div className={style.grid}>
      {items.map((item) => (
        <Item {...item} />
      ))}
    </div>
  </div>
)

const Item = ({ title, link, image, role, description }) => (
  <div className={style.gridItem}>
    <Card className={`tile is-child ${style.card}`} key={title}>
      <CardHeader title={title} />
      <CardImage image={image.fluid} fluid />
      <CardContent>
        <h1>{role}</h1>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <a href={link}>
          <FaLink />
        </a>
        <FaBookmark />
      </CardFooter>
    </Card>
  </div>
)

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
