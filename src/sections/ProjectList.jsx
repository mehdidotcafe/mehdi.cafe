import React, { Component } from 'react'
import styled from 'styled-components'

import { withRouter } from 'next/router'

import Location from '../Location'

import Title from '../component/title/Title'
import SubTitle from '../component/sub-title/SubTitle'
import Project from '../component/project/Project'
import Skill from '../component/skill/Skill'

import Row from '../layout/row/Row'
import Item from '../layout/item/Item'

import BasicPage from './BasicPage'

import SkillService from '../services/Skill'

const Container = styled(Row)`
  width: 25%;
  max-width: 25%;
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

const ProjectTitle = styled(Title)`
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

    this.filtersGroup = ['iOS', 'NodeJS', 'Angular', 'Laravel', 'MongoDB', 'C++', 'mySQL']

    this.state = {
      projects: this.projects.slice(0),
      skills: this.skills.slice(0),
    }

    this.addSkillFromQS()
    this.clearFilters = this.clearFilters.bind(this)
  }

  componentDidMount() {
    this.filters = ProjectListPage.getFiltersFromQS()

    this.updateProjects()
  }

  componentDidUpdate() {
    const oldFilters = this.filters.slice(0)
    this.filters = ProjectListPage.getFiltersFromQS()

    this.addSkillFromQS()
    if (oldFilters.join('') !== this.filters.join('')) {
      this.updateProjects()
    }
  }

  onSkillSelect(skill) {
    const newFilters = this.updateFilters(skill)

    this.updateQS(newFilters)
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

  static getFiltersFromQS() {
    return ProjectListPage.fmtSkills(Location.qs().skill)
  }

  updateQS(newFilters) {
    const { router } = this.props

    router.replace({ pathname: '/work', query: { skill: newFilters } }, undefined, { shallow: true })
  }

  updateFilters(skill) {
    const newFilters = this.filters.slice(0)
    let idx
    const skills = [skill]

    for (let k = 0; k < skills.length; k += 1) {
      idx = newFilters.indexOf(skills[k])
      if (skills[k] && idx === -1) {
        newFilters.push(skills[k])
      } else if (skills[k]) {
        newFilters.splice(idx, 1)
      }
    }

    return newFilters
  }

  updateProjects() {
    const filteredProjets = []
    let isMatching

    for (let i = 0; i < this.projects.length; i += 1) {
      isMatching = true
      if (this.filters.length > 0) {
        for (let j = 0; j < this.filters.length; j += 1) {
          if (this.projects[i].languages.indexOf(this.filters[j]) === -1) {
            isMatching = false
            break
          }
        }
      }
      if (isMatching) {
        filteredProjets.push(this.projects[i])
      }
    }

    this.setState({
      projects: filteredProjets,
    })
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
    router.push(`/work/${project.name}`)
  }

  clearFilters(e) {
    const { router } = this.props

    e.preventDefault()
    router.replace('work', undefined, { shallow: true })
  }

  render() {
    const { projects } = this.state

    return (
      <BasicPage>
        <div>
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
                    <Item key={skill.name} onClick={() => this.onSkillSelect(skill.name)}>
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
            </ListContainer>
          </ProjectRow>
        </div>
      </BasicPage>
    )
  }
}

export default withRouter(ProjectListPage)
