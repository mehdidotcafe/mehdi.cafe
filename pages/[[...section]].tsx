import { useRouter } from 'next/router'

import { sections } from '@Location'
import Sections from 'pages/Sections'

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          section: false,
        },
      },
      ...sections.map((section) => ({
        params: {
          section: [section.link],
        },
      })),
    ],
    fallback: false,
  }
}

export async function getStaticProps() {
  return {
    props: {},
  }
}

const SectionsPage = () => {
  const router = useRouter()
  const section = sections.find((s) => s.link === router.query.section?.[0])?.link

  return (
    <Sections section={section} />
  )
}

export default SectionsPage
