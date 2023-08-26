import styled from 'styled-components'

import {
  CONTACT_EMAIL,
  CONTACT_GITHUB,
  CONTACT_LINKEDIN,
  CONTACT_MEDIUM,
} from '@env'
import Email from '@icon/Email'
import Github from '@icon/Github'
import Linkedin from '@icon/Linkedin'
import Medium from '@icon/Medium'

const Medias = () => (
  <Container>
    <MediaButton aria-label="Email" href={`mailto:${CONTACT_EMAIL}`}>
      <Email />
    </MediaButton>
    <MediaButton aria-label="Linkedin" href={`https://www.linkedin.com/in/${CONTACT_LINKEDIN}`} target="_blank" rel="noopener noreferrer">
      <Linkedin />
    </MediaButton>
    <MediaButton aria-label="Github" href={`https://github.com/${CONTACT_GITHUB}`} target="_blank" rel="noopener noreferrer">
      <Github />
    </MediaButton>
    <MediaButton aria-label="Medium" href={`https://medium.com/${CONTACT_MEDIUM}`} target="_blank" rel="noopener noreferrer">
      <Medium />
    </MediaButton>
  </Container>
)

const Container = styled.div`
  float: right;
  margin-left: auto;  
`
const MediaButton = styled.a`
  height: 32px;
  display: inline-block;
  cursor: pointer;
  margin-left: 8px;
  margin-right: 8px;

  img {
    background-color: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.light.linkColor};
    
    :hover {
      background-color: ${(props) => props.theme.tertiaryColor};
    }
  }
`

export default Medias
