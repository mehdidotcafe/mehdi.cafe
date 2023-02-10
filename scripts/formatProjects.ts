/* eslint-disable no-console */
const getArgOrDefault = (name: string, defaultValue: string) => {
  const argFromCi = process.argv.find((arg) => arg.startsWith(`--${name}=`))

  if (!argFromCi) {
    return defaultValue
  }
  return argFromCi.split('=')[1]
}

const lang = getArgOrDefault('lang', 'fr')
const withSkills = parseInt(getArgOrDefault('withSkills', '1'), 10)
const projectName = getArgOrDefault('project', '')
const separator = getArgOrDefault('separator', '⚡')

import(`../src/section/project/projects.${lang}.ts`).then((res) => {
  const projects = res.default
  for (let i = 0; i < projects.length; i += 1) {
    if (projects[i].name.toLowerCase().includes(projectName)) {
      console.log(projects[i].description_mission.map((d: string) => `${separator}${d}`).join('\n').replace(/<[^>]*>?/gm, ''))
      if (withSkills) {
        console.log('\n')
        console.log(projects[i].skills.map((s: string) => `- ${s}`).join('\n'))
      }
      console.log('\n')
    }
  }
})

export default {}
/* eslint-enable no-console */
