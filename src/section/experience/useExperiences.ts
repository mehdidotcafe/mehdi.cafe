import experiences from '@section/experience/experiences'

const visibleExperiences = experiences.filter((experience) => experience.isVisible !== false)

export default () => visibleExperiences
