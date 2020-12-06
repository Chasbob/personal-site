import React from 'react'

import styles from './hero.module.scss'

export default ({ data }) => (
  <section className="hero is-medium is-primary is-bold">
    <div className="hero-head" />
    <div className="hero-body">
      <div className="container">
        <h1 className="title is-size-1 is-family-code">{data.name}</h1>
        <h2 className="subtitle is-family-sans-serif has-text-weight-light is-italic">
          {data.title}
        </h2>
      </div>
    </div>
  </section>
)
