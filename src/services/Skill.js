import skills from '../data/skills.json'

class SkillService {
  static get() {
    return skills
  }

  static getShowable() {
    return skills.filter(skill => skill.isShowable !== false)
  }

  static getFilterable() {
    return skills.filter(skill => skill.isFilterable !== false)
  }

  static getFromName(name) {
    return skills.find(skill => skill.name === name)
  }
}

export default SkillService
