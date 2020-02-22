import recommendations from '../data/recommendations.json'

class ProjectService {
  static get() {
    return recommendations
  }

  static getFromId(id) {
    return recommendations.find((r) => r.id === id)
  }
}

export default ProjectService
