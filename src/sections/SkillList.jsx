import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import Title from '../component/title/Title'
import Skill from '../component/skill/Skill'

import Row from '../layout/row/Row'
import Item from '../layout/item/Item'

import BasicPage from './BasicPage'

import WindowSize from '../WindowSize'

const TitleContainer = styled.div`
`

const SubTextContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const ExperiancePreview = styled.div`
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.3));
  width: 65px;
  min-width: 65px;
  height: 13px;
  margin-right: 16px;
  background-color: #ffab00;
  display: inline-block;
  align-self: center;
`

const ExperianceText = styled.aside`
  font-size: 22px;
  text-transform: uppercase;
`

const MarginRow = styled(Row)`
  margin-top: 64px;
`

export function SkillPage({
  skills,
}) {
  const Container = WindowSize.isLarge() ? Link : ((props) => props.children)

  return (
    <BasicPage>
      <TitleContainer>
        <Title noMargin>Mes skills</Title>
      </TitleContainer>
      <SubTextContainer>
        <ExperiancePreview />
        <ExperianceText>Années d&#39;expérience</ExperianceText>
      </SubTextContainer>
      <MarginRow center>
        {skills.map((skill) => (
          <Item key={skill.name}>
            <Container href={{ pathname: '/work', query: { skill: skill.name } }} legacyBehavior>
              {/* eslint-disable-next-line */}
            <a>
              <Skill
                name={skill.name}
                backgroundColor={skill.backgroundColor}
                backgroundImage={skill.backgroundImage}
                experience={skill.experience}
                logo={skill.logo}
                showExperience
              />
            </a>
            </Container>
          </Item>
        ))}
      </MarginRow>
    </BasicPage>
  )
}

export default SkillPage
