import AsideScroller from '@AsideScroller'
import Item from '@grid/Item'
import Row from '@grid/Row'
import ScrollableRow from '@grid/ScrollableRow'
import BasicSection from '@section/BasicSection'
import { Project } from '@section/project/Project'
import useProjects, { useProjectByName } from '@section/project/useProjects'
import { Skill } from '@section/skill/Skill'
import { useAllSkills } from '@section/skill/useSkills'
import ProjectTile from '@tile/ProjectTile'
import SkillTile from '@tile/SkillTile'
import useTranslations from '@translation/useTranslations'
import Description, { Paragraph } from '@typography/Description'
import { ExternalLink, Link } from '@typography/Link'
import Title from '@typography/Title'
import Zoomable from '@Zoomable'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { MouseEvent, useEffect, useState } from 'react'
import styled from 'styled-components'

export async function getStaticPaths() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const projects = useProjects()

  return {
    paths: projects.map((project) => ({
      params: {
        name: project.name,
      },
    })),
    fallback: false,
  }
}

type StaticProps = {
  params: {
    name: string
  }
}

export async function getStaticProps({ params }: StaticProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const projects = useProjects()

  return {
    props: {
      project: projects.find((project) => project.name === params.name),
    },
  }
}

const WorkPage = () => {
  const t = useTranslations()
  const router = useRouter()
  const {
    project,
    skills,
  } = useProjectWithSkillsByName(router.query.name as string)

  const backToWork = (e: MouseEvent) => {
    e.preventDefault()
    router.push('/work')
  }

  useEffect(() => {
    if (!project || !skills) {
      router.replace('/')
    }
  }, [router, project, skills])

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <StyledBasicSection noMargin>
        <Background />
        {project
          && skills && (
            <InfoContainer>
              <DescriptionContainer>
                <Header>
                  <ProjectBack>
                    <ProjectTile
                      backgroundColor={project.color}
                      name={project.name}
                      logo={project.logo}
                      isHoverable={false}
                      fullSize
                    />
                    <BackButton type="submit" onClick={backToWork}>
                      <div>&#8249;</div>
                    </BackButton>
                  </ProjectBack>
                  <TitleContainer>
                    <Title noMargin>{project.name}</Title>
                    {project.url
                      && (
                        <StyledExternalLink
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t.projectPage.seeProject}
                        </StyledExternalLink>
                      )}
                    <StyledScrollableRow step={164 / 2.5}>
                      {skills.map((skill) => (
                        <Item key={skill.name}>
                          <Link href={`/work?skill=${encodeURIComponent(skill.name)}`} isStyled={false}>
                            <SkillTile
                              name={skill.name}
                              backgroundColor={skill.color}
                              experience={skill.experience}
                              logo={skill.logo}
                              isLittle
                            />
                          </Link>
                        </Item>
                      ))}
                    </StyledScrollableRow>
                  </TitleContainer>
                </Header>
                <MobileScrollerContainer>
                  <AsideScroller>
                    {project.images.map((image) => (
                      <img
                        src={`/images/project/${image}`}
                        key={image}
                        style={{ backgroundColor: project.color, height: '100%', width: '100%' }}
                        alt={`${project.name} ${image}`}
                      />
                    ))}
                  </AsideScroller>
                </MobileScrollerContainer>
                <ProjectDescriptionTabs project={project} />
              </DescriptionContainer>
              <LaptopScrollerContainer>
                <AsideScroller>
                  {project.images.map((image) => (
                    <Zoomable key={image}>
                      <img
                        src={`/images/project/${image}`}
                        alt={`${project.name} ${image}`}
                        style={{ backgroundColor: project.color, height: '100%', width: '100%' }}
                      />
                    </Zoomable>
                  ))}
                </AsideScroller>
              </LaptopScrollerContainer>
            </InfoContainer>
        )}
      </StyledBasicSection>
    </>
  )
}

type ProjectDescriptionTabsProps = {
  project: Project
}

const ProjectDescriptionTabs = ({
  project,
}: ProjectDescriptionTabsProps) => {
  const t = useTranslations()
  const [activeTab, setActiveTab] = useState<number>(0)
  const tabs = [
    {
      test: project.description_project || '',
      name: t.projectPage.tabs.work,
      content: project.description_project || '',
    },
    {
      test: project.description_mission,
      name: t.projectPage.tabs.keyWork,
      content: Array.isArray(project.description_mission) ? project.description_mission.map((description) => `<div>${description}</div>`).join('') : project.description_mission ?? '',
    },
    {
      test: project.start,
      name: t.projectPage.tabs.duration,
      content: `${displayDate(t.lang, project.start)} - ${displayDate(t.lang, project.end) ?? t.projectPage.tabs.current}`,
    },
  ].filter((tab) => tab.test)

  return (
    <ProjectDescriptionContainer>
      <ProjectDescriptionSwitch>
        {
          tabs.map((tab, idx) => (
            <ProjectDescriptionTab
              key={tab.name}
              isActive={activeTab === idx}
              onClick={() => setActiveTab(idx)}
            >
              {tab.name}
            </ProjectDescriptionTab>
          ))
        }
      </ProjectDescriptionSwitch>
      <DescriptionContent>
        {tabs.map((tab, idx) => idx === activeTab && (
          <Description
            text={tab.content}
            key={tab.name}
            noMargin
          />
        ))}
      </DescriptionContent>
    </ProjectDescriptionContainer>
  )
}

