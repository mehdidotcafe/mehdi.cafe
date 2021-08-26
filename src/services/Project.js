import projects from '../data/projects.json'

class ProjectService {
  static getFromName(name) {
    return projects.find((project) => project.name === name)
  }

  static get() {
    return projects.filter((p) => p.isVisible !== false)
  }
}

export default ProjectService
