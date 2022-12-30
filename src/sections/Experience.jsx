import React, { Component } from 'react'
import styled from 'styled-components'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

import Image from '../Image'
import Title from '../component/title/Title'
import Description from '../component/description/Description'
import { Link } from '../component/link/Link'

import BasicPage from './BasicPage'

import 'react-vertical-timeline-component/style.min.css'

const StyledVerticalTimeline = styled(VerticalTimeline)`
  padding-top: ${(props) => props.theme.sectionDefaultPaddingTop};
  margin-left: -14px;
  padding-left: 0;
  margin-bottom: 0;
  padding-bottom: 64px;

  ::before {
    background: ${(props) => props.theme.mainColor};
    width: 6px;
  }

  .vertical-timeline-element-icon {
    height: calc(32px + 16px + 6px);
    width: calc(32px + 16px + 6px);
    border: 3px solid white;
    border-radius: 0;
    margin-left: -8px;
    box-shadow: none;
  }

  .vertical-timeline-element img {
    height: 32px;
    width: 32px;
    margin: 8px;
    display: block;
  }

  .vertical-timeline-element-content {
    border-radius: 0;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
    margin-left: 84px;
    background: white;
    color: black !important;
    padding-bottom: 0;
  }

  .element-content-first .vertical-timeline-element-content {
    margin-top: 32px;
  }

  .vertical-timeline-element-content {
    width: max-content;
    max-width: calc(100% - 84px - 46px);
    min-width: 500px;
  }

  ${(props) => props.theme.isLaptop} {
    .vertical-timeline--two-columns .vertical-timeline-element-icon {
      width: 64px;
      height: 64px;
      margin-left: -32px;
    }
  }

  ${(props) => props.theme.isPhone} {
    .vertical-timeline-element-content {
      margin-left: calc(84px + 42px);
    }

    .vertical-timeline-element-content .vertical-timeline-element-date {
      color: white;
    }

    .vertical-timeline-element-icon {
      margin-left: 20px;
    }

    .vertical-timeline::before {
      left: 54px;
    }
  }

  .bounce-in {
    animation: none !important;
  }

  .vertical-timeline.vertical-timeline--animate.vertical-timeline--two-columns {
    margin-bottom: 0;
  }

  .vertical-timeline-element-content::before {
    display: none;
  }

  .vertical-timeline-element-content .vertical-timeline-element-date {
    font-size: 18px;
    color: black;
    text-transform: uppercase;
    font-weight: normal;
    opacity: 1;
  }

  p {
    font-size: 1.3rem;
  }

  .vertical-timeline-element-content-arrow {
    display: none;
  }

  p a {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    text-decoration: none;
    background-color: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.mainTextColor};
    padding: 0.05em 0.075em;
    font-weight: 400;

    :hover {
      background-color: ${(props) => props.theme.tertiaryColor};
    }
  }

  @media (prefers-color-scheme: dark) {
    .vertical-timeline-element-content {
      color: white !important;
      background-color: #515151;
    }

    .vertical-timeline-element-content .vertical-timeline-element-date {
      color: white;
    }

  }
`

const NoPaddingBottomBasicPage = styled(BasicPage)`
  padding-bottom: 0;
`

const ElementTitle = styled.h3`
  font-size: 2.25em;
  margin-block-start: 0;
  margin-block-end: 0;
  
  ${(props) => props.theme.isPhone} {
    font-size: 1.75em;
  }
`

const ElementSubTitle = styled.h4`
  font-size: 1.25em;
  font-weight: normal;
  margin-block-start: 0;
  margin-block-end: 0;
`

const ExperienceTitle = styled(Title)`
`

class Experience extends Component {
  constructor(props) {
    super(props)

    const { experiences } = this.props

    this.state = {
      experiences,
    }
  }

  render() {
    const { experiences } = this.state

    return (
      <NoPaddingBottomBasicPage>
        <div className="experience-page">
          <ExperienceTitle noMargin>Mes expériences</ExperienceTitle>
          <StyledVerticalTimeline layout="1-column" visible>
            { experiences.map((experience, idx) => (
              <VerticalTimelineElement
                key={experience.title}
                className={`vertical-timeline-element ${idx === 0 ? 'element-content-first' : ''}`}
                date={(
                  <div>
                    <span>{experience.date}</span>
                    {experience.projectUrl ? ' | ' : ''}
                    {experience.projectUrl && (
                    <Link href={experience.projectUrl}>
                      VOIR LE PROJET
                    </Link>
                    )}
                  </div>
                )}
                iconStyle={{ background: '#331c5d', color: '#fff' }}
                icon={
                  <Image src={`/images-webp/experiences/${experience.logo}`} alt={experience.title} />
                }
              >
                <ElementTitle>{experience.title}</ElementTitle>
                {experience.subtitle && <ElementSubTitle>{experience.subtitle}</ElementSubTitle>}
                <Description text={experience.text} />
              </VerticalTimelineElement>
            ))}
          </StyledVerticalTimeline>
        </div>
      </NoPaddingBottomBasicPage>
    )
  }
}

export default Experience
