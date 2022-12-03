import React, { Component } from 'react'
import styled from 'styled-components'

import Medias from '../medias/Medias'
import BasicButton from '../basic-button/BasicButton'

const Container = styled.footer`
  background-color: ${(props) => props.theme.mainColor};
  display: flex;
  color: white;
  padding-top: 32px;
  padding-bottom: 32px;
  align-items: flex-end;
`
const ButtonContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${BasicButton} {
    max-width: 80vw;
    
    :hover {
      background-color: ${(props) => props.theme.tertiaryColor} !important;
    }
  }
}
`

const Copyright = styled.p`
  padding-top: 32px;
`

const MediasContainer = styled.div`
float: right;
`

const ButtonText = styled.a`
color: white !important;
text-decoration: none;
`

class Footer extends Component {
  static onProjectClick() {
    window.gtag('event', 'contact', {
      event_category: 'contact',
    })
  }

  render() {
    return (
      <Container>
        <ButtonContainer>
          <BasicButton type="submit" onClick={Footer.onProjectClick}>
            <ButtonText aria-label="Envie de me proposer un projet ?" href="mailto:contact@meddou.com">Me proposer un projet ?</ButtonText>
          </BasicButton>
          <Copyright>Copyright @ Mehdi Meddour</Copyright>
        </ButtonContainer>
        <div className="bp-large">
          <MediasContainer>
            <Medias />
          </MediasContainer>
        </div>
      </Container>
    )
  }
}

export default Footer
