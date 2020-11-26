import React from 'react'
import Img from 'gatsby-image'
import { ChildWrapper } from '../helper'
import style from './card.module.css'

export const FullCard = ({ title, icon, image, children, fill }) => (
  <div className={`card ${!!fill && style.cardFill}`}>
    <CardHeader title={title} icon={icon} />
    <CardImage image={image} />
    <div className="card-content">{children}</div>
  </div>
)

export default ({ children, className, fill }) => (
  <div
    className={`card ${!!fill && style.cardFill} ${!!className && className}`}
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
        <Img className="image" alt={``} fluid={image} />
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
