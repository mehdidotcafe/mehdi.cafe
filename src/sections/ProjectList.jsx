import React, { Component } from 'react'
import styled from 'styled-components'

import { withRouter } from 'next/router'

import Location from '../Location'

import Title from '../component/title/Title'
import SubTitle from '../component/sub-title/SubTitle'
import Project from '../component/project/Project'
import ProjectOverlay from '../component/project/ProjectOverlay'
import Skill from '../component/skill/Skill'

import Row from '../layout/row/Row'
import Item from '../layout/item/Item'

import BasicPage from './BasicPage'

import SkillService from '../services/Skill'

const Container = styled(Row)`
  width: 25%;
  max-width: 25%;
  margin-right: 2.5%;
  padding-right: 2.5%;
  overflow-x: auto;
  border-right: 3px solid black;
  box-sizing: border-box;
  padding-bottom: 32px;

  ${(props) => props.theme.isPhone} {
    width: 100%;
    max-width: 100%;
    padding-bottom: 16px;
    margin-bottom: 16px;
    margin-left: calc(4% + 16px);
    margin-right: calc(4% + 16px);
    padding-right: 0;
    border-right: 0;
    border-bottom: 3px solid black;
  }
`

const NoProjectText = styled.span`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  text-align: center;

  sub {
    margin: 12px;
    font-size: 20px !important;
    font-family: 'Roboto';
    text-transform: uppercase;
  }
`

const ProjectBackground = styled.div`
  position: absolute;
  bottom: -90vh;
  height: 100vh;
  right: -70vh;
  background-image: linear-gradient(to left top, ${(props) => props.theme.gradiantColors});
  width: 100vh;
  -webkit-transform: rotate(-35deg);
  transform: rotate(-35deg);
  z-index: -1;
`

const EmojiContainer = styled.span`
  font-size: 80px;
  text-align: center;
`

const FilterText = styled.button`
  margin-right: 8px;
  margin-bottom: 16px;
  width: 100%;
  text-align: right;
  cursor: ${(props) => (props.hasPointer ? 'pointer' : 'normal')}

  ${(props) => props.theme.isPhone} {
    text-align: left;
  }
`

const ProjectButton = styled.button`
  overflow: visible;
`

const FilterRow = styled(Row)`
  justify-content: flex-end;
  width: 100%;

  ${(props) => props.theme.isPhone} {
    justify-content: center;
    width: auto;
  }
`

const ListContainer = styled(Row)`
  flex: 1;
  position: relative;

  .row {
    align-items: flex-start;
  }

  ${(props) => props.theme.isPhone} {
    width: 100%;
    max-width: 100%;
  }
`

const ClearFilterButton = styled.span`
visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')}
`

const FakeItem = styled(Item)`
visibility: hidden;
height: 0;
`

const ProjectTitle = styled(Title)`
padding-top: 64px;
`

const ProjectRow = styled(Row)`
margin-top: 16px;
`

class ProjectListPage extends Component {
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

  constructor(props) {
    super(props)

    const {
      projects,
      filterableSkills,
    } = this.props

    this.hasMoreSkill = false
    this.projects = projects
    this.skills = filterableSkills

    this.filters = []

    this.filtersGroup = ['iOS', 'NodeJS', 'Angular', 'Laravel', 'MongoDB', 'C++']

    this.state = {
      projects: this.projects.slice(0),
      skills: this.skills.slice(0),
      selectedProject: undefined,
    }

    this.addSkillFromQS()
    this.clearFilters = this.clearFilters.bind(this)
  }

  componentDidMount() {
    this.filterFromQS()
  }

  componentDidUpdate() {
    this.addSkillFromQS()
    this.filterFromQS(true)
  }

  getSkillGrouped() {
    const { skills } = this.state
    const grouped = skills.slice(0)
    const groups = [{ group: [], id: -1 }]

    for (let i = 0; i < grouped.length; i += 1) {
      groups[groups.length - 1].group.push(grouped[i])
      if (this.filtersGroup.indexOf(grouped[i].name) !== -1) {
        groups.push({ group: [], id: groups.length })
      }
    }

    return groups
  }

  filterProjects(skill, needToUpdateUrl = false) {
    const { router } = this.props
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
    // ?${this.filters.map((f) => `skill=${encodeURIComponent(f)}`).join('&')}
    if (needToUpdateUrl) {
      router.replace({ pathname: '/work', query: { skill: this.filters } }, undefined, { shallow: true })
    }
    this.setState({
      projects: filtered,
    })
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

  hasSkills(toFind) {
    for (let i = 0; i < toFind.length; i += 1) {
      if (this.filters.indexOf(toFind[i]) === -1) {
        return false
      }
    }
    return true
  }

  addSkillFromQS() {
    const { skills } = this.state
    const paramSkills = Location.qs().skill ? ProjectListPage.skillToArray(Location.qs().skill) : []
    const newSkills = skills.slice(0)

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

  goToProject(project, e) {
    const { router } = this.props

    e.preventDefault()
    this.setState({
      selectedProject: project,
    }, () => {
      setTimeout(() => {
        // eslint-disable-next-line
        window._projectListToProjectTrasition = true
        router.push(`/work/${project.name}`)
      }, 500)
    })
  }

  clearFilters(e) {
    const { router } = this.props

    e.preventDefault()
    router.replace('work', undefined, { shallow: true })
    setTimeout(() => {
      this.filters = []
      this.filterProjects(undefined)
    })
  }

  render() {
    const { projects, selectedProject } = this.state
    const fakeProjects = new Array(10).map((v, idx) => ({
      ...this.projects[0],
      name: `fake|${idx}`,
    }))

    return (
      <BasicPage>
        <div>
          <ProjectBackground />

          <ProjectTitle noMargin>Mes projets</ProjectTitle>
          <ProjectRow>
            <Container className="bp-large">
              <FilterText
                type="submit"
                hasPointer={this.filters.length > 0}
                onClick={this.clearFilters}
              >
                <SubTitle>
                  <ClearFilterButton isVisible={this.filters.length > 0}>(X)</ClearFilterButton>
                  FILTRES
                </SubTitle>
              </FilterText>
              {this.getSkillGrouped().map((group) => (
                <FilterRow key={group.id}>
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
                </FilterRow>
              ))}
            </Container>

            <ListContainer center>
              {projects.map((project) => (
                <ProjectButton type="submit" onClick={(e) => this.goToProject(project, e)} key={project.name}>
                  <Item>
                    <Project
                      backgroundColor={project.backgroundColor}
                      backgroundImage={project.backgroundImage}
                      name={project.name}
                      logo={project.logo}
                    />
                  </Item>
                </ProjectButton>
              ))}
              {projects.length === 0 && (
                <NoProjectText>
                  <EmojiContainer role="img" aria-label="No project">😥</EmojiContainer>
                  <sub>Aucun projet</sub>
                </NoProjectText>
              )}
              {fakeProjects.map((project) => (
                <FakeItem key={project.name}>
                  <Project
                    backgroundColor={project.backgroundColor}
                    backgroundImage={project.backgroundImage}
                    name={project.name}
                    logo={project.logo}
                  />
                </FakeItem>
              ))}
            </ListContainer>
          </ProjectRow>
          <ProjectOverlay
            inTransition
            isVisible={!!selectedProject}
            backgroundColor={
              selectedProject ? selectedProject.backgroundColor : undefined
            }
            logo={selectedProject ? selectedProject.logo : undefined}
          />
        </div>
      </BasicPage>
    )
  }
}

export default withRouter(ProjectListPage)
