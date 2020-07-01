import React, {Component} from 'react'

import Image from '../../Image'

import ProgressRing from '../ProgressRing'
import WindowSize from '../../WindowSize'

import './Skill.css'

class Skill extends Component {
  getStroke(side) {
    return side * 12.5 / 164
  }

  calcExperienceSide(side) {
    return side / 2
  }

  render() {
    const largeSide = Math.floor(164 / 3.5)
    const largeStroke = this.getStroke(largeSide)
    const smallSide = Math.floor(largeSide / 1.6)
    const smallStroke = this.getStroke(smallSide)

    const side = WindowSize.isLarge() ? largeSide : smallSide

    return (
      <div style={{position: 'relative'}}>
      <div className={`skill-super-container ${this.props.isLittle ? 'little' : ''} ${this.props.showExperience ? 'pr-marged' : ''}`}>
        <div className={`
            rounded skill-container ${this.props.showExperience ? 'skill-container-with-pr' : ''}
            ${this.props.isSelected ? 'selected' : ''}
            ${this.props.isLittle ? 'little' : ''}`} style={{backgroundColor: this.props.backgroundColor}}>
            <div className={`skill-sub-container ${this.props.isLittle ? 'little' : ''}`}>
              <Image alt={this.props.name} className="skill-image" src={`/images-webp/skills/${this.props.logo}.png`}/>
              { !this.props.isLittle &&
                  <span className="skill-overlay" style={{backgroundColor: this.props.backgroundColor, backgroundImage: this.props.backgroundImage}}>
                    <span className="skill-overlay-text">{this.props.name}</span>
                  </span>
              }
            </div>
        </div>
      </div>
      { this.props.showExperience &&
        <div style={{position: 'absolute', top: -this.calcExperienceSide(side), right: this.calcExperienceSide(side)}}>

        <div style={{width: side, height: side}} className="skill-experience-aside-container">
          <div className="skill-pr-container bp-large" ><ProgressRing side={Math.floor(largeSide)} stroke={largeStroke} progress={this.props.experience * 100 / 5}/></div>
          <div className="skill-pr-container bp-small" ><ProgressRing side={Math.floor(smallSide)} stroke={smallStroke} progress={this.props.experience * 100 / 5}/></div>
          <div className="skill-experience-aside-text-container">
            <div className="skill-experience-aside-text-num">{this.props.experience}</div>
            <div className="skill-experience-aside-text-years">{this.props.experience > 1 ? 'ANNÉES' : 'ANNÉE'}</div>
          </div>
        </div>
        </div>
      }

      </div>
    )
  }
}

export default Skill
