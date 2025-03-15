import Head from 'next/head'
import { useRouter } from 'next/router'
import { MouseEvent, useEffect, useState } from 'react'
import styled from 'styled-components'

import AsideScroller from '@AsideScroller'
import Item from '@grid/Item'
import Row from '@grid/Row'
import BasicSection from '@section/BasicSection'
import { Project } from '@section/project/Project'
import useProjects, { useProjectByName } from '@section/project/useProjects'
import { Skill } from '@section/skill/Skill'
import { useAllSkills } from '@section/skill/useSkills'
import ProjectTile from '@tile/ProjectTile'
import SkillTile from '@tile/SkillTile'
import useTranslations from '@translation/useTranslations'
import Description, { Paragraph } from '@typography/Description'
import { ExternalLink } from '@typography/Link'
import { subTitleStyle } from '@typography/SubTitle'
import Title from '@typography/Title'
import Zoomable from '@Zoomable'

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
              <DescriptionContainer $isWide={project.images.length === 0}>
                <Header>
                  <ProjectBack>
                    <ProjectTile
                      backgroundColor={project.color}
                      name={project.name}
                      logo={project.logo}
                      logoType={project.logoType}
                      isHoverable={false}
                      fullSize
                    />
                    <BackButton type="submit" onClick={backToWork}>
                      <div>&#8249;</div>
                    </BackButton>
                  </ProjectBack>
                  <TitleContainer>
                    <Title $noMargin>{project.name}</Title>
                    {project.url
                      && (
                        <LinkContainer>
                          <ExternalLink
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {t.projectPage.seeProject}
                          </ExternalLink>
                        </LinkContainer>
                      )}
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
                <ProjectDescriptionTabs project={project} skills={skills} />
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

const DescriptionMission = ({
  text = '',
}: {
  text: string | string[] | undefined
}) => (Array.isArray(text)
  ? (
    <DescriptionMissionContainer>
      {text.map((t) => (
        <Description
          key={t || ''}
          text={t || ''}
          noMargin
        />
      ))}
    </DescriptionMissionContainer>
  )
  : (
    <div>{text}</div>
  ))

const DescriptionSkills = ({
  skills,
}: {
  skills: Skill[]
}) => {
  const t = useTranslations()
  const groupedSkills = skills.reduce((acc, skill) => {
    if (skill.kind !== 'other') {
      acc[skill.kind].push(skill)
    }
    return acc
  }, {
    language: [] as Skill[],
    framework: [] as Skill[],
    tool: [] as Skill[],
    database: [] as Skill[],
  } as Record<Exclude<Skill['kind'], 'other'>, Skill[]>)

  return (
    <>
      {(Object.keys(groupedSkills) as (keyof typeof groupedSkills)[])
        .map((key) => (groupedSkills[key].length > 0
          ? (
            <span key={key}>
              <SkillRowTitle>{t.skillKind[key]}</SkillRowTitle>
              <SkillRow>
                {groupedSkills[key].map((skill) => (
                  <Item key={skill.name}>
                    <SkillTile
                      isLittle
                      logo={skill.logo}
                      logoType={skill.logoType}
                      name={skill.name}
                      backgroundColor={skill.color}
                      experience={skill.experience}
                    />
                  </Item>
                ))}
              </SkillRow>
            </span>
          ) : null
        ))}
    </>
  )
}

type ProjectDescriptionTabsProps = {
  project: Project
  skills: Skill[]
}

