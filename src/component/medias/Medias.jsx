import React from 'react'
import styled from 'styled-components'

import Linkedin from '../icon/Linkedin'
import Github from '../icon/Github'
import Email from '../icon/Email'
import Medium from '../icon/Medium'

const Container = styled.div`
  float: right;
  margin-left: auto;  
`

const MediaButton = styled.a`
  display: inline-block;
  cursor: pointer;
  margin-left: 8px;
  margin-right: 8px;
  transition: 0.3s;
  &:hover {
    filter: brightness(0.5);
  }
`

function Medias({ className }) {
  return (
    <Container>
      <MediaButton className={className} aria-label="Email" href="mailto:contact@meddou.com">
        <Email />
      </MediaButton>
      <MediaButton className={className} aria-label="Linkedin" href="https://www.linkedin.com/in/meddou" target="_blank" rel="noopener noreferrer">
        <Linkedin />
      </MediaButton>
      <MediaButton className={className} aria-label="Github" href="https://github.com/meddou" target="_blank" rel="noopener noreferrer">
        <Github />
      </MediaButton>
      <MediaButton className={className} aria-label="Medium" href="https://medium.com/@meddou" target="_blank" rel="noopener noreferrer">
        <Medium />
      </MediaButton>
    </Container>
  )
}

export default Medias
