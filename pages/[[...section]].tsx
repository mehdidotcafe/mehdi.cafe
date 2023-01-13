import { sections } from '@Location'
import { useRouter } from 'next/router'
import Sections from 'pages/Sections'

export async function generateStaticParams() {
  return sections.map((link) => ({
    section: [link.link],
  }))
}

const SectionsPage = () => {
  const router = useRouter()
  const section = sections.find((s) => s.link === router.query.section?.[0])?.link

  return (
    <Sections section={section} />
  )
}

export default SectionsPage