const ProjectDescriptionTabs = ({
  project,
  skills,
}: ProjectDescriptionTabsProps) => {
  const t = useTranslations()
  const [activeTab, setActiveTab] = useState<number>(0)
  const tabs = [
    {
      key: 'work',
      test: project.description_project || '',
      name: t.projectPage.tabs.work,
      Content: <Description
        text={project.description_project || ''}
        noMargin
      />,
    },
    {
      key: 'mission',
      test: project.description_mission,
      name: t.projectPage.tabs.keyWork,
      Content: <DescriptionMission
        text={project.description_mission}
      />,

    },
    {
      key: 'duration',
      test: project.start,
      name: t.projectPage.tabs.duration,
      Content: <Description
        text={`${displayDate(t.lang, project.start)} - ${displayDate(t.lang, project.end) ?? t.projectPage.tabs.current}`}
      />,
    },
    {
      key: 'skills',
      test: true,
      name: t.projectPage.tabs.skills,
      Content: <DescriptionSkills skills={skills} />,
    },
  ].filter((tab) => tab.test)

  return (
    <ProjectDescriptionContainer>
      <ProjectDescriptionSwitch>
        {
          tabs.map((tab, idx) => (
            <ProjectDescriptionTab
              key={tab.key}
              $isActive={activeTab === idx}
              onClick={() => setActiveTab(idx)}
            >
              {tab.name}
            </ProjectDescriptionTab>
          ))
        }
      </ProjectDescriptionSwitch>
      <DescriptionContent>
        {tabs.map((tab, idx) => idx === activeTab && <span key={tab.key}>{tab.Content}</span>)}
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
          background - color: ${(props) => props.theme.tertiaryColor} !important;
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
          flex - direction: column;
}
        `

const DescriptionContainer = styled.div<{
  $isWide?: boolean
}>`
        width: ${(props) => (props.$isWide === true ? '80' : '50')}%;
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
        margin-left: 32px;

        ${(props) => props.theme.isPhone} {
          margin - top: 32px;
        margin-bottom: 32px;
        margin-left: 0;
        align-self: flex-start;
}
        `

const LinkContainer = styled.div`
        font-size: 1em;
        margin-top: 8px;
        `

const ProjectDescriptionSwitch = styled.ul`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        padding-bottom: 16px;
        align-items: center;
        list-style-type: none;
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;
        `

const ProjectDescriptionTab = styled.li<{
  $isActive: boolean
}>`
        font-family: var(${(props) => props.theme.font.title});
        font-size: 26px !important;
        margin-top: 16px;
        margin-right: 24px;
        padding: 0.1em 0.15em;
        cursor: pointer;
        background-color: ${(props) => (props.$isActive ? props.theme.mainColor : props.theme.secondaryColor)};
        color: ${(props) => props.theme.light.linkColor};

        :hover {
          background - color: ${(props) => props.theme.mainColor};
  }
        `

const ProjectDescriptionContainer = styled.div`
        margin-top: 8px;
        `

const Header = styled(Row)`
        align-items: center;
        flex-wrap: nowrap;
        margin-bottom: 0px;
        margin-top: 32px;

        ${(props) => props.theme.isPhone} {
          flex - direction: column;
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

const DescriptionMissionContainer = styled.div``

const DescriptionContent = styled.div`
        margin-bottom: 16px;
        overflow: auto;
        flex-grow: 1;

        ${DescriptionMissionContainer} ${Paragraph}:not(:has(h1, h2, h3, h4, h5)) > ::before {
          content: "";
        display: inline-block;
        height: 12px;
        width: 12px;
        background-color: ${(props) => props.theme.secondaryColor};
        margin-right: 8px;
}

        a {
          font - family: var(${(props) => props.theme.tertiaryColor});
        text-decoration: none;
        background-color: ${(props) => props.theme.secondaryColor};
        color: ${(props) => props.theme.light.linkColor};
        padding: 0.01em 0.05em;
        font-weight: 500;

        :hover {
          background - color: ${(props) => props.theme.tertiaryColor};
  }
}

        ${(props) => props.theme.isLaptop} {
          height: calc(100vh - 96px);
}
        `

const SkillRowTitle = styled.div`
${subTitleStyle}
margin-top: 8px;
`

const SkillRow = styled(Row)`
margin-left: -8px;
        ${(props) => props.theme.isPhone} {
          justify - content: space-around;
}
        `

export default WorkPage
