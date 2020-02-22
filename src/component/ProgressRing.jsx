import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './ProgressRing.css'

class ProgressRing extends Component {
  constructor(props) {
    super(props)

    const {side} = this.props

    this.circumference = side * 4
  }

  render() {
    const {stroke, progress, side} = this.props;

    const strokeDashoffset = this.circumference - progress / 100 * this.circumference;
    const strokeColor = '#ffab00'

    return (
      <svg
        style={{overflow: 'visible'}}
        height={side}
        width={side}
      >
        <rect
          stroke={strokeColor}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={this.circumference + ' ' + this.circumference}
          style={{strokeDashoffset}}
          width={side}
          height={side}
        />
      </svg>
    )
  }
}

ProgressRing.propTypes = {
  side: PropTypes.number.isRequired,
  stroke: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired
}

export default ProgressRing
