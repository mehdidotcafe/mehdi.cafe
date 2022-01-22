import Description from '../src/services/Description'
import Location from '../src/Location'
import Experience from '../src/services/Experience'
import Project from '../src/services/Project'
import Skill from '../src/services/Skill'

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          section: false,
        },
      },
      ...Location.links.map((link) => ({
        params: {
          section: [link.link],
        },
      })),
    ],
    fallback: false,
  }
}

export async function getStaticProps() {
  return {
    props: {
      experiences: Experience.get(),
      projects: Project.get(),
      filterableSkills: Skill.getFilterable(),
      skills: Skill.get(),
      descriptions: Description.get(),
    },
  }
}

// eslint-disable-next-line
export { default } from '../src/sections/MainScrollPage'
