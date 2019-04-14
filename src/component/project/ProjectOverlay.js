import React, {Component} from 'react'

import Image from '../../Image'

import './ProjectOverlay.css'

class ProjectOverlay extends Component {
  render() {
    return (
      <span>
      { this.props.isVisible &&
        <div style={{backgroundColor: this.props.backgroundColor}} className={`project-background-overlay ${this.props.in ? 'in' : ''}  ${this.props.out ? 'out' : ''}`}>
          <Image src={'/images-webp/project/' + this.props.logo + '-logo-256x256.png'} alt={this.props.name}/>
        </div>
      }
      </span>
    )
  }
}

export default ProjectOverlay
