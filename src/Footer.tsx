import BasicButton from '@BasicButton'
import { CONTACT_EMAIL } from '@env'
import I18NSwitch from '@I18nSwitch'
import Medias from '@Medias'
import useTranslations from '@translation/useTranslations'
import ExternalLink from '@typography/Link'
import styled from 'styled-components'

const Footer = () => {
  const t = useTranslations()

  return (
    <Container>
      <ButtonContainer>
        <I18NSwitchContainer>
          <I18NSwitch />
        </I18NSwitchContainer>
        <ContactLink aria-label={t.footer.getInTouch} href={`mailto:${CONTACT_EMAIL}`} onClick={onContactButtonClick}>{t.footer.getInTouch}</ContactLink>
        <Copyright>{t.footer.copyright}</Copyright>
      </ButtonContainer>
      <MediasContainer>
        <Medias />
      </MediasContainer>
    </Container>
  )
}

const onContactButtonClick = () => {
  global.gtag('event', 'contact', {
    event_category: 'contact',
  })
}

const Container = styled.footer`
position: relative;
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
  font-family: var(${(props) => props.theme.font.terciary});
`

const MediasContainer = styled.div`
position: absolute;
right: 0;
// parent padding-bttom value 
bottom: 32px;
height: 32px;

${(props) => props.theme.isPhone} {
  display: none;
}
`

const I18NSwitchContainer = styled.div`
position: absolute;
left: 8px;
// parent padding-bttom value 
bottom: 32px;
display: none;
`

const ContactLink = styled(ExternalLink)`
text-decoration: none;
text-transform: uppercase !important;
font-size: 32px;
color: white;
padding: 8px 16px !important;
`

export default Footer
