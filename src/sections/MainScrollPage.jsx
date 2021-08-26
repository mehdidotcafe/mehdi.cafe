import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { withRouter } from 'next/router'

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

class MainScrollPage extends PureComponent {
  constructor() {
    super()
    this.pageIds = Location.links.map((l) => l.link)
    this.onScroll = this.onScroll.bind(this)
    if (typeof window !== 'undefined') {
      this.container = window
    }
  }

  onScroll(index) {
    const { router } = this.props

    router.push(`/${this.pageIds[index]}`, undefined, { shallow: true })
  }

  render() {
    const {
      projects,
      filterableSkills,
      skills,
      experiences,
    } = this.props

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
            <ProjectListPage projects={projects} filterableSkills={filterableSkills} />
          </div>
          <div id="scroll-skills-container" className="children">
            <SkillPage skills={skills} />
          </div>
          <div id="scroll-experiences-container" className="children">
            <ExperiencePage experiences={experiences} />
          </div>
        </StyledScroller>
        <Footer />
      </>
    )
  }
}

export default withRouter(MainScrollPage)
