import useTranslations from '@translation/useTranslations'
import React from 'react'
import styled, { css } from 'styled-components'

const HeaderLogo = () => {
  const t = useTranslations()

  return (
    <Container>
      <PaddingFirst />
      <LogoContainer>
        <LogoPaddingTop />
        <Logo
          src="/images/logo-header.png"
          alt={t.header.logo.imageAlt}
          width={221}
          height={120}
        />
      </LogoContainer>
      <TrailingPadding />
    </Container>
  )
}

const Container = styled.aside`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  overflow-y: visible;
`

const paddings = css`
  box-sizing: border-box;
  height: 100%;
  background-color: ${(props) => props.theme.mainColor};
  transform: translateZ(0);
  z-index: 13;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
`

const PaddingFirst = styled.div`
  ${paddings}
  width: calc(8% - 8px);
`

const TrailingPadding = styled.div`
  ${paddings}
  flex-grow: 1;
  margin-left: -2px;
`

const Logo = styled.img`
  transform: translateZ(0);
  position: relative;
  align-self: flex-start;
  z-index: 14;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
`

const LogoContainer = styled.div`
  height: calc(100% - 64px);
  background-color: ${(props) => props.theme.mainColor};
  z-index: 14;
`

const LogoPaddingTop = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.mainColor};
`

export default HeaderLogo
