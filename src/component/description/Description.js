import React, {Component} from 'react'

import './Description.css'

class Description extends Component {
  render() {
    const text = this.props.text.replace(/(?:\r\n|\r|\n)/g, '<br />')

    return (
      <p className="description" dangerouslySetInnerHTML={{__html: text}} style={this.props.style}></p>
    )
  }
}

export default Description
