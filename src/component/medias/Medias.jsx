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

/**
 * @TODO change hover animation to be the same as Link component
 * Icons must be changed
 */
const MediaButton = styled.a`
  height: 32px;
  display: inline-block;
  cursor: pointer;
  margin-left: 8px;
  margin-right: 8px;

  img {
    background-color: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.mainTextColor};
    
    :hover {
      background-color: ${(props) => props.theme.mainColor};
    }
  }
`

function Medias({ className }) {
  return (
    <Container>
      <MediaButton className={className} aria-label="Email" href="mailto:contact@mehdi.cafe">
        <Email />
      </MediaButton>
      <MediaButton className={className} aria-label="Linkedin" href="https://www.linkedin.com/in/mehdidotcafe" target="_blank" rel="noopener noreferrer">
        <Linkedin />
      </MediaButton>
      <MediaButton className={className} aria-label="Github" href="https://github.com/mehdidotcafe" target="_blank" rel="noopener noreferrer">
        <Github />
      </MediaButton>
      <MediaButton className={className} aria-label="Medium" href="https://medium.com/@mehdidotcafe" target="_blank" rel="noopener noreferrer">
        <Medium />
      </MediaButton>
    </Container>
  )
}

export default Medias
