import React, { Component } from 'react'
import styled from 'styled-components'

import Medias from '../medias/Medias'
import BasicButton from '../basic-button/BasicButton'

const Container = styled.footer`
  background-color: #29154e;
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
}
`

const Copyright = styled.p`
  padding-top: 32px;
`

const MediasContainer = styled.div`
width: 0;
overflow: visible;
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
          <BasicButton type="submit" onClick={this.onProjectClick}>
            <ButtonText aria-label="Envie de me proposer un projet ?" href="mailto:contact@meddou.com">Me proposer un projet ?</ButtonText>
          </BasicButton>
          <Copyright>Copyright @ Mehdi Meddour</Copyright>
        </ButtonContainer>
        <MediasContainer>
          <Medias />
        </MediasContainer>
      </Container>
    )
  }
}

export default Footer
