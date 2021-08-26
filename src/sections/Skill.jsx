import React, { Component } from 'react'
import styled from 'styled-components'

import Link from 'next/link'

import Title from '../component/title/Title'
import Skill from '../component/skill/Skill'

import Row from '../layout/row/Row'
import Item from '../layout/item/Item'

import BasicPage from './BasicPage'

import WindowSize from '../WindowSize'

const SkillBackground = styled.div`
  position: absolute;
  height: 100vh;
  left: -35vh;
  top: 70vh;
  background-image: linear-gradient(to right, #7a0056, #961356, #af2854, #c43f51, #d7574e);
  width: 100vh;
  -webkit-transform: rotate(-35deg);
  transform: rotate(-35deg);
  z-index: -1;
`

const TitleContainer = styled.div`
  margin-top: 64px;
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

class SkillPage extends Component {
  constructor(props) {
    super(props)

    const { skills } = this.props

    this.skills = skills
    this.fakeSkills = new Array(10).map((v, idx) => ({
      ...this.skills[0],
      name: `fake|${idx}`,
    }))
  }

  render() {
    const Container = WindowSize.isLarge() ? Link : ((props) => <>{props.children}</>)

    return (
      <BasicPage>
        <SkillBackground />
        <TitleContainer>
          <Title noMargin>Mes skills</Title>
        </TitleContainer>
        <SubTextContainer>
          <ExperiancePreview />
          <ExperianceText>Années d&#39;expérience</ExperianceText>
        </SubTextContainer>
        <MarginRow center>
          {this.skills.map((skill) => (
            <Item key={skill.name}>
              <Container href={{ pathname: '/work', query: { skill: skill.name } }}>
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
          {this.fakeSkills.map((skill) => (
            <Item key={skill.name} isHidden>
              <Skill
                name={skill.name}
                backgroundColor={skill.backgroundColor}
                backgroundImage={skill.backgroundImage}
                experience={skill.experience}
                logo={skill.logo}
                showExperience
              />
            </Item>
          ))}
        </MarginRow>
      </BasicPage>
    )
  }
}

export default SkillPage
