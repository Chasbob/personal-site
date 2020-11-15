import React from 'react'

export default ({ children, ancestor, parent, child, vertical, classes }) => (
  <div
    className={`tile 
    ${!!ancestor ? 'is-ancestor' : ''} 
    ${!!parent ? 'is-parent' : ''} 
    ${!!child ? 'is-child' : ''} 
    ${!!vertical ? 'is-vertical' : ''} 
    ${!!classes && classes} 
    `}
  >
    {children}
  </div>
)