const useProjectWithSkillsByName = (name: string) => {
  const project = useProjectByName(name)
  const skills = useAllSkills()

  return {
    project,
    skills: project?.skills.reduce((acc, skill) => {
      const skillData = skills.find((s) => s.name === skill)
      if (skillData) {
        acc.push(skillData)
      }
      return acc
    }, [] as Skill[]),
  }
}

const displayDate = (locale: string, dateStr?: string) => dateStr && new Date(dateStr)
  .toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    weekday: undefined,
    day: undefined,
  })

const BackButton = styled.button`
position: absolute;
width: 64px !important;
height: 64px !important;
font-size: 64px !important;
line-height: 48px;
bottom: -12px;
left: -12px;
background: ${(props) => props.theme.secondaryColor} !important;
box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
color: white;
text-align: center;
cursor: pointer;

:hover {
  background-color: ${(props) => props.theme.tertiaryColor} !important;
}

div {
  height: 100%;
  width: 100%;
}
`

const InfoContainer = styled.div`
margin-left: 4%;
margin-right: 4%;

${(props) => props.theme.isPhone} {
  flex-direction: column;
}
`

const DescriptionContainer = styled.div`
width: 50%;
position: fixed;
top: 64px;
margin-top: 32px;
display: flex;
flex-direction: column;

${(props) => props.theme.isPhone} {
  position: relative;
  top: 0;
  width: 100%;
  margin-right: 0;
}
`

const ScrollerContainer = styled.aside`
margin-left: 60%;
width: 40%;
display: inline-block;

${(props) => props.theme.isPhone} {
  width: 100%;
  margin-left: 0;
  padding-top: 0;
  margin-top: 0;
}
`

const StyledScrollableRow = styled(ScrollableRow)`
margin-left: -8px;
max-width: 35vw;
overflow: hidden;
padding-top: 16px;

${(props) => props.theme.isPhone} {
  max-width: 100vw;
  margin-left: -4%;
  margin-right: -4%;
}
`

const MobileScrollerContainer = styled(ScrollerContainer)`
${(props) => props.theme.isLaptop} {
  display: none;
}
`

const LaptopScrollerContainer = styled(ScrollerContainer)`
${(props) => props.theme.isPhone} {
  display: none;
}
`

const Background = styled.div`
position: fixed;
top: -150vh;
height: 400vh;
right: -250vh;
background-image: linear-gradient(to left bottom, ${(props) => props.theme.gradiantColors.join(',')});
width: 300vh;
transform: rotate(-35deg) translateZ(0);
z-index: -1;
}
`

const TitleContainer = styled.div`
display: inline-block;
margin-left: 48px;

${(props) => props.theme.isPhone} {
  margin-top: 32px;
  margin-left: 0;
  align-self: flex-start;
}
`

const StyledExternalLink = styled(ExternalLink)`
font-size: 1em;
`

const ProjectDescriptionSwitch = styled.ul`
width: 100%;
display: flex;
flex-direction: row;
padding-bottom: 8px;
align-items: center;
list-style-type: none;
margin-block-start: 0;
margin-block-end: 0;
padding-inline-start: 0;
`

const ProjectDescriptionTab = styled.li<{
  isActive: boolean
}>`
  font-family: var(${(props) => props.theme.font.title});
  font-size: 26px !important;
  margin-top: 16px;
  margin-right: 24px;
  padding: 0.1em 0.15em;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? props.theme.mainColor : props.theme.secondaryColor)};
  color: ${(props) => props.theme.light.linkColor};

  :hover {
    background-color: ${(props) => props.theme.mainColor};
  }  
`

const ProjectDescriptionContainer = styled.div`
margin-top: 32px;
`

const Header = styled(Row)`
align-items: center;
flex-wrap: nowrap;
margin-bottom: 0px;
margin-top: 32px;

${(props) => props.theme.isPhone} {
  flex-direction: column;
  margin: 0;

}
`

const StyledBasicSection = styled(BasicSection)`
margin-top: -64px;

.slick-arrow {
  display: none !important;
}
`

const ProjectBack = styled.div`
display: inline-block;
position: relative;
`

const DescriptionContent = styled.div`
margin-bottom: 16px;
overflow: auto;
flex-grow: 1;

${Paragraph} div::before {
  content: "";
  display: inline-block;
  height: 12px;
  width: 12px;
  background-color: ${(props) => props.theme.mainColor};
  margin-right: 8px;
}

a {
  font-family: var(${(props) => props.theme.tertiaryColor});
  text-decoration: none;
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.light.linkColor};
  padding: 0.01em 0.05em;
  font-weight: 500;
  
  :hover {
    background-color: ${(props) => props.theme.tertiaryColor};
  }
}

${(props) => props.theme.isLaptop} {
  height: calc(100vh - 96px);
}
`

export default WorkPage
