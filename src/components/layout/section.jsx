import React from 'react'
export function Section({ children }) {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">{children}</div>
        </div>
      </div>
    </section>
  )
}
