import React from 'react'

import { withRouter } from 'react-router-dom'

import Location from '../Location'

import Title from '../component/title/Title'
import Project from '../component/project/Project'
import ProjectOverlay from '../component/project/ProjectOverlay'
import Skill from '../component/skill/Skill'

import Row from '../layout/row/Row'
import Item from '../layout/item/Item'

import BasicPage from './BasicPage'

import SkillService from '../services/Skill'

import './BasicPage.css'
import './ProjectList.css'

class ProjectListPage extends BasicPage {

  hasMoreSkill = false

  projects = require('../data/projects.json')
  skills = SkillService.getFilterable()

  filters = []

  filtersGroup = ["iOS", "NodeJS", "Angular", "Laravel", "MongoDB", "C++"]

  constructor(props) {
    super(props)



    this.state = {
      projects: this.projects.slice(0),
      skills: this.skills.slice(0),
      selectedProject: undefined
    }

    this.addSkillFromQS()
  }

  addSkillFromQS() {
    const paramSkills = Location.qs().skill ? this.skillToArray(Location.qs().skill) : []
    let newSkills = this.state.skills.slice(0)

    let paramSkillObj = undefined

    const skillCmp = (second) => {
      return (first) => first.name === second
    }

    if (paramSkills && paramSkills.length > 0) {
      for (var i = 0; i < paramSkills.length; i++) {
        paramSkillObj = SkillService.getFromName(paramSkills[i])

        if (newSkills.findIndex(skillCmp(paramSkills[i])) ===-1) {
          if (this.hasMoreSkill === false) {
            this.filtersGroup.unshift(paramSkills[i])
            this.hasMoreSkill = true
          }
          newSkills.unshift(paramSkillObj)
          this.setState({
            skills: newSkills
          })
        }
      }
    }
  }

  hasSkills(toFind) {
    for (var i = 0; i < toFind.length; i++) {
      if (this.filters.indexOf(toFind[i]) === -1) {
        return false
      }
    }
    return true
  }


  filterFromQS(needClearFilters = false) {
    const paramSkills = Location.qs().skill

    if (paramSkills && !this.hasSkills(this.skillToArray(paramSkills))) {
      if (needClearFilters) {
        this.filters = []
      }
      this.filterProjects(paramSkills)
    }
  }

  componentDidMount() {
    this.filterFromQS()
  }

  componentDidUpdate() {
    this.addSkillFromQS()
    this.filterFromQS(true)
  }

  skillToArray(skill) {
    const skills = skill ? (Array.isArray(skill) ? skill : [skill]) : []
    return skills.map(skill => decodeURIComponent(skill))
  }

  filterProjects(skill, needToUpdateUrl = false) {
    let filtered = []
    let idx = undefined
    let isMatching = true
    let skills = this.skillToArray(skill)

    for (var k = 0; k < skills.length; k++) {
      if (skills[k] && (idx = this.filters.indexOf(skills[k])) === -1) {
        this.filters.push(skills[k])
      } else if (skills[k]) {
        this.filters.splice(idx, 1)
      }
    }

    for (var i = 0; i < this.projects.length; i++) {
      isMatching = true
      for (var j = 0; j < this.filters.length; j++) {
        if (this.projects[i].languages.indexOf(this.filters[j]) === -1) {
          isMatching = false
          break
        }
      }
      if (isMatching) {
        filtered.push(this.projects[i])
      }
    }
    if (needToUpdateUrl) {
      this.props.history.replace(`/work?${this.filters.map(f => 'skill=' + encodeURIComponent(f)).join('&')}`)
    }
    this.setState({
      projects: filtered
    })
  }

  getSkillGrouped() {
    let grouped = this.state.skills.slice(0)
    let groups = [[]]

    for (var i = 0; i < grouped.length; i++) {
      groups[groups.length - 1].push(grouped[i])
      if (this.filtersGroup.indexOf(grouped[i].name) !== -1) {
        groups.push([])
      }
    }

    return groups
  }

  goToProject(project) {
    this.setState({
      selectedProject: project
    }, () => {
      setTimeout(() => {
        window._projectListToProjectTrasition = true
        this.props.history.push(`/work/${project.name}`)
      }, 500)
    })
  }

  clearFilters() {
    this.props.history.replace(`/work`)
    this.filters = []
    this.filterProjects(undefined)
  }

  renderContent() {
    const fakeProjects = new Array(10).fill(this.projects[0])

    return (
      <div className="sub-basic-page project-list-container">
        <div className="project-background"></div>

        <div style={{paddingTop: '64px'}}>
          <Title text={`Mes projets`} noMargin={true}/>
        </div>
        <Row style={{marginTop: '16px'}}>
          <Row className="filter-container bp-large">
            <div className="filter-text" style={{cursor: `${this.filters.length > 0 ? 'pointer' : 'normal'}`}} onClick={this.clearFilters.bind(this)}>
              <span style={{fontSize: '22px'}}><span style={{visibility: this.filters.length > 0 ? 'visible' : 'hidden'}}>(X) </span>FILTRES</span>
            </div>
            { this.getSkillGrouped().map((group, idx) =>
                <Row className={`filter-row`} key={idx}>
                  {group.map((skill, idx) => (
                    <Item key={skill.name} onClick={() => this.filterProjects(skill.name, true)}>
                      <Skill {...skill}  isSelected={this.filters.indexOf(skill.name) !== -1} isLittle={true}/>
                    </Item>
                  ))}
                </Row>
            )}
          </Row>

          <Row spaceAroundMob className="project-list-container">
            { this.state.projects.map(project => (
              <span onClick={() => this.goToProject(project)} key={project.name}>
                <Item>
                  <Project {...project}/>
                </Item>
              </span>
            ))}
            { this.state.projects.length  === 0 &&
                <span className="no-project-text-container">
                  <span role="img" aria-label="No project" className="emoji-container">😥</span>
                  <sub>Aucun projet</sub>
                </span>
            }
            { fakeProjects.map((project, idx) => (
              <span style={{visibility: 'hidden', height: '0'}} key={project.name + '|' + idx + '|fake'}>
                <Item>
                  <Project {...project}/>
                </Item>
              </span>
            ))}
          </Row>
        </Row>
        <ProjectOverlay
          in
          isVisible={!!this.state.selectedProject}
          backgroundColor={this.state.selectedProject ? this.state.selectedProject.backgroundColor : undefined}
          logo={this.state.selectedProject ? this.state.selectedProject.logo : undefined}/>
      </div>
    )
  }
}

export default withRouter(ProjectListPage)
