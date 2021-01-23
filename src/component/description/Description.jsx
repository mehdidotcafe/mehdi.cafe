import React from 'react'
import PropTypes from 'prop-types'

import './Description.css'

function Description({ text, noMargin, style }) {
  const eText = text.replace(/(?:\r\n|\r|\n)/g, '<br />')
  const classes = ['description']

  if (noMargin) {
    classes.push('noMargin')
  }
  return (
    // eslint-disable-next-line
    <p className={classes.join(' ')} dangerouslySetInnerHTML={{ __html: eText }} style={style} />
  )
}

Description.propTypes = {
  text: PropTypes.string.isRequired,
  noMargin: PropTypes.bool.isRequired,
  style: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default Description
