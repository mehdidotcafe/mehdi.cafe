import React from 'react'

import {Link} from 'react-router-dom'

import Image from '../Image'
import Title from '../component/title/Title'
import Description from '../component/description/Description'

import ExperianceService from '../services/Experiance'

import BasicPage from './BasicPage'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import '../VerticalTimeline.css'

class Experience extends BasicPage {
  constructor(props) {
    super(props)

    this.state = {
      experiances: ExperianceService.get()
    }

    this.style = {
      paddingBottom: 0
    }
  }

  renderContent() {
    return (
      <div className="sub-basic-page experience-page">
        <div className="experience-background"></div>
        <div style={{paddingTop: '64px'}}>
          <Title text={`Mes expériences`} noMargin={true}/>
        </div>
        <VerticalTimeline layout={'1-column'}>
          { this.state.experiances.map((experiance, idx) => (
            <VerticalTimelineElement
              key={experiance.title}
              className={`vertical-timeline-element ${idx === 0 ? 'element-content-first' : ''}`}
              date={experiance.date}
              iconStyle={{ background: '#331c5d', color: '#fff' }}
              icon={<Image src={`images-webp/experiances/${experiance.logo}`} alt={experiance.title}></Image>}>
              <h3 className="vertical-timeline-element-title">{experiance.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{experiance.subtitle}</h4>
              {experiance.projectUrl && <div><Link to={experiance.projectUrl} className="vertical-timeline-element-link link">Voir le projet</Link></div>}
              <Description text={experiance.text}></Description>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    )
  }
}

export default Experience
