import React from 'react'
import styled, { css } from 'styled-components'

import Row from '../layout/row/Row'
import Image from '../Image'

import Medias from '../component/medias/Medias'
import Description from '../component/description/Description'
import { Link } from '../component/link/Link'

import BasicPage from './BasicPage'

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  ${(props) => props.theme.isPhone} {
    flex-direction: column;
  }
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 3;

  ${(props) => props.theme.isPhone} {
    margin-top: 74px;
  }
`

const AvatarPicture = styled(Image)`
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.3));
  align-self: center;
  z-index: 2;

  ${(props) => props.theme.isPhone} {
    display: none;
  }
`

const TitleContainer = styled.div`
  margin-right: 2vw;  
  max-width: 50vw;
  padding: 16px;

  ${(props) => props.theme.isPhone} {
    position: relative;
    left: 0;
    top: 0;
    box-shadow: none;
    margin-top: 56px;
    max-width: 100vw;
  }
`

const TitleStyle = css`
  line-height: 1;
  font-family: 'Oswald', sans-serif;
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 4.5em;
  font-weight: normal;
`

const PrimaryTitle = styled.h1`
  ${TitleStyle}
  line-height: 1;
  font-size: 2.5em;
  margin-bottom: 16px;
`

const SecondaryTitle = styled.h2`
  ${TitleStyle}
  margin-top: 12px;
`

const MainDescription = styled(Description)`
  font-size: 1.75em;
  margin: 2em 0;
  margin-top: 8px;
`

const MediaContainerRow = styled(Row)`
  margin-top: 32px;
  align-items: center;
`

const isDay = () => {
  const date = new Date()
  const hours = date.getHours()

  return hours >= 6 && hours < 17
}

function Landing({ descriptions }) {
  return (
    <BasicPage noPaddingTop>
      <Container>
        <InfoContainer>
          <TitleContainer>
            <SecondaryTitle>
              {isDay() ? 'Bonjour' : 'Bonsoir'}
              , je suis Mehdi.
            </SecondaryTitle>
            <PrimaryTitle>
              {descriptions.title}
              .
            </PrimaryTitle>
            <MainDescription
              text={descriptions.shortDescription}
            />
            <MediaContainerRow>
              <Link isImportant href="/work">Voir mes projets</Link>
              <Medias className="bp-large" />
            </MediaContainerRow>
          </TitleContainer>
        </InfoContainer>
        <AvatarPicture
          height="807"
          width="700"
          src="/images-webp/mehdi.png"
          alt="Mehdi Meddour"
        />
      </Container>
    </BasicPage>
  )
}

export default Landing
