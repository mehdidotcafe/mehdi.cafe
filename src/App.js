import React, { Component } from 'react'

import MainRouter from './router/MainRouter'

import './App.css';

import './polyfill.js'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MainRouter></MainRouter>
      </React.Fragment>
    );
  }
}

export default App;
