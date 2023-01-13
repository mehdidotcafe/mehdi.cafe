import styled from 'styled-components'

import Image from '@Image'

import Overlay from '@tile/Overlay'
import { Color } from '@theme/theme'

type ContainerProps = {
  isFullSize?: boolean
}

type Props = {
  backgroundColor: Color
  logo: string
  name: string
  isHoverable?: boolean
  fullSize?: boolean
}

const ProjectTile = ({
  backgroundColor, logo, name, isHoverable, fullSize,
}: Props) => (
  <Container isFullSize={fullSize} style={{ backgroundColor }}>
    <ProjectImage alt={`${name} logo`} src={`/images/project/${logo}-logo.png`} />
    {isHoverable !== false
        && (
          <Overlay style={{ backgroundColor, color: shouldDisplayBlackText(backgroundColor) ? 'black' : 'white' }}>
            <span>{name}</span>
          </Overlay>
        )}
  </Container>
)

const Container = styled.div<ContainerProps>`
  height: 164px;
  width: 164px;
  background-color: ${(props) => props.theme.mainColor};
  text-align: center;
  justify-content: center;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover ${Overlay} {
    opacity: 1;
  }

  ${(props) => props.theme.isPhone} {
    ${(props) => !props.isFullSize && 'height: calc(164px / 2);'}
    ${(props) => !props.isFullSize && 'width: calc(164px / 2);'}
  }
`

const ProjectImage = styled(Image)`
  margin-top: 18.75%;
  height: 62.5%;
  width: 62.5%;
`

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

export default ProjectTile
