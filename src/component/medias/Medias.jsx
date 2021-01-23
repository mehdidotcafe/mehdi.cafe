import React from 'react'

import Linkedin from '../icon/Linkedin'
import Github from '../icon/Github'
import Email from '../icon/Email'
import Medium from '../icon/Medium'

import './Medias.css'

function Medias({ className }) {
  return (
    <span className={`media-button-container ${className || ''}`} style={{ marginLeft: 'auto' }}>
      <a className="media-button" aria-label="Email" href="mailto:contact@meddou.com">
        <Email />
      </a>
      <a className="media-button" aria-label="Linkedin" href="https://www.linkedin.com/in/meddou" target="_blank" rel="noopener noreferrer">
        <Linkedin />
      </a>
      <a className="media-button" aria-label="Github" href="https://github.com/meddou" target="_blank" rel="noopener noreferrer">
        <Github />
      </a>
      <a className="media-button" aria-label="Medium" href="https://medium.com/@meddou" target="_blank" rel="noopener noreferrer">
        <Medium />
      </a>
    </span>
  )
}

export default Medias
