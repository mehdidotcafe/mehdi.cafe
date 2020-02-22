import React from 'react'
import PropTypes from 'prop-types'

import './Description.css'

function Description({text, noMargin, style}) {
  const eText = text.replace(/(?:\r\n|\r|\n)/g, '<br />')
  let classes = ['description']

  if (noMargin) {
    classes.push('noMargin')
  }
  return (
    <p className={classes.join(' ')} dangerouslySetInnerHTML={{__html: eText}} style={style} />
  )
}

Description.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default Description
