import { useRouter } from 'next/router'
import styled from 'styled-components'

import Item from '@grid/Item'
import Row from '@grid/Row'
import BasicSection from '@section/BasicSection'
import useProjects from '@section/project/useProjects'
import { Skill } from '@section/skill/Skill'
import { useAllSkills, useFilterableSkills } from '@section/skill/useSkills'
import EmptyTile from '@tile/EmptyTile'
import ProjectTile from '@tile/ProjectTile'
import SkillTile from '@tile/SkillTile'
import useTranslations from '@translation/useTranslations'
import { subTitleStyle } from '@typography/SubTitle'
import Title from '@typography/Title'

import type { MouseEvent } from 'react'
import type { Project } from '@section/project/Project'

const QUERY_PARAM_NAME = 'skill'

// @todo see how to remove this array
const filtersGroup = ['iOS', 'NodeJS', 'Angular', 'Laravel', 'MongoDB', 'C++', 'mySQL', 'AWS']

const Section = () => {
  const t = useTranslations()
  const { projects, selectedSkills, skills } = useProjectsAndSkills()
  const router = useRouter()

  const clearFilters = (e: MouseEvent) => {
    e.preventDefault()
    router.replace('work')
  }

  const redirectToProject = (project: Project) => (e: MouseEvent) => {
    e.preventDefault()
    router.push(`/work/${project.name}`)
  }

  const onSkillSelected = (skill: Skill) => (e: MouseEvent) => {
    e.preventDefault()

    const nextSelectedSkills = updateSelectedSkills(skill, selectedSkills)
    router.replace(`/work?${
      new URLSearchParams(nextSelectedSkills.map(
        (selectedSkill) => [QUERY_PARAM_NAME, selectedSkill],
      ))
    }`)
  }

  return (
    <BasicSection>
      <Title $noMargin>{t.work.myProjects}</Title>
      <ProjectRow>
        <FiltersContainer>
          <FilterText
            type="submit"
            $hasPointerCursor={selectedSkills.length > 0}
            onClick={clearFilters}
          >
            <ClearFilterButton $isVisible={selectedSkills.length > 0}>
              {t.work.clearCross}
            </ClearFilterButton>
            {t.work.filters}
          </FilterText>
          {getSkillGrouped(skills).map((group) => (
            <FilterRow key={group.id}>
              {group.group.map((skill) => (
                <Item key={skill.name} onClick={onSkillSelected(skill)}>
                  <SkillTile
                    name={skill.name}
                    backgroundColor={skill.color}
                    logo={skill.logo}
                    experience={skill.experience}
                    isSelected={selectedSkills.indexOf(skill.name) !== -1}
                    isLittle
                  />
                </Item>
              ))}
            </FilterRow>
          ))}
        </FiltersContainer>
        <ListContainer $isCenter>
          {projects.map((project) => (
            <ProjectButton type="submit" key={project.name} onClick={redirectToProject(project)}>
              <Item>
                <ProjectTile
                  backgroundColor={project.color}
                  name={project.name}
                  logo={project.logo}
                />
              </Item>
            </ProjectButton>
          ))}
          {projects.length === 0 && (
            <EmptyTile text={t.work.noProject} />
          )}
        </ListContainer>
      </ProjectRow>
    </BasicSection>
  )
}

const projectBySkillsPredicate = (filterSkills: Skill['name'][]) => (project: Project) => {
  // If no skill is selected, show all projects
  if (filterSkills.length === 0) {
    return true
  }

  // Project should match ALL selected skills
  return filterSkills.every((skill) => project.skills.indexOf(skill) !== -1)
}

// Removes unsupported skills from the serach params
const convertSearchParamToSkills = (
  allSkills: Skill[],
  querySkills: string | string[] | undefined,
) => {
  let skills: string[] = []

  if (querySkills && !Array.isArray(querySkills)) {
    skills = [querySkills]
  } else if (querySkills && Array.isArray(querySkills)) {
    skills = querySkills
  }

  return skills.filter((skill) => allSkills.findIndex((s) => s.name === skill) !== -1)
}

const useProjectsAndSkills = () => {
  const router = useRouter()
  const projects = useProjects()
  const allSkills = useAllSkills()
  const skills = useFilterableSkills()
  const selectedSkills: Skill['name'][] = convertSearchParamToSkills(allSkills, router.query.skill)

  return {
    projects: projects.filter(projectBySkillsPredicate(selectedSkills)),
    // Merge hidden by default eventually selected skills and visible skills
    skills: Array.from(
      new Set([
        ...skills,
        ...selectedSkills
          .map((skill) => allSkills.find((s) => s.name === skill))
          .filter((s) => s) as Skill[],
      ]),
    ),
    selectedSkills,
  }
}

const getSkillGrouped = (skills: Skill[]) => {
  const grouped = skills.slice(0)
  const groups: {
    group: Skill[]
    id: number
  }[] = [{ group: [], id: -1 }]

  for (let i = 0; i < grouped.length; i += 1) {
    groups[groups.length - 1].group.push(grouped[i])
    if (filtersGroup.indexOf(grouped[i].name) !== -1) {
      groups.push({ group: [], id: groups.length })
    }
  }

  return groups
}

const updateSelectedSkills = (skill: Skill, filters: Skill['name'][]) => {
  const newFilters = filters.slice(0)
  let idx
  const skills = [skill]

  for (let k = 0; k < skills.length; k += 1) {
    idx = newFilters.indexOf(skills[k].name)
    if (skills[k] && idx === -1) {
      newFilters.push(skills[k].name)
    } else if (skills[k]) {
      newFilters.splice(idx, 1)
    }
  }

  return newFilters
}

const FiltersContainer = styled(Row)`
  width: 25%;
  max-width: 25%;
  padding-right: 2.5%;
  overflow-x: auto;
  border-right: 3px solid black;
  box-sizing: border-box;
  padding-bottom: 32px;

  ${(props) => props.theme.isPhone} {
    display: none;
  }
`

const FilterText = styled.button<{
  $hasPointerCursor: boolean
}>`
  margin-right: 8px;
  margin-bottom: 16px;
  width: 100%;
  text-align: right;
  cursor: ${(props) => (props.$hasPointerCursor ? 'pointer' : 'normal')}

  ${(props) => props.theme.isPhone} {
    text-align: left;
  }

 ${subTitleStyle}
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

const ClearFilterButton = styled.span<{
  $isVisible: boolean
}>`
visibility: ${(props) => (props.$isVisible ? 'visible' : 'hidden')}
`

const ProjectRow = styled(Row)`
margin-top: 16px;
align-items: center;
`

export default Section
