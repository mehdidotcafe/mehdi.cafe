import React from 'react'
import styled, { css, keyframes } from 'styled-components'

import Image from '../../Image'

const fadeIn = keyframes`
    0% {opacity: 0;}
    75% {opacity: 1;}
    100% {opacity: 1;}
`
const fadeOut = keyframes`
    0% {opacity: 1;}
    25% {opacity: 1;}
    100% {opacity: 0;}
`

const BackgroundImage = styled(Image)`
  z-index: 2;
  width: 256px;
  height: 256px;
  position: absolute;
  top: calc(50% - 128px);
  left: calc(50% - 128px);
`

const BackgroundOverlay = styled.div`
  z-index: 9;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.mainColor};
  ${(props) => props.inTransition && css`animation: ${fadeIn} 0.5s ease-in-out;`}
  ${(props) => props.outTransition && css`animation: ${fadeOut} 0.5s ease-in-out; opacity: 0;`}
`

function ProjectOverlay({
  isVisible, backgroundColor, inTransition, outTransition, name, logo,
}) {
  return (
    <span>
      { isVisible
      && (
      <BackgroundOverlay
        style={{ backgroundColor }}
        inTransition={inTransition}
        outTransition={outTransition}
      >
        <BackgroundImage src={`/images-webp/project/${logo}-logo-256x256.png`} alt={name} />
      </BackgroundOverlay>
      )}
    </span>
  )
}

export default ProjectOverlay
