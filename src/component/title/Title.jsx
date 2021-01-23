import React from 'react'
// import PropTypes from 'prop-types'

import './Title.css'

function Title({ noMargin, text, myStyle }) {
  return (
    <h1 className={`title ${noMargin ? '' : 'margin-top'}`} style={myStyle}>{text}</h1>
  )
}

// Title.propTypes = {
//   noMargin: PropTypes.bool,
//   text: PropTypes.string.isRequired,
//   myStyle: PropTypes.object,
// }

export default Title
