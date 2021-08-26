// eslint-disable-next-line
import Project from '../../src/services/Project'
// eslint-disable-next-line

export async function getStaticPaths() {
  return {
    paths: Project.get().map((project) => ({
      params: {
        name: project.name,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      project: Project.getFromName(params.name),
    },
  }
}

// eslint-disable-next-line
export { default } from '../../src/sections/Project'
