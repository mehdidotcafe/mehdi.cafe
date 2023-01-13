import projects from '@section/project/projects'

const visibleProjects = projects.filter((project) => project.isVisible !== false)

export default () => visibleProjects

export const useProjectByName = (name: string) => visibleProjects
  .find((project) => project.name === name)
