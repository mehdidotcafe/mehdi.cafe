import React, {Component} from 'react'

class Image extends Component {
  render() {
    return (
        <img draggable="false" src={this.props.src} alt={this.props.alt || ''} className={this.props.className}/>
    )
  }
}

export default Image
