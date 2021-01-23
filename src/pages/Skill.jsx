import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import Title from '../component/title/Title'
import Skill from '../component/skill/Skill'

import Row from '../layout/row/Row'
import Item from '../layout/item/Item'

import BasicPage from './BasicPage'

import SkillService from '../services/Skill'
import WindowSize from '../WindowSize'

import './SkillPage.css'

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

class SkillPage extends BasicPage {
  constructor(props) {
    super(props)
    this.skills = SkillService.getShowable()

    this.fakeSkills = new Array(10).map((v, idx) => ({
      ...this.skills[0],
      name: `fake|${idx}`,
    }))
  }

  renderContent() {
    const Container = WindowSize.isLarge() ? Link : FakeContainer

    return (
      <div className="sub-basic-page">
        <div className="skill-background" />
        <div style={{ paddingTop: '64px' }}>
          <Title text="Mes skills" noMargin />
        </div>
        <div className="subtext-container">
          <div className="experiance-preview" />
          <span style={{ fontSize: '22px', textTransform: 'uppercase' }}>Années d&#39;expérience</span>
        </div>
        <Row style={{ marginTop: '64px' }} center>
          { this.skills.map((skill) => (
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
          { this.fakeSkills.map((skill) => (
            <Item key={skill.name} style={{ visibility: 'hidden', height: '0px' }}>
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
        </Row>
      </div>
    )
  }
}

export default SkillPage
