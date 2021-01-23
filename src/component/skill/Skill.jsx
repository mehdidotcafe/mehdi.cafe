import React, { Component } from 'react'

import Image from '../../Image'

import ProgressRing from '../ProgressRing'
import WindowSize from '../../WindowSize'

import './Skill.css'

class Skill extends Component {
  static getStroke(side) {
    return (side * 12.5) / 164
  }

  static calcExperienceSide(side) {
    return side / 2
  }

  render() {
    const largeSide = Math.floor(164 / 3.5)
    const largeStroke = Skill.getStroke(largeSide)
    const smallSide = Math.floor(largeSide / 1.6)
    const smallStroke = Skill.getStroke(smallSide)

    const side = WindowSize.isLarge() ? largeSide : smallSide

    const {
      isLittle,
      showExperience,
      backgroundColor,
      isSelected,
      logo,
      name,
      backgroundImage,
      experience,
    } = this.props

    return (
      <div style={{ position: 'relative' }}>
        <div className={`skill-super-container ${isLittle ? 'little' : ''} ${showExperience ? 'pr-marged' : ''}`}>
          <div
            className={`
            rounded skill-container ${showExperience ? 'skill-container-with-pr' : ''}
            ${isSelected ? 'selected' : ''}
            ${isLittle ? 'little' : ''}`}
            style={{ backgroundColor }}
          >
            <div className={`skill-sub-container ${isLittle ? 'little' : ''}`}>
              <Image alt={name} className="skill-image" src={`/images-webp/skills/${logo}.png`} />
              { !isLittle
                  && (
                  <span className="skill-overlay" style={{ backgroundColor, backgroundImage }}>
                    <span className="skill-overlay-text">{name}</span>
                  </span>
                  )}
            </div>
          </div>
        </div>
        { showExperience
        && (
        <div style={{ position: 'absolute', top: -Skill.calcExperienceSide(side), right: Skill.calcExperienceSide(side) }}>

          <div style={{ width: side, height: side }} className="skill-experience-aside-container">
            <div className="skill-pr-container bp-large"><ProgressRing side={Math.floor(largeSide)} stroke={largeStroke} progress={(experience * 100) / 5} /></div>
            <div className="skill-pr-container bp-small"><ProgressRing side={Math.floor(smallSide)} stroke={smallStroke} progress={(experience * 100) / 5} /></div>
            <div className="skill-experience-aside-text-container">
              <div className="skill-experience-aside-text-num">{experience}</div>
              <div className="skill-experience-aside-text-years">{experience > 1 ? 'ANNÉES' : 'ANNÉE'}</div>
            </div>
          </div>
        </div>
        )}

      </div>
    )
  }
}

export default Skill
