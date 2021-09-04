import React from 'react'
import NextLink from 'next/link'
import styled, { css } from 'styled-components'

const anchorStyle = css`
a {
  font-family: 'Roboto', sans-serif;
  ${(props) => (props.isImportant && 'font-size: 1.7em;')}
  ${(props) => (props.isImportant && 'font-weight: bold;')}
  text-transform: uppercase;
  text-decoration: none;
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.mainTextColor};
  padding: 0.1em 0.15em;
  font-weight: 500;
  
  :hover {
    background-color: ${(props) => props.theme.mainColor};
  }
}
`

const NextLinkContainer = styled.span`
  ${anchorStyle}
`
const LinkContainer = styled.span`
  ${anchorStyle}
`

/* eslint-disable */
export const Link = (props) => (
  <NextLinkContainer isImportant={props.isImportant}>
    <NextLink {...props} />
  </NextLinkContainer>
)
export default Link

export const ExternalLink = (props) => (
  <LinkContainer>
    <a {...props} />
  </LinkContainer>
)
/* eslint-enable */
