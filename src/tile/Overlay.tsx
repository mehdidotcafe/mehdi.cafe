import { Color } from '@theme/theme'
import styled from 'styled-components'

/* eslint-disable no-bitwise */
const shouldDisplayBlackText = (color: Color) => {
  const rgb = parseInt(color.slice(1), 16) // convert rrggbb to decimal
  const r = (rgb >> 16) & 0xff // extract red
  const g = (rgb >> 8) & 0xff // extract green
  const b = (rgb >> 0) & 0xff // extract blue

  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b // per ITU-R BT.709

  return luma >= 220
}
/* eslint-enable no-bitwise */

export default styled.span<{
  isLittle?: boolean,
  backgroundColor: Color,
}>`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
justify-content: center;
color: ${(props) => (shouldDisplayBlackText(props.backgroundColor) ? 'black' : 'white')};
font-family: var(${(props) => props.theme.font.title});
font-size: 28px;
background-color: ${(props) => props.theme.mainColor};
display: flex;
align-items: center;
justify-content: center;
opacity: 0;
text-transform: lowercase;

${(props) => props.theme.isPhone} {
  font-size: 22px;
}

font-size: ${(props) => (props.isLittle ? '18px' : 'inehrit')};
`
