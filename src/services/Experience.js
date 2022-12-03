import experiences from '../data/experiences.json'

class ExperienceService {
  static get() {
    return experiences.filter((experience) => experience.isVisible !== false)
  }
}

export default ExperienceService
