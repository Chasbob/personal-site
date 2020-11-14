import React from 'react'

export const Columns = ({ children }) => (
  <div className="columns">
    {React.Children.map(children, (child, index) => (
      <Column key={index}>{child}</Column>
    ))}
  </div>
)

export const Column = ({ children }) => <div className="column">{children}</div>
