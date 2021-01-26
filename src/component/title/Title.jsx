import React from 'react'
// import PropTypes from 'prop-types'

import './Title.css'

function Title({ noMargin, text, myStyle }) {
  return (
    <h1 className={`title ${noMargin ? '' : 'margin-top'}`} style={myStyle}>{text}</h1>
  )
}

export default Title
