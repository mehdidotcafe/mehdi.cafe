import React from 'react'

import './Row.css'

function Row({
  spaceAroundMob, noWrap, className, center, style, customRef, children,
}) {
  return (
    <div
      className={`
      row
      ${spaceAroundMob ? 'row-space-around-mob' : ''}
      ${noWrap ? 'noWrap' : ''}
      ${className || ''}
      ${center ? 'row-center' : ''}`}
      style={style}
      ref={customRef}
    >
      {children}
    </div>
  )
}

export default Row
