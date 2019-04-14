import React, {Component} from 'react'

import Image from '../../Image'

import './Project.css'

class Project extends Component {
  isWhite(c) {
    var rgb = parseInt(c, 16);   // convert rrggbb to decimal
    var r = (rgb >> 16) & 0xff;  // extract red
    var g = (rgb >>  8) & 0xff;  // extract green
    var b = (rgb >>  0) & 0xff;  // extract blue

    var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

    return luma >= 220
  }

  render() {
    const isWhite = this.props.backgroundColor ? this.isWhite(this.props.backgroundColor.slice(1)) : false

    return (
      <span>
        <div className={`rounded project-container ${this.props.fullSize ? 'full-size' : ''}`} style={{backgroundColor: this.props.backgroundColor, backgroundImage: this.props.backgroundImage}}>
          <Image alt={this.props.name} className="project-image" src={`/images-webp/project/${this.props.logo}-logo.png`}/>
          {/* <img className="project-image" src={`/images/project/${this.props.logo}-logo.png`}/> */}
          { this.props.isHoverable !== false &&
            <span className="project-overlay" style={{backgroundColor: this.props.backgroundColor, backgroundImage: this.props.backgroundImage, color: isWhite ? 'black' : 'white'}}>
              <span>{this.props.name}</span>
            </span>          
          }
        </div>
      </span>
    )
  }
}

export default Project
