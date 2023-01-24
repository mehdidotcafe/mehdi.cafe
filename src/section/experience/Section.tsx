import Row from '@grid/Row'
import Image from '@Image'
import BasicSection from '@section/BasicSection'
import type { Experience } from '@section/experience/Experience'
import useExperiences from '@section/experience/useExperiences'
import useTranslations from '@translation/useTranslations'
import Description from '@typography/Description'
import Highlights from '@typography/Highlights'
import Title from '@typography/Title'
import type { ReactNode } from 'react'
import styled, { useTheme } from 'styled-components'

const Section = () => {
  const theme = useTheme()
  const t = useTranslations()
  const experiences = useExperiences()

  return (
    <NoPaddingBottomBasicSection>
      <Title noMargin>{t.experience.myExperiences}</Title>
      <VerticalTimelineContainer>
        {experiences.map((experience) => (
          <VerticalTimelineElement
            key={experience.title}
            date={getExperienceDate(experience.start, experience.end, t)}
            iconStyle={{ background: theme.mainColor, color: theme.light.textColor }}
            icon={
              <Image src={`/images/experiences/${experience.logo}`} alt={experience.title} />
            }
          >
            <ElementTitle>{experience.title}</ElementTitle>
            {experience.subtitle && <ElementSubTitle>{experience.subtitle}</ElementSubTitle>}
            <Description text={experience.description} />
            {experience.highlights && <Highlights highlights={experience.highlights} />}
          </VerticalTimelineElement>
        ))}
      </VerticalTimelineContainer>
    </NoPaddingBottomBasicSection>
  )
}

const getExperienceDate = (start: Experience['start'], end: Experience['end'], t: ReturnType<typeof useTranslations>) => {
  const fragments: (string | number)[] = [start]

  if (end) {
    fragments.push(end)
  } else if (end === null) {
    fragments.push(t.experience.current)
  }

  return fragments.join(' - ')
}

type VerticalTimelineElementProps = {
  date: string
  iconStyle: Record<string, unknown>
  icon: JSX.Element
  children: ReactNode,
}

const VerticalTimelineElement = ({
  date,
  iconStyle,
  icon,
  children,
}: VerticalTimelineElementProps) => (
  <VerticalTimelineElementRow>
    <VerticalTimelineElementIcon style={iconStyle}>
      {icon}
    </VerticalTimelineElementIcon>
    <VerticalTimelineElementContent>
      {children}
      <VerticalTimelineElementDate>{date}</VerticalTimelineElementDate>
    </VerticalTimelineElementContent>
  </VerticalTimelineElementRow>
)

const VerticalTimelineElementRow = styled(Row)`
margin-top: 32px;
margin-bottom: 32px;
flex-wrap: nowrap;
z-index: 2;
`

const VerticalTimelineElementIcon = styled.div`
height: calc(54px);
width: calc(54px);
border: 3px solid white;
border-radius: 0;
margin-left: -8px;
box-shadow: none;
box-sizing: border-box;
z-index: 2;

${(props) => props.theme.isPhone} {
  display: none;
}

img {
  height: 32px;
  width: 32px;
  margin: 8px;
  display: block;
}
`

const VerticalTimelineElementContent = styled.div`
border-radius: 0;
box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
margin-left: 38px;
margin-right: 38px;
background: white;
color: black !important;
padding-bottom: 0;
padding: 1em;
z-index: 2;

${(props) => props.theme.isLaptop} {
  min-width: 500px;
}

${(props) => props.theme.isPhone} {
  margin-left: 5%;
  margin-right: 0%;
  width: 90%;
}

// @media (prefers-color-scheme: dark) {
  color: white !important;
  background-color: #515151;
// }
`

const VerticalTimelineElementDate = styled.div`
font-size: 18px;
color: black;
text-transform: uppercase;
font-weight: normal;
opacity: 1;
font-family: var(${(props) => props.theme.font.terciary});
padding-top: 0.8em;

${(props) => props.theme.isPhone} {
    color: white;
}

// @media (prefers-color-scheme: dark) {
    color: white;
// }
`

const VerticalTimelineContainer = styled.div`
  max-width: 100%;
  padding-top: 64px;
  margin-left: -14px;
  padding-left: 0;
  margin-bottom: 0;
  padding-bottom: 64px;
  position: relative;

  ::before {
    background: ${(props) => props.theme.mainColor};
    width: 6px;
    content: "";
    position: absolute;
    top: 0;
    left: 18px;
    height: 100%;
  }

  ${(props) => props.theme.isPhone} {
    .vertical-timeline::before {
      left: 54px;
    }
  }

  p {
    font-weight: normal;
    font-size: 1.3rem;
    font-family: var(${(props) => props.theme.font.content});
    line-height: 1.6;
  }

  a {
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
`

const NoPaddingBottomBasicSection = styled(BasicSection)`
  padding-bottom: 0;
`

const ElementTitle = styled.em`
  font-family: var(${(props) => props.theme.font.title});
  font-size: 2.25em;
  margin-block-start: 0;
  margin-block-end: 0;
  font-style: normal;
  display: block;
  
  ${(props) => props.theme.isPhone} {
    font-size: 1.75em;
  }
`

const ElementSubTitle = styled.small`
  font-size: 1.25em;
  font-weight: normal;
  margin-block-start: 0;
  margin-block-end: 0;
  font-family: var(${(props) => props.theme.font.terciary});
  line-height: 1;

`

export default Section
