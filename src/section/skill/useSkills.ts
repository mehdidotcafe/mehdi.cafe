import skills from '@section/skill/skills'

const visibleSkills = skills.filter((skill) => skill.isVisible !== false)

export default () => visibleSkills

const filterableSkills = visibleSkills.filter((skill) => skill.isFilterable !== false)

export const useFilterableSkills = () => filterableSkills

export const useAllSkills = () => skills
