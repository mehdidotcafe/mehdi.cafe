import React, { Component } from 'react'
import { withRouter } from 'next/router'
import Slider from 'react-slick'
import styled from 'styled-components'
import moment from 'moment'
import 'moment/locale/fr';

import BasicPage from './BasicPage'

import Row from '../layout/row/Row'
import Item from '../layout/item/Item'

import Project from '../component/project/Project'
import Skill from '../component/skill/Skill'
import ScrollableRow from '../component/scrollable-row/ScrollableRow'
import Title from '../component/title/Title'
import Description, { Paragraph } from '../component/description/Description'
import RectScroller from '../component/rect-scroller/RectScroller'
import { ExternalLink, Link } from '../component/link/Link'

import SkillService from '../services/Skill'

import Zoomable from '../component/zoomable/Zoomable'

const BackButton = styled.div`
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

const Background = styled.div`
position: fixed;
top: -150vh;
height: 400vh;
right: -250vh;
background-image: linear-gradient(to left bottom, ${(props) => props.theme.gradiantColors});
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
margin-top: 64px;
width: 100%;
display: flex;
flex-direction: row;
margin-bottom: 4px;
align-items: center;
list-style-type: none;
margin-block-start: 0;
margin-block-end: 0;
padding-inline-start: 0;
`

const ProjectDescriptionTab = styled.li`
  font-family: 'Oswald', sans-serif !important;
  font-size: 26px !important;
  margin-top: 16px;
  margin-right: 24px;
  padding: 0.1em 0.15em;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? props.theme.mainColor : props.theme.secondaryColor)};
  color: ${(props) => props.theme.mainTextColor};

  :hover {
    background-color: ${(props) => props.theme.mainColor};
  }  
`

const Header = styled(Row)`
align-items: center;
flex-wrap: nowrap;
margin-bottom: 0px;
margin-top: 32px;

${(props) => props.theme.isPhone} {
  flex-direction: column;
  margin-top: 64px;
  margin-bottom: 0;
}
`

const Container = styled(BasicPage)`
margin-top: -64px;

.slick-arrow {
  display: none !important;
}
`

const SkillContainer = styled(ScrollableRow)`
margin-left: -8px;
height: calc(164px / 1.75);
max-width: 35vw;
overflow: hidden;
padding-top: 16px;

${(props) => props.theme.isPhone} {
  max-width: 100vw;
  margin-left: -4%;
  margin-right: -4%;
}
`

const ProjectBack = styled.div`
display: inline-block;
position: relative;
`

const DescriptionContent = styled.div`
margin-bottom: 16px;
padding-right: 16px;
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
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.mainTextColor};
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

class ProjectPage extends Component {
  constructor(props) {
    super(props)

    if (typeof window !== 'undefined') {
      this.sliderRef = React.createRef()
    }

    this.state = {
      activeSlide: 0,
    }
    this.slideCount = 3
    this.isSliderSliding = false

    this.goToWork = this.goToWork.bind(this)
    this.onSwipe = this.onSwipe.bind(this)
  }

  componentDidMount() {
    // document.querySelector('html').style.overflow = 'hidden'
  }

  onSwipe(direction) {
    const { activeSlide } = this.state

    this.setState({
      activeSlide: (activeSlide + (direction === 'left' ? 1 : -1)) % this.slideCount,
    })
  }

  setActiveSlide(slide, e) {
    const { activeSlide } = this.state

    e.preventDefault()
    if (activeSlide !== slide && !this.isSliderSliding) {
      this.isSliderSliding = true
      window.setTimeout(() => {
        this.isSliderSliding = false
      }, 1200)
      this.setState({ activeSlide: slide })
      this.sliderRef.current.slickGoTo(slide)
    }
  }

  goToWork(e) {
    const { router } = this.props

    e.preventDefault()
    router.push('/work')
  }

  render() {
    const { activeSlide } = this.state
    const { project } = this.props

    const tabs = project ? [
      {
        test: project.description_project || '',
        name: 'Le projet',
        content: project.description_project || '',
      },
      {
        test: project.description_mission,
        name: 'La mission',
        content: Array.isArray(project.description_mission) ? project.description_mission.map((description) => `<div>${description}</div>`).join('') : project.description_mission,
      },
      {
        test: project.start,
        name: 'La durée',
        content: `${moment(project.start).locale('fr').format('LL')} - ${project.end
          ? moment(project.end).locale('fr').format('LL') : 'Actuel'}`,
      },
    ].filter((t) => t.test) : []

    return (
      <Container noMargin>
        <Background />
        {project
          && (
            <InfoContainer>
              <DescriptionContainer>
                <Header>
                  <ProjectBack>
                    <Project
                      backgroundColor={project.backgroundColor}
                      backgroundImage={project.backgroundImage}
                      name={project.name}
                      logo={project.logo}
                      isHoverable={false}
                      fullSize
                    />
                    <BackButton type="submit" onClick={this.goToWork}>
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
                          Voir le projet
                        </StyledExternalLink>
                      )}
                    <SkillContainer step={164 / 2.5}>
                      {project.languages.map(SkillService.getFromName)
                        .map((skill) => (
                          <Item key={skill.name}>
                            <Link href={`/work?skill=${encodeURIComponent(skill.name)}`}>
                              <Skill
                                name={skill.name}
                                backgroundColor={skill.backgroundColor}
                                backgroundImage={skill.backgroundImage}
                                experience={skill.experience}
                                logo={skill.logo}
                                isLittle
                              />
                            </Link>
                          </Item>
                        ))}
                    </SkillContainer>
                  </TitleContainer>
                </Header>
                <ScrollerContainer className="bp-small">
                  <RectScroller>
                    {project.images.map((image) => (
                      <img src={`/images-webp/project/${image}`} key={image} style={{ backgroundColor: project.backgroundColor }} alt={`${project.name} ${image}`} />
                    ))}
                  </RectScroller>
                </ScrollerContainer>
                <ProjectDescriptionSwitch>
                  {
                    tabs.map((tab, idx) => (
                      <ProjectDescriptionTab
                        key={tab.name}
                        isActive={activeSlide === idx}
                        onClick={(e) => this.setActiveSlide(idx, e)}
                      >
                        {tab.name}
                      </ProjectDescriptionTab>
                    ))
                  }
                </ProjectDescriptionSwitch>
                <DescriptionContent>
                  <Slider
                    settings={{ dots: false, arrows: false, infinite: false }}
                    ref={this.sliderRef}
                    onSwipe={this.onSwipe}
                  >
                    {tabs.map((tab) => <Description text={tab.content} key={`${tab.name}|content`} noMargin />)}
                  </Slider>
                </DescriptionContent>
              </DescriptionContainer>
              <ScrollerContainer className="bp-large">
                <RectScroller>
                  {project.images.map((image) => (
                    <Zoomable key={image}>
                      <img src={`/images-webp/project/${image}`} alt={`${project.name} ${image}`} style={{ backgroundColor: project.backgroundColor, height: '100%', width: '100%' }} />
                    </Zoomable>
                  ))}
                </RectScroller>
              </ScrollerContainer>
            </InfoContainer>
          )}
      </Container>
    )
  }
}

export default withRouter(ProjectPage)
