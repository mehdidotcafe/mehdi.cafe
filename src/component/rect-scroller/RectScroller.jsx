import React from 'react'

import './RectScroller.css'

function RectScroller({ children }) {
  return (
    <div className="rect-scroll-container">
      { React.Children.map(children, (child) => (
        <div className="rect-scroll-element">
          {child}
        </div>
      ))}
    </div>
  )
}

export default RectScroller
