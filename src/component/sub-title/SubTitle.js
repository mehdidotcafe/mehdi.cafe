import React, {Component} from 'react'

import './SubTitle.css'

class SubTitle extends Component {
  render() {
    return (
      <h4 style={this.props.style} className={`sub-title ${this.props.noMargin ? '' : 'margin-top'}`}>{this.props.text}</h4>
    )
  }
}

export default SubTitle
