import React, { Component } from 'react'

import './BasicPage.css'

class BasicPage extends Component {
  // eslint-disable-next-line
  renderContent() {
    return undefined
  }

  render() {
    return (
      <div className="basic-page" style={this.style}>
        {this.renderContent()}
      </div>
    )
  }
}

export default BasicPage
