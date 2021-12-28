import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ChildWrapper } from '../helper'
import { cardFill } from './card.module.scss'

export const FullCard = ({ title, icon, image, children, fill }) => (
  <div className={`card ${!!fill && cardFill}`}>
    <CardHeader title={title} icon={icon} />
    <CardImage image={image} />
    <div className="card-content">{children}</div>
  </div>
)

export default ({ children, className, fill }) => (
  <div
    className={`card ${(!!fill && cardFill) || ''} ${
      (!!className && className) || ''
    }`}
  >
    {children}
  </div>
)

export const CardHeader = ({ title, icon, className }) => (
  <div className={`card-header ${!!className && className}`}>
    {!!title && <div className="card-header-title is-centered">{title}</div>}
    {!!icon && <div className="card-header-icon">{icon}</div>}
  </div>
)

export const CardContent = ({ children }) => (
  <div className="card-content">{children}</div>
)

export const CardImage = ({ image, fluid }) => {
  if (!!fluid) {
    return (
      <div className={`card-image`}>
        <GatsbyImage image={image} className="image" alt={``} />
      </div>
    )
  }
  return (
    <div className={`card-image`}>
      <figure className="image">{image}</figure>
    </div>
  )
}

export const CardFooter = ({ children }) => (
  <div className="card-footer">
    <ChildWrapper cls="card-footer-item">{children}</ChildWrapper>
  </div>
)
