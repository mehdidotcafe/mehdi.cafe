import styled, { css } from 'styled-components'

export const subTitleStyle = css`
font-family: var(${(props) => props.theme.font.title});
margin-top: 0;
font-size: 22px;
margin-bottom: 0;
text-transform: uppercase;
`

export default styled.h4`${subTitleStyle}`
