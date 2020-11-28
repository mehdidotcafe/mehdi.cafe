import React, {Component} from 'react'

import './Item.css'

class Item extends Component {
  render() {
    return (
      <div className="item" {...this.props}>
        {this.props.children}
      </div>
    )
  }
}

export default Item
