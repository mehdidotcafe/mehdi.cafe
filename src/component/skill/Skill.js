import React, {Component} from 'react'

import Image from '../../Image'

import ProgressRing from '../ProgressRing'

import './Skill.css'

class Skill extends Component {
  getStroke(side) {
    return side * 10 / 164
  }

  render() {
    const largeSide = 164
    const largeStroke = this.getStroke(largeSide)
    const smallSide = largeSide / 1.3
    const smallStroke = this.getStroke(smallSide)

    return (
      <div className={`skill-super-container ${this.props.isLittle ? 'little' : ''} ${this.props.showExperience ? 'pr-marged' : ''}`}>
      { this.props.showExperience &&
        <React.Fragment>
          <div className="skill-pr-container bp-large"><ProgressRing side={largeSide} stroke={largeStroke} radius={Math.floor(largeSide / 2 + largeStroke * 2 + largeStroke / 2)} progress={this.props.experience * 100 / 6}/></div>
          <div className="skill-pr-container bp-small"><ProgressRing side={smallSide} stroke={smallStroke} radius={Math.floor(smallSide / 2 + smallStroke * 2 + smallStroke / 2)} progress={this.props.experience * 100 / 6}/></div>
        </React.Fragment>
      }
        <div className={`
            rounded skill-container ${this.props.showExperience ? 'skill-container-with-pr' : ''}
            ${this.props.isSelected ? 'selected' : ''}
            ${this.props.isLittle ? 'little' : ''}`} style={{backgroundColor: this.props.backgroundColor}}>
            <div className={`skill-sub-container ${this.props.isLittle ? 'little' : ''}`}>
              <Image alt={this.props.name} className="skill-image" src={`/images-webp/skills/${this.props.logo}.png`}/>
              {/* <img className="skill-image" src={`/images/skills/${this.props.logo}.png`}/> */}
              { !this.props.isLittle &&
                  <span className="skill-overlay" style={{backgroundColor: this.props.backgroundColor, backgroundImage: this.props.backgroundImage}}>
                    <span>{this.props.name}</span>
                  </span>
              }
            </div>
        </div>
      </div>
    )
  }
}

export default Skill
