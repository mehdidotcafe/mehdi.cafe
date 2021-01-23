import React from 'react'

import './Item.css'

function Item({ onClick, style, children }) {
  return (
    <button className="item" onClick={onClick} style={style} type="submit">
      {children}
    </button>
  )
}

export default Item
