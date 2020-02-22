import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import Header from '../component/header/Header'

import MainSwitch from './MainSwitch'

function MainRouter() {
  return (
    <Router>
      <div>
        <Header />
        { MainSwitch }
      </div>
    </Router>
  )
}

export default MainRouter
