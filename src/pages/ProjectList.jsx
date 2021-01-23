import React from 'react'

import { withRouter } from 'react-router-dom'

import Location from '../Location'

import Projects from '../data/projects.json'

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
  constructor(props) {
    super(props)

    this.hasMoreSkill = false

    this.projects = Projects.filter((p) => p.isVisible !== false)
    this.skills = SkillService.getFilterable()

    this.filters = []

    this.filtersGroup = ['iOS', 'NodeJS', 'Angular', 'Laravel', 'MongoDB', 'C++']

    this.state = {
      projects: this.projects.slice(0),
      skills: this.skills.slice(0),
      selectedProject: undefined,
    }

    this.addSkillFromQS()
  }

  addSkillFromQS() {
    const paramSkills = Location.qs().skill ? ProjectListPage.skillToArray(Location.qs().skill) : []
    const newSkills = this.state.skills.slice(0)

    let paramSkillObj

    const skillCmp = (second) => (first) => first.name === second

    if (paramSkills && paramSkills.length > 0) {
      for (let i = 0; i < paramSkills.length; i += 1) {
        paramSkillObj = SkillService.getFromName(paramSkills[i])

        if (newSkills.findIndex(skillCmp(paramSkills[i])) === -1) {
          if (this.hasMoreSkill === false) {
            this.filtersGroup.unshift(paramSkills[i])
            this.hasMoreSkill = true
          }
          newSkills.unshift(paramSkillObj)
          this.setState({
            skills: newSkills,
          })
        }
      }
    }
  }

  hasSkills(toFind) {
    for (let i = 0; i < toFind.length; i += 1) {
      if (this.filters.indexOf(toFind[i]) === -1) {
        return false
      }
    }
    return true
  }

  filterFromQS(needClearFilters = false) {
    const paramSkills = Location.qs().skill

    if (paramSkills && !this.hasSkills(ProjectListPage.skillToArray(paramSkills))) {
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

  static fmtSkills(skill) {
    if (skill) {
      if (Array.isArray(skill)) {
        return skill
      }

      return [skill]
    }
    return []
  }

  static skillToArray(skill) {
    const skills = this.fmtSkills(skill)
    return skills.map((mSkill) => decodeURIComponent(mSkill))
  }

  filterProjects(skill, needToUpdateUrl = false) {
    const filtered = []
    const skills = ProjectListPage.skillToArray(skill)
    let idx
    let isMatching = true

    for (let k = 0; k < skills.length; k += 1) {
      idx = this.filters.indexOf(skills[k])
      if (skills[k] && idx === -1) {
        this.filters.push(skills[k])
      } else if (skills[k]) {
        this.filters.splice(idx, 1)
      }
    }

    for (let i = 0; i < this.projects.length; i += 1) {
      isMatching = true
      for (let j = 0; j < this.filters.length; j += 1) {
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
      this.props.history.replace(`/work?${this.filters.map((f) => `skill=${encodeURIComponent(f)}`).join('&')}`)
    }
    this.setState({
      projects: filtered,
    })
  }

  getSkillGrouped() {
    const grouped = this.state.skills.slice(0)
    const groups = [{ group: [], id: -1 }]

    for (let i = 0; i < grouped.length; i += 1) {
      groups[groups.length - 1].group.push(grouped[i])
      if (this.filtersGroup.indexOf(grouped[i].name) !== -1) {
        groups.push({ group: [], id: groups.length })
      }
    }

    return groups
  }

  goToProject(project, e) {
    e.preventDefault()
    this.setState({
      selectedProject: project,
    }, () => {
      setTimeout(() => {
        // eslint-disable-next-line
        window._projectListToProjectTrasition = true
        this.props.history.push(`/work/${project.name}`)
      }, 500)
    })
  }

  clearFilters(e) {
    e.preventDefault()
    this.props.history.replace('/work')
    this.filters = []
    this.filterProjects(undefined)
  }

  renderContent() {
    const fakeProjects = new Array(10).map((v, idx) => ({
      ...this.projects[0],
      name: `fake|${idx}`,
    }))

    return (
      <div className="sub-basic-page project-list-container">
        <div className="project-background" />

        <div style={{ paddingTop: '64px' }}>
          <Title text="Mes projets" noMargin />
        </div>
        <Row style={{ marginTop: '16px' }}>
          <Row className="filter-container bp-large">
            <button type="submit" className="filter-text" style={{ cursor: `${this.filters.length > 0 ? 'pointer' : 'normal'}` }} onClick={this.clearFilters.bind(this)}>
              <span className="subTitle">
                <span style={{ visibility: this.filters.length > 0 ? 'visible' : 'hidden' }}>(X) </span>
                FILTRES
              </span>
            </button>
            { this.getSkillGrouped().map((group) => (
              <Row className="filter-row" key={group.id}>
                {group.group.map((skill) => (
                  <Item key={skill.name} onClick={() => this.filterProjects(skill.name, true)}>
                    <Skill
                      name={skill.name}
                      backgroundImage={skill.backgroundImage}
                      backgroundColor={skill.backgroundColor}
                      logo={skill.logo}
                      experience={skill.experience}
                      isSelected={this.filters.indexOf(skill.name) !== -1}
                      isLittle
                    />
                  </Item>
                ))}
              </Row>
            ))}
          </Row>

          <Row center className="project-list-container">
            { this.state.projects.map((project) => (
              <button type="submit" onClick={(e) => this.goToProject(project, e)} key={project.name} className="project-child-container">
                <Item>
                  <Project
                    backgroundColor={project.backgroundColor}
                    backgroundImage={project.backgroundImage}
                    name={project.name}
                    logo={project.logo}
                  />
                </Item>
              </button>
            ))}
            { this.state.projects.length === 0 && (
              <span className="no-project-text-container">
                <span role="img" aria-label="No project" className="emoji-container">😥</span>
                <sub>Aucun projet</sub>
              </span>
            )}
            { fakeProjects.map((project) => (
              <span style={{ visibility: 'hidden', height: '0' }} key={project.name}>
                <Item>
                  <Project
                    backgroundColor={project.backgroundColor}
                    backgroundImage={project.backgroundImage}
                    name={project.name}
                    logo={project.logo}
                  />
                </Item>
              </span>
            ))}
          </Row>
        </Row>
        <ProjectOverlay
          inTransition
          isVisible={!!this.state.selectedProject}
          backgroundColor={
            this.state.selectedProject ? this.state.selectedProject.backgroundColor : undefined
          }
          logo={this.state.selectedProject ? this.state.selectedProject.logo : undefined}
        />
      </div>
    )
  }
}

export default withRouter(ProjectListPage)
