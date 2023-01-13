import { useEffect, useRef } from 'react'
import ReactFullpage, { Item, fullpageApi as FullPageApi } from '@fullpage/react-fullpage'
import { useRouter } from 'next/router'

import { REACTFULLPAGE_LICENSE_KEY } from '@env'

import DescriptionSection from '@section/description/Section'
import DescriptionBackground from '@section/description/Background'

import SkillSection from '@section/skill/Section'
import SkillBackground from '@section/skill/Background'

import ProjectSection from '@section/project/Section'
import ProjectBackground from '@section/project/Background'

import ExperienceSection from '@section/experience/Section'

import Footer from '@Footer'
import { sections } from '@Location'

type Props = {
  section: string | undefined
}

const Sections = ({
  section,
}: Props) => {
  const defaultIndex = section ? sections.findIndex((s) => s.link === section) : undefined
  const router = useRouter()

  const onScroll = (prevSection: Item, nextSection: Item) => {
    const nextSectionHref = nextSection.item.getAttribute('data-href')

    if (nextSectionHref && nextSectionHref !== section) {
      router.push(`/${nextSectionHref}`, undefined, { shallow: true })
    }
  }

  return (
    <ReactFullpage
      licenseKey={REACTFULLPAGE_LICENSE_KEY}
      onLeave={onScroll}
      render={({ fullpageApi }) => (
        <NestedSections fullpageApi={fullpageApi} defaultIndex={defaultIndex} />
      )}
    />
  )
}

const NestedSections = ({
  fullpageApi,
  defaultIndex,
}: {
  fullpageApi: FullPageApi
  defaultIndex: number | undefined
}) => {
  const oldDefaultIndex = useRef<number | undefined>(undefined)

  useEffect(() => {
    if (fullpageApi && defaultIndex !== undefined) {
      fullpageApi[oldDefaultIndex.current === undefined ? 'silentMoveTo' : 'moveTo'](defaultIndex + 1, undefined as unknown as number)
      oldDefaultIndex.current = defaultIndex
    }
  }, [fullpageApi, defaultIndex])

  return (
    <ReactFullpage.Wrapper>
      <div className="section" data-href="home">
        <DescriptionSection />
      </div>
      <DescriptionBackground />
      <div className="section" data-href="work">
        <ProjectSection />
      </div>
      <ProjectBackground />
      <div className="section" data-href="skills">
        <SkillSection />
      </div>
      <SkillBackground />
      <div className="section" data-href="experiences">
        <ExperienceSection />
        <Footer />
      </div>
    </ReactFullpage.Wrapper>
  )
}

export default Sections
