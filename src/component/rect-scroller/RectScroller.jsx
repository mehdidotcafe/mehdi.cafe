import React, {Component} from 'react'

import './RectScroller.css'

class RectScroller extends Component {
  render() {
    return (
      <div className="rect-scroll-container">
        { React.Children.map(this.props.children, child => (
          <div className="rect-scroll-element">
            {child}
          </div>
        ))}
      </div>
    )
  }
}

export default RectScroller
