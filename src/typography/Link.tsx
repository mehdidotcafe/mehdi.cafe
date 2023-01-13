import NextLink, { LinkProps } from 'next/link'
import type { AnchorHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

type AnchorProps = {
  $isStyled?: boolean
  $isImportant?: boolean
}

const anchorStyle = css<AnchorProps>`
a {
  font-family: var(${(props) => props.theme.font.terciary});
  ${(props) => (props.$isImportant && 'font-size: 1.7em;')}
  text-transform: uppercase;
  text-decoration: none;
  background-color: ${(props) => props.$isStyled !== false && props.theme.secondaryColor};
  padding: ${(props) => props.$isStyled !== false && '0.1em 0.15em'};

  :hover {
    background-color: ${(props) => props.$isStyled !== false && props.theme.tertiaryColor};
  }
}
`

const NextLinkContainer = styled.span`
  ${anchorStyle}
`
const LinkContainer = styled.span`
  ${anchorStyle}
`

type Props = {
  isStyled?: boolean
  isImportant?: boolean
  children: React.ReactNode
} & LinkProps

export const Link = ({
  isImportant,
  isStyled,
  ...props
}: Props) => (
  <NextLinkContainer $isImportant={isImportant} $isStyled={isStyled}>
    <NextLink {...props} />
  </NextLinkContainer>
)
export default Link

export const ExternalLink = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const { children } = props

  return (
    <LinkContainer>
      <a {...props}>{children}</a>
    </LinkContainer>
  )
}
