import React, {Component} from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import Header from '../Header'

import MainSwitch from './MainSwitch'

class MainRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          {MainSwitch}
        </div>
      </Router>
    )
  }
}

export default MainRouter
