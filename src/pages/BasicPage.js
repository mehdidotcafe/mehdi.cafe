import React, {Component} from 'react'

import './BasicPage.css'

class BasicPage extends Component {
  renderContent() {
    return undefined
  }

  render() {
    return (
      <div className="basic-page">
        {this.renderContent()}
      </div>
    )
  }
}

export default BasicPage
