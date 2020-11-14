import React from 'react'

export const ChildWrapper = ({ cls, children }) =>
  React.Children.map(children, (child, index) => (
    <div key={index} className={cls}>
      {child}
    </div>
  ))
