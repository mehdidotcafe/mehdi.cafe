import Image from '@Image'
import { Color } from '@theme/theme'
import Overlay from '@tile/Overlay'
import styled from 'styled-components'

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
          <Overlay style={{ backgroundColor }} backgroundColor={backgroundColor} isLittle={false}>
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

export default ProjectTile
