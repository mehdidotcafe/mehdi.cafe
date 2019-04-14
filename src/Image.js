import React, {Component} from 'react'

class Image extends Component {
  render() {
    return (
      <picture>
        <source srcSet={`${this.props.src}.webp`} type="image/webp"/>
        <img draggable="false" src={this.props.src} alt={this.props.alt || ''} className={this.props.className}/>
      </picture>
    )
  }
}

export default Image
