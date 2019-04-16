import React, {Component} from 'react'

import LandingPage from '../pages/Landing'
import ProjectListPage from '../pages/ProjectList'
import SkillPage from '../pages/Skill'
import ExperiencePage from '../pages/Experience'

import Scroller from '../component/Scroller'

import Footer from '../component/footer/Footer'

import Location from '../Location'

import './MainScrollPage.css'

const pageIds = Location.links.map(l => l.link)

class MainScrollPage extends Component {

  onScroll(index) {
    this.props.history.push(`/${pageIds[index]}`)
  }

  render() {
    return (
      <Scroller onScroll={this.onScroll.bind(this)} index={pageIds.indexOf(Location.pathname())} height="100vh">
        <div id="scroll-home-container" className="children">
          <LandingPage/>
        </div>
        <div id="scroll-work-container" className="children">
          <ProjectListPage/>
        </div>
        <div id="scroll-skills-container" className="children">
          <SkillPage/>
        </div>
        <div id="scroll-experiences-container" className="children">
          <ExperiencePage/>
          <Footer/>
        </div>
      </Scroller>
    )
  }
}

export default MainScrollPage
