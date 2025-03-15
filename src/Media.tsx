import styled from 'styled-components'

import {
  CONTACT_EMAIL,
  CONTACT_GITHUB,
  CONTACT_LINKEDIN,
  CONTACT_X,
} from '@env'
import Email from '@icon/Email'
import Github from '@icon/Github'
import Linkedin from '@icon/Linkedin'
import X from '@icon/X'

const Media = () => (
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
    <MediaButton aria-label="X" href={`https://x.com/${CONTACT_X}`} target="_blank" rel="noopener noreferrer">
      <X />
    </MediaButton>
  </Container>
)

const Container = styled.div`
  float: right;
  margin-left: auto;
  display: flex;
  
`
const MediaButton = styled.a`
  height: 48px;
  width: 48px;
  display: inline-block;
  cursor: pointer;
  margin-left: 8px;
  margin-right: 8px;
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.light.linkColor};

  :hover {
    background-color: ${(props) => props.theme.tertiaryColor};
  }

  img {
    height: calc(100% - 8px);
    width: calc(100% - 8px);
    margin: 4px;
  }
`

export default Media
