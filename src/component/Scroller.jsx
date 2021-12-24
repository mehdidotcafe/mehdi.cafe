import React, { useEffect } from 'react'
import ReactFullpage from '@fullpage/react-fullpage'

import styled from 'styled-components'

import LandingPage from '../sections/Landing'
import ProjectListPage from '../sections/ProjectList'
import SkillListPage from '../sections/SkillList'
import ExperiencePage from '../sections/Experience'

import Footer from './footer/Footer'

const Section = styled.div`
  z-index: 2;
`

const LandingBackground = styled.div`
  position: absolute;
  top: -50vh;
  height: 200vh;
  left: -130vh;
  background-image: linear-gradient(to right bottom, ${(props) => props.theme.gradiantColors});
  width: 250vh;
  transform: rotate(-35deg);
`

const SkillBackground = styled.div`
  position: absolute;
  height: 100vh;
  left: -35vh;
  top: 270vh;
  background-image: linear-gradient(to right, ${(props) => props.theme.gradiantColors});
  width: 100vh;
  -webkit-transform: rotate(-35deg);
  transform: rotate(-35deg);
  z-index: -1;
`

const ProjectBackground = styled.div`
  position: absolute;
  bottom: -130vh;
  height: 100%;
  right: -160vh;
  background-image: linear-gradient(to left top, ${(props) => props.theme.gradiantColors});
  width: 100vh;
  -webkit-transform: rotate(-35deg);
  transform: rotate(-35deg);
  z-index: -1;
`

export const Scroller = ({
  defaultIndex = 0,
  fullpageApi,
  projects,
  filterableSkills,
  skills,
  experiences,
  descriptions,
}) => {
  const [index, setIndex] = React.useState({
    old: undefined,
    current: undefined,
  })

  useEffect(() => {
    if (fullpageApi) {
      setIndex({
        old: index.current,
        current: defaultIndex + 1,
      })
    }
  }, [fullpageApi, defaultIndex])

  useEffect(() => {
    if (fullpageApi) {
      fullpageApi[index.old === undefined ? 'silentMoveTo' : 'moveTo'](index.current)
    }
  }, [index])

  return (
    <ReactFullpage.Wrapper>
      <Section id="scroll-home-container" className="section">
        <LandingPage descriptions={descriptions} />
      </Section>
      <LandingBackground />
      <Section id="scroll-work-container" className="section">
        <ProjectListPage projects={projects} filterableSkills={filterableSkills} />
      </Section>
      <ProjectBackground />
      <Section id="scroll-skills-container" className="section">
        <SkillListPage skills={skills} />
      </Section>
      <SkillBackground />
      <Section id="scroll-experiences-container" className="section">
        <div>
          <ExperiencePage experiences={experiences} />
          <Footer />
        </div>
      </Section>
    </ReactFullpage.Wrapper>
  )
}

export default Scroller
