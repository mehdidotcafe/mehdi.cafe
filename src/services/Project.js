import projects from '../data/projects.json'

class ProjectService {
  static getFromName(name) {
    return projects.find(project => project.name === name)
  }
}

export default ProjectService
