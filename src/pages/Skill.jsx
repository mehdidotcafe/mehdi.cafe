import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import Title from '../component/title/Title'
import Skill from '../component/skill/Skill'

import Row from '../layout/row/Row'
import Item from '../layout/item/Item'

import BasicPage from './BasicPage'

import SkillService from '../services/Skill'
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

function FakeContainer({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}

FakeContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
}

class SkillPage extends Component {
  constructor(props) {
    super(props)
    this.skills = SkillService.getShowable()

    this.fakeSkills = new Array(10).map((v, idx) => ({
      ...this.skills[0],
      name: `fake|${idx}`,
    }))
  }

  render() {
    const Container = WindowSize.isLarge() ? Link : FakeContainer

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
              <Container to={`/work?skill=${encodeURIComponent(skill.name)}`}>
                <Skill
                  name={skill.name}
                  backgroundColor={skill.backgroundColor}
                  backgroundImage={skill.backgroundImage}
                  experience={skill.experience}
                  logo={skill.logo}
                  showExperience
                />
              </Container>
            </Item>
          ))}
          {this.fakeSkills.map((skill) => (
            <Item key={skill.name} isHidden>
              <Link to={`/work?skill=${encodeURIComponent(skill.name)}`}>
                <Skill
                  name={skill.name}
                  backgroundColor={skill.backgroundColor}
                  backgroundImage={skill.backgroundImage}
                  experience={skill.experience}
                  logo={skill.logo}
                  showExperience
                />
              </Link>
            </Item>
          ))}
        </MarginRow>
      </BasicPage>
    )
  }
}

export default SkillPage
