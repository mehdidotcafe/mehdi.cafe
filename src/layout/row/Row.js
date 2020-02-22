import React, {Component} from 'react'

import './Row.css'

class Row extends Component {
  render() {
    return (
      <div className={`
        row
        ${this.props.spaceAroundMob ? 'row-space-around-mob' : ''}
        ${this.props.noWrap ? 'noWrap' : ''}
        ${this.props.className || ''}
        ${this.props.center ? 'row-center' : ''}`}
        style={this.props.style}
        ref={this.props.customRef}
      >
        {this.props.children}
      </div>
    )
  }
}

export default Row
