import React from 'react'

import Image from '../../Image'

import './ProjectOverlay.css'

function ProjectOverlay({
  isVisible, backgroundColor, inTransition, outTransition, name, logo,
}) {
  return (
    <span>
      { isVisible
      && (
      <div style={{ backgroundColor }} className={`project-background-overlay ${inTransition ? 'in' : ''}  ${outTransition ? 'out' : ''}`}>
        <Image src={`/images-webp/project/${logo}-logo-256x256.png`} alt={name} />
      </div>
      )}
    </span>
  )
}

export default ProjectOverlay
