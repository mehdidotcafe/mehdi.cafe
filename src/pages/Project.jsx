import React from 'react'
import { withRouter, Link, Redirect } from 'react-router-dom'
import Slider from 'react-slick'
import moment from 'moment'
import 'moment/locale/fr';

import BasicPage from './BasicPage'

import Row from '../layout/row/Row'
import Item from '../layout/item/Item'

import Project from '../component/project/Project'
import ProjectOverlay from '../component/project/ProjectOverlay'
import Skill from '../component/skill/Skill'
import ScrollableRow from '../component/scrollable-row/ScrollableRow'
import Title from '../component/title/Title'
import Description from '../component/description/Description'
import RectScroller from '../component/rect-scroller/RectScroller'

import SkillService from '../services/Skill'
import ProjectService from '../services/Project'

import './Project.css'
import './BasicPage.css'
import Zoomable from '../component/zoomable/Zoomable'

import './slick.min.css'


class ProjectPage extends BasicPage {
  constructor(props) {
    super(props)

    const name = props.match.params.name

    this.timeoutId = undefined

    this.sliderRef = React.createRef()

    this.container = document.getElementsByTagName('body')[0]

    this.state = {
      transitionVisible: !!window._projectListToProjectTrasition,
      project: ProjectService.getFromName(name),
      activeSlide: 0
    }

    this.goToWork = this.goToWork.bind(this)
    this.onSwipe = this.onSwipe.bind(this)
  }

  componentDidMount() {    
    this.timeoutId = setTimeout(() => {
      this.timeoutId = undefined
      this.setState({
        transitionVisible: false
      })
    }, 500)

    // if (!window.document.documentMode) {
      this.container.scroll({
        top: 0,
        left: 0,
        behavior: 'instant'
      })
    // }
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    // if (!window.document.documentMode) {
      this.container.scroll({
        top: 0,
        left: 0,
        behavior: 'instant'
      })
    // }
    window._projectListToProjectTrasition = undefined
  }

  goToWork(e) {
    e.preventDefault()
    this.props.history.push(`/work`)
  }

  setActiveSlide(slide, e) {
    e.preventDefault()
    if (this.state.activeSlide !== slide) {
      this.setState({activeSlide: slide})
      this.sliderRef.current.slickGoTo(slide)
    }
  }

  onSwipe(direction) {
    this.setState({activeSlide: direction === 'left' ? 1 : 0})
  }

  getCloseButton() {
    return (
      <div className="project-close-button-container">
        <div>x</div>
      </div>
    )
  }

  renderContent() {
    const tabs = [
      {test: this.state.project.description_project || '', name: 'Le projet', content: this.state.project.description_project || ''},
      {test: this.state.project.description_mission, name: 'La mission', content: this.state.project.description_mission},
      {test: this.state.project.start, name: 'La durée', content: moment(this.state.project.start).locale('fr').format('LL') + ' - ' + (this.state.project.end ? moment(this.state.project.end).locale('fr').format('LL') : 'Actuel')}
    ].filter(t => t.test)

    return (
      <>
        <div className="project-page-background" />
        <div id="project-page-container">
          {this.state.project ?
            (
              <div className="project-info-container">
                <div className="project-description-container">
                  <Row className="project-header">
                    <div style={{display: 'inline-block', position: 'relative'}}>
                      <Project
                        backgroundColor={this.state.project.backgroundColor}
                        backgroundImage={this.state.project.backgroundImage}
                        name={this.state.project.name}
                        logo={this.state.project.logo}
                        isHoverable={false}
                        fullSize
                      />
                      <button type="submit" className="back-button-container" onClick={this.goToWork}><div>&#8249;</div></button>
                    </div>
                    <div className="project-title-container">
                      <Title text={this.state.project.name} noMargin />
                      { this.state.project.url &&
                        (
                          <div className="view-project-anchor">
                            <a
                              href={this.state.project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link"
                            >
                              Voir le projet
                            </a>
                          </div>
                        )}
                      <ScrollableRow className="project-skills-container" step={164 / 2.5}>
                        { this.state.project.languages.map(SkillService.getFromName).map(skill =>
                          (
                            <Item key={skill.name}>
                              <Link to={`/work?skill=${encodeURIComponent(skill.name)}`}>
                                <Skill
                                  name={skill.name}
                                  backgroundColor={skill.backgroundColor}
                                  backgroundImage={skill.backgroundImage}
                                  experience={skill.experience}
                                  logo={skill.logo}
                                  isLittle
                                />
                              </Link>
                            </Item>
                          ))}
                      </ScrollableRow>
                    </div>
                  </Row>
                  <div className="project-scroller-container bp-small">
                    <RectScroller>
                      { this.state.project.images.map(image => (
                        <img src={`/images-webp/project/${image}`} key={image} style={{backgroundColor: this.state.project.backgroundColor}} alt={this.state.project.name + ' ' + image} />
                      ))}
                    </RectScroller>
                  </div>
                  <div className="project-description-header">
                    {
                      tabs.map((tab, idx) => <button type="submit" key={tab.name} className={this.state.activeSlide === idx ? "isActive" : undefined} onClick={(e) => this.setActiveSlide(idx, e)}>{tab.name}</button>)
                    }
                  </div>
                  <div className="project-description-content">
                    <Slider settings={{dots: false, arrows: false, infine: false}} ref={this.sliderRef} onSwipe={this.onSwipe}>
                      {tabs.map((tab) => <Description text={tab.content} key={`${tab.name}|content`} noMargin />)}
                    </Slider>
                  </div>
                </div>
                <div className="project-scroller-container bp-large">
                  <RectScroller>
                    { this.state.project.images.map(image => (
                      <Zoomable key={image} closeButton={this.getCloseButton()}>
                        <img src={`/images-webp/project/${image}`} alt={this.state.project.name + ' ' + image} style={{backgroundColor: this.state.project.backgroundColor, height: '100%', width: '100%'}} />
                      </Zoomable>
                    )) }
                  </RectScroller>
                </div>
                { this.state.transitionVisible &&
                  <ProjectOverlay out backgroundColor={this.state.project.backgroundColor} logo={this.state.project.logo} isVisible /> }
              </div>
              ) :
              <Redirect to='/work' /> }
        </div>
      </>
    )
  }
}

export default withRouter(ProjectPage)
