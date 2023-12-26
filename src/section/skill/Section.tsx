import Link from 'next/link'
import { type ReactElement } from 'react'
import styled, { useTheme } from 'styled-components'

import Item from '@grid/Item'
import Row from '@grid/Row'
import BasicSection from '@section/BasicSection'
import useSkills from '@section/skill/useSkills'
import SkillTile from '@tile/SkillTile'
import useTranslations from '@translation/useTranslations'
import Title from '@typography/Title'

const Section = () => {
  const { breakpoints: { useWidthBreakpoints } } = useTheme()
  const t = useTranslations()
  const skills = useSkills()
  const { isPhone } = useWidthBreakpoints()

  const Container = isPhone
    ? ({ children }: { children: ReactElement }) => children
    : Link

  return (
    <BasicSection>
      <Title $noMargin>{t.skill.mySkills}</Title>
      <SubTextContainer>
        <ExperiancePreview />
        <ExperianceText>{t.skill.yearsOfExperience}</ExperianceText>
      </SubTextContainer>
      <MarginRow $isCenter>
        {skills.map((skill) => (
          <Item key={skill.name}>
            <Container href={{ pathname: '/work', query: { skill: skill.name } }}>
              <SkillTile
                name={skill.name}
                backgroundColor={skill.color}
                experience={skill.experience}
                logo={skill.logo}
                logoType={skill.logoType}
                showExperience
              />
            </Container>
          </Item>
        ))}
      </MarginRow>
    </BasicSection>
  )
}

const SubTextContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const ExperiancePreview = styled.div`
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.3));
  width: 65px;
  min-width: 65px;
  height: 13px;
  margin-right: 12px;
  background-color: ${(props) => props.theme.secondaryColor};
  display: inline-block;
  align-self: center;
`

const ExperianceText = styled.aside`
  font-size: 20px;
  text-transform: uppercase;
  font-family: var(${(props) => props.theme.font.terciary});
`

const MarginRow = styled(Row)`
  margin-top: 64px;
`

export default Section
