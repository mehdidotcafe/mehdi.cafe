import skills from '../data/skills.json'

class SkillService {
  static get() {
    return skills.filter((skill) => skill.isVisible !== false)
  }

  static getFilterable() {
    return skills.filter((skill) => skill.isFilterable !== false && skill.isVisible !== false)
  }

  static getFromName(name) {
    return skills.find((skill) => skill.name === name)
  }
}

export default SkillService
