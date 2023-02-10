import Row from '@grid/Row'
import Image from '@Image'
import Medias from '@Medias'
import BasicSection from '@section/BasicSection'
import useTranslations from '@translation/useTranslations'
import Description from '@typography/Description'
import Link from '@typography/Link'
import styled, { css } from 'styled-components'

const Section = () => {
  const t = useTranslations()

  return (
    <BasicSection noPaddingTop>
      <Container>
        <InfoContainer>
          <TitleContainer>
            <SecondaryTitle>
              {t.home[isDay() ? 'day' : 'night'].mainTitle}
            </SecondaryTitle>
            <PrimaryTitle>
              {t.home.title}
            </PrimaryTitle>
            <MainDescription
              text={t.home.shortDescription}
            />
            <MediaContainerRow>
              <Link isImportant href="/work">{t.home.seeMyProjects}</Link>
              <StyledMedias />
            </MediaContainerRow>
          </TitleContainer>
        </InfoContainer>
        <AvatarImage
          height={575}
          width={494}
          src="/images/user.png"
          alt={t.userIdentity}
        />
      </Container>
    </BasicSection>
  )
}

const isDay = () => {
  const date = new Date()
  const hours = date.getHours()

  return hours >= 6 && hours < 18
}

const Container = styled.div`
  min-height: 100vh;
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
  min-width: 65%;

  ${(props) => props.theme.isPhone} {
    margin-top: 74px;
  }
`

const AvatarImage = styled(Image)`
  width: 35%;
  max-width: 700px;
  max-height: 815px;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.3));
  align-self: center;
  z-index: 2;

  img {
    width: 100%;
    object-fit: contain;
  }

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
  font-family: var(${(props) => props.theme.font.title});
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
  align-items: center;

  > * {
    margin-top: 32px;
  }
`

const StyledMedias = styled(Medias)`
${(props) => props.theme.isPhone} {
  display: none;
}
`

export default Section
