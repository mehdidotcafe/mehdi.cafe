import React, { Component } from 'react'

import MainRouter from './router/MainRouter'

import './App.css';

import './polyfill.js'

class App extends Component {
  render() {
    return (
      <>
        <MainRouter></MainRouter>
      </>
    );
  }
}

export default App;
