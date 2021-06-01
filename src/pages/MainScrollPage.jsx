import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import LandingPage from './Landing'
import ProjectListPage from './ProjectList'
import SkillPage from './Skill'
import ExperiencePage from './Experience'

import Scroller from '../component/Scroller'
import Footer from '../component/footer/Footer'

import Location from '../Location'

const StyledScroller = styled(Scroller)`
  overflow-x: hidden !important;
  margin-top: -64px;
  min-height: 100%;
  z-index: 2;
  height: auto !important;
  overflow-y: hidden;
`

class MainScrollPage extends Component {
  constructor() {
    super()
    this.pageIds = Location.links.map((l) => l.link)
    this.onScroll = this.onScroll.bind(this)
    this.container = window
  }

  onScroll(index) {
    const { history } = this.props

    history.push(`/${this.pageIds[index]}`)
  }

  render() {
    return (
      <>
        <StyledScroller
          onScroll={this.onScroll}
          index={this.pageIds.indexOf(Location.pathname())}
          container={this.container}
        >
          <div id="scroll-home-container" className="children">
            <LandingPage />
          </div>
          <div id="scroll-work-container" className="children">
            <ProjectListPage />
          </div>
          <div id="scroll-skills-container" className="children">
            <SkillPage />
          </div>
          <div id="scroll-experiences-container" className="children">
            <ExperiencePage />
          </div>
        </StyledScroller>
        <Footer />
      </>
    )
  }
}

MainScrollPage.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default MainScrollPage
