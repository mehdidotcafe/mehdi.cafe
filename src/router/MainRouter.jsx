import React from 'react'
import Analytics from 'react-router-ga'

import { BrowserRouter as Router } from 'react-router-dom'

import Header from '../component/header/Header'

import MainSwitch from './MainSwitch'

function MainRouter() {
  return (
    <Router>
      <div>
        <Analytics id="UA-144659432-1">
          <Header />
          { MainSwitch }
        </Analytics>
      </div>
    </Router>
  )
}

export default MainRouter
