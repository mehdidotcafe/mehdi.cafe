import 'react-vertical-timeline-component/style.min.css'

import Image from '@Image'
import BasicSection from '@section/BasicSection'
import useTranslations from '@translation/useTranslations'
import Description from '@typography/Description'
import Title from '@typography/Title'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import styled, { useTheme } from 'styled-components'

import { Experience } from './Experience'
import useExperiences from './useExperiences'

const Section = () => {
  const theme = useTheme()
  const t = useTranslations()
  const experiences = useExperiences()

  return (
    <NoPaddingBottomBasicSection>
      <Title noMargin>{t.experience.myExperiences}</Title>
      <StyledVerticalTimeline layout="1-column">
        {experiences.map((experience, idx) => (
          <VerticalTimelineElement
            visible
            key={experience.title}
            className={`vertical-timeline-element ${idx === 0 ? 'element-content-first' : ''}`}
            date={getExperienceDate(experience.startDate, experience.endDate, t)}
            iconStyle={{ background: theme.mainColor, color: theme.light.textColor }}
            icon={
              <Image src={`/images/experiences/${experience.logo}`} alt={experience.title} />
            }
          >
            <ElementTitle>{experience.title}</ElementTitle>
            {experience.subtitle && <ElementSubTitle>{experience.subtitle}</ElementSubTitle>}
            <Description text={experience.description} />
          </VerticalTimelineElement>
        ))}
      </StyledVerticalTimeline>
    </NoPaddingBottomBasicSection>
  )
}

const getExperienceDate = (startDate: Experience['startDate'], endDate: Experience['endDate'], t: ReturnType<typeof useTranslations>) => {
  const fragments: (string | number)[] = [startDate]

  if (endDate) {
    fragments.push(endDate)
  } else if (endDate === null) {
    fragments.push(t.experience.current)
  }

  return fragments.join(' - ')
}

const StyledVerticalTimeline = styled(VerticalTimeline)`
  padding-top: ${(props) => props.theme.sectionDefaultPaddingTop}px;
  margin-left: -14px;
  padding-left: 0;
  margin-bottom: 0;
  padding-bottom: 64px;
  font-family: var(${(props) => props.theme.font.terciary});

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
    font-family: var(${(props) => props.theme.font.terciary});
    text-transform: uppercase;
    text-decoration: none;
    background-color: ${(props) => props.theme.secondaryColor};
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

const NoPaddingBottomBasicSection = styled(BasicSection)`
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

export default Section
