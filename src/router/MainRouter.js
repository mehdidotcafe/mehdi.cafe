import React, {Component} from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ProjectPage from '../pages/Project'
import MainScrollPage from '../pages/MainScrollPage'

import Header from '../Header'

class MainRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route path="/" exact component={MainScrollPage} />
            <Route path="/work" exact component={MainScrollPage} />
            <Route path="/skills/" component={MainScrollPage} />
            <Route path="/experiances/" component={MainScrollPage} />

            <Route path="/work/:name" exact component={ProjectPage} />

            <Route path='*' component={MainScrollPage}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default MainRouter
