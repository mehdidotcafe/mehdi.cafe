import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ProjectPage from '../pages/Project'
import MainScrollPage from '../pages/MainScrollPage'

export default (
  <Switch>
    <Route path="/" exact component={MainScrollPage} />
    <Route path="/work" exact component={MainScrollPage} />
    <Route path="/skills/" component={MainScrollPage} />
    <Route path="/experiances/" component={MainScrollPage} />

    <Route path="/work/:name" exact component={ProjectPage} />

    <Route path="*" component={MainScrollPage} />
  </Switch>
)
