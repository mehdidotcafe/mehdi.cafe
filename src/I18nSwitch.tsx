import styled from 'styled-components'

import {
  DOMAIN_EN,
  DOMAIN_FR,
} from '@env'
import { ExternalLink } from '@typography/Link'

const Container = styled.div`
font-size: 1.5rem;
`

const I18NSwitch = () => (
  <Container>
    <ExternalLink href={`https://${DOMAIN_EN}`}>EN</ExternalLink>
    &nbsp;|&nbsp;
    <ExternalLink href={`https://${DOMAIN_FR}`}>FR</ExternalLink>
  </Container>
)

export default I18NSwitch
