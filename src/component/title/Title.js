import React, {Component} from 'react'

import './Title.css'

class Title extends Component {
  render() {
    return (
      <h1 className={`title ${this.props.noMargin ? '' : 'margin-top'}`}>{this.props.text}</h1>
    )
  }
}

export default Title
