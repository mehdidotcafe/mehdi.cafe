import React, {Component} from 'react'

import { Link } from 'react-router-dom'

import Title from '../component/title/Title'
import Skill from '../component/skill/Skill'

import Row from '../layout/row/Row'
import Item from '../layout/item/Item'

import BasicPage from './BasicPage'

import SkillService from '../services/Skill'
import WindowSize from '../WindowSize'

import './SkillPage.css'

class FakeContainer extends Component {
  render() {
    return <div>
      {this.props.children}
    </div>
  }
}


class SkillPage extends BasicPage {
  constructor(props) {
    super(props)
    this.skills = SkillService.getShowable()//.sort((a, b) => a.experience > b.experience ? -1 : 1)

    this.fakeSkills = new Array(10).fill(this.skills[0])
  }

  renderContent() {
    const Container = WindowSize.isLarge() ? Link : FakeContainer

    return (
      <div className={`sub-basic-page`}>
        <div className="skill-background"></div>
        <div style={{paddingTop: '64px'}}>
          <Title text={`Mes skills`} noMargin={true}/>
        </div>
        <div className="subtext-container">
          <div className="experiance-preview"></div>
          <span style={{fontSize: '22px', textTransform: 'uppercase'}}>Années d'expériences (min. 6 mois, max. 4 ans)</span>
        </div>
        <Row style={{marginTop: '64px', justifyContent: 'space-around'}} spaceAroundMob>
          { this.skills.map(skill => (
            <Item key={skill.name}>
              <Container to={`/work?skill=${encodeURIComponent(skill.name)}`}>
                <Skill {...skill} showExperience={true}/>
              </Container>
            </Item>
          ))}
          { this.fakeSkills.map((skill, idx) => (
            <Item key={skill.name + '|' + idx + '|fake'} style={{visibility: 'hidden', height: '0px'}}>
              <Link to={`/work?skill=${encodeURIComponent(skill.name)}`}>
                <Skill {...skill} showExperience={true}/>
              </Link>
            </Item>
          ))}
        </Row>
      </div>
    )
  }
}

export default SkillPage
