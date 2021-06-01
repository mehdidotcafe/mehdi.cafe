import React, { Component } from 'react'
import styled from 'styled-components'

import Image from '../../Image'

const Overlay = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  color: white;
  font-family: 'Oswald', sans-serif;
  font-size: 28px;
  background-color: #29154e;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  opacity: 0;
  text-transform: lowercase;

  @media only screen and (max-width: 812px) {
    font-size: 22px;
  }
`

const Container = styled.div`
  height: 164px;
  width: 164px;
  background-color: #29154e;
  text-align: center;
  justify-content: center;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover ${Overlay} {
    opacity: 1;
  }

  @media only screen and (max-width: 812px) {
    ${(props) => !props.isFullSize && 'height: calc(164px / 2);'}
    ${(props) => !props.isFullSize && 'width: calc(164px / 2);'}
  }
`

const ProjectImage = styled(Image)`
  margin-top: 18.75%;
  height: 62.5%;
  width: 62.5%;
`

class Project extends Component {
  static isWhite(c) {
    const rgb = parseInt(c, 16); // convert rrggbb to decimal
    const r = (rgb >> 16) & 0xff; // extract red
    const g = (rgb >> 8) & 0xff; // extract green
    const b = (rgb >> 0) & 0xff; // extract blue

    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

    return luma >= 220
  }

  render() {
    const {
      backgroundColor, backgroundImage, logo, name, isHoverable, fullSize,
    } = this.props
    const isWhite = backgroundColor ? Project.isWhite(backgroundColor.slice(1)) : false

    return (
      <span>
        <Container isFullSize={fullSize} style={{ backgroundColor, backgroundImage }}>
          <ProjectImage alt={name} src={`/images-webp/project/${logo}-logo.png`} />
          { isHoverable !== false
            && (
            <Overlay style={{ backgroundColor, backgroundImage, color: isWhite ? 'black' : 'white' }}>
              <span>{name}</span>
            </Overlay>
            )}
        </Container>
      </span>
    )
  }
}

export default Project
