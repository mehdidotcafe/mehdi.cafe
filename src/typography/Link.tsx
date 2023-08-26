import NextLink, { LinkProps } from 'next/link'
import styled, { css } from 'styled-components'

import type { AnchorHTMLAttributes } from 'react'

type AnchorProps = {
  $isStyled?: boolean
  $isImportant?: boolean
}

export const anchorStyle = css<AnchorProps>`
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
a {
  ${anchorStyle}
}
`
const LinkContainer = styled.span`
a {
  ${anchorStyle}
}
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
  const { children, href } = props

  return (
    <LinkContainer>
      <a {...props} href={href}>{children}</a>
    </LinkContainer>
  )
}
