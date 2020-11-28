import React from 'react'
import { Link } from 'react-router-dom'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

import Image from '../Image'
import Title from '../component/title/Title'
import Description from '../component/description/Description'

import ExperianceService from '../services/Experiance'

import BasicPage from './BasicPage'

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
        <div className="experience-background" />
        <div style={{paddingTop: '64px'}}>
          <Title text='Mes expériences' noMargin />
        </div>
        <VerticalTimeline layout='1-column'>
          { this.state.experiances.map((experiance, idx) => (
            <VerticalTimelineElement
              key={experiance.title}
              className={`vertical-timeline-element ${idx === 0 ? 'element-content-first' : ''}`}
              date={(
                <div>
                  <span>{experiance.date}</span>
                  {experiance.projectUrl ? ' | ' : ''}
                  {experiance.projectUrl && (
                  <Link to={experiance.projectUrl} className="vertical-timeline-element-link link">
                    VOIR LE PROJET
                  </Link>
                  )}
                </div>
              )}
              iconStyle={{background: '#331c5d', color: '#fff'}}
              icon={
                <Image src={`images-webp/experiances/${experiance.logo}`} alt={experiance.title} />
              }
            >
              <h3 className="vertical-timeline-element-title">{experiance.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{experiance.subtitle}</h4>            
              <Description text={experiance.text} />
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    )
  }
}

export default Experience
