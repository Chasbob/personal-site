import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../layouts/basic'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import { Section } from '../layouts/basic'
import Tile from '../components/layout/tile'
import style from './portfolio.module.css'
import Card, {
  CardContent,
  CardHeader,
  CardImage,
} from '../components/layout/card'
import { FaLink } from 'react-icons/all'

export default ({ data, location }) => {
  const siteTitle = get(data, 'site.siteMetadata.title')
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
      <Helmet title={siteTitle} />
      <>
        {Object.keys(categories).map((category) => (
          <Category items={categories[category]} />
        ))}
      </>
    </Layout>
  )
}

const Category = ({ items }) => {
  const size = Math.min(Math.floor(3 / items.length) + 2, 12)
  return (
    <div className="section">
      <span className="is-size-2 title is-capitalized m-1">
        {items[0].category}
      </span>
      <Tile ancestor>
        <Tile parent classes={`is-justify-content-space-around`}>
          {items.map((item) => (
            <Item {...item} size={size} />
          ))}
        </Tile>
      </Tile>
    </div>
  )
}

const Item = ({ title, link, image, role, description, size }) => (
  <Card className={`tile is-child ${style.card}`} key={title}>
    <CardHeader
      title={title}
      icon={
        <a href={link}>
          <FaLink />
        </a>
      }
    />
    <CardImage image={image.fluid} fluid />
    <CardContent>
      <h1>{role}</h1>
      <p>{description}</p>
    </CardContent>
  </Card>
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
