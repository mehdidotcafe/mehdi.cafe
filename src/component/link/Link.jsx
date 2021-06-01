import { Link as RouterLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

const anchorStyle = css`
font-family: 'Roboto', sans-serif;
font-size: 22px;
text-transform: uppercase;
text-decoration: none;
transition: 0.3s;
font-weight: bold;
color: #29154e;

:hover {
  color: #5d5d5d !important;
}
`

export default styled(RouterLink)`
  ${anchorStyle}
`

export const ExternalLink = styled.a`
${anchorStyle}
`
