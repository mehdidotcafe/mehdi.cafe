import React, {Component} from 'react'

import './ProgressRing.css'

class ProgressRing extends Component {
  constructor(props) {
    super(props);

    const { radius, stroke } = this.props;

    this.normalizedRadius = radius - stroke * 2;
    this.circumference = this.normalizedRadius * 2 * Math.PI;
  }

  render() {
    const { stroke, progress } = this.props;

    const strokeDashoffset = this.circumference - progress / 100 * this.circumference;

    // const strokeColor = '#ffab00'
    const strokeColor = '#ffab00'

    return (
      <svg
        style={{overflow: 'visible'}}
        height={this.props.side}
        width={this.props.side}
       >
        <circle
          stroke={strokeColor}
          fill="transparent"
          strokeWidth={ stroke }
          strokeDasharray={ this.circumference + ' ' + this.circumference }
          style={ { strokeDashoffset } }
          r={ this.normalizedRadius }
          cx={ this.props.side / 2}
          cy={ this.props.side / 2}
         />
      </svg>
    );
  }
}

export default ProgressRing
