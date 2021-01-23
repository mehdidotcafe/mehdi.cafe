import React, { Component } from 'react'

import Image from '../../Image'

import './Project.css'

class Project extends Component {
  static isWhite(c) {
    const rgb = parseInt(c, 16); // convert rrggbb to decimal
    const r = (rgb >> 16) & 0xff; // extract red
    const g = (rgb >> 8) & 0xff; // extract green
    const b = (rgb >> 0) & 0xff; // extract blue

    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

    return luma >= 220
  }

  render() {
    const {
      backgroundColor, backgroundImage, logo, name, isHoverable, fullSize,
    } = this.props
    const isWhite = backgroundColor ? Project.isWhite(backgroundColor.slice(1)) : false

    return (
      <span>
        <div className={`rounded project-container ${fullSize ? 'full-size' : ''}`} style={{ backgroundColor, backgroundImage }}>
          <Image alt={name} className="project-image" src={`/images-webp/project/${logo}-logo.png`} />
          { isHoverable !== false
            && (
            <span className="project-overlay" style={{ backgroundColor, backgroundImage, color: isWhite ? 'black' : 'white' }}>
              <span>{name}</span>
            </span>
            )}
        </div>
      </span>
    )
  }
}

export default Project
