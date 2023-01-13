import { useRouter } from 'next/router'
import styled from 'styled-components'
import React, { useState } from 'react'

import Link from 'next/link'

import HeaderLogo from '@Header/HeaderLogo'
import HeaderMenu from '@Header/HeaderMenu'

import { sections } from '@Location'

import Medias from '@Medias'
import useTranslations from '@translation/useTranslations'

const defaultHeight = 64
const expandedHeight = 416

const Header = () => {
  const t = useTranslations()
  const pathnameAsSection = useSectionFromPathname()

  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const toggleIsExpanded = () => setIsExpanded((prev) => !prev)

  return (
    <Container isExpanded={isExpanded}>
      <HeaderLogo />
      <ButtonContainer>
        {sections.map((section) => (
          <li key={section.link}>
            <LinkButton aria-label={section.link} key={section.link} href={`/${section.link}`} onClick={() => setIsExpanded(false)} $isActive={isSectionActive(pathnameAsSection, section)}>
              {t.header.links[section.label]}
            </LinkButton>
          </li>
        ))}
        <MediaContainer>
          <Medias />
        </MediaContainer>
      </ButtonContainer>
      <HeaderMenu
        isExpanded={isExpanded}
        onClick={toggleIsExpanded}
      />
    </Container>
  )
}

const isSectionActive = (pas: string, section: typeof sections[number]) => pas === section.link

const useSectionFromPathname = (): string => {
  const router = useRouter()
  const pathname = router.query.section

  // work details page special case
  if (pathname === undefined && router.query.id) {
    return sections[1].link
  } if (pathname === undefined) {
    return sections[0].link
  } if (Array.isArray(pathname)) {
    return pathname[0]
  }
  return pathname
}

const LinkButton = styled(Link)<{
  $isActive: boolean
}>`
display: block;
font-family: var(${(props) => props.theme.font.title});
cursor: pointer;
text-align: center;
width: 96px;
line-height: ${defaultHeight}px;
text-decoration: none;
${(props) => (props.$isActive ? `background-color: ${props.theme.secondaryColor};` : 'background-color: inherit;')}

${(props) => props.theme.isPhone} {
  width: 100vw;
  height: ${defaultHeight}px;
  border-left: 0;
}

:hover {
  background-color: ${(props) => props.theme.secondaryColor} !important;
}
`

const Container = styled.header<{
  isExpanded: boolean
}>`
top: 0;
left: 0;
position: fixed;
width: 100%;
height: ${(props) => (props.isExpanded ? expandedHeight : defaultHeight)}px;
min-height: ${defaultHeight}px;
display: flex;
flex-direction: row;
align-items: flex-end;
overflow-y: visible;
z-index: 100;
display: block;

${(props) => props.theme.isPhone} {
  transition: 0.3s;

  ${LinkButton} {
    display: ${(props) => (props.isExpanded ? 'block' : 'none')};
  }
}
`

const ButtonContainer = styled.ul`
position: absolute;
left: 0;
right: 0;
top: 0;
bottom: 0;
display: flex;
flex-direction: row;
z-index: 19;
justify-content: flex-end;
align-items: center;
list-style-type: none;
margin-block-start: 0;
margin-block-end: 0;
padding-inline-start: 0;

a {
  text-decoration: none;
}

${(props) => props.theme.isPhone} {
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: ${defaultHeight}px;
  overflow: hidden;
}
`

const MediaContainer = styled.div`
${(props) => props.theme.isPhone} {
  text-align: center;
  width: 100%;
  align-self: center;
  padding-top: 12px;

  > * {
    margin-top: 24px;
    float: none;
  }
}
${(props) => props.theme.isLaptop} {
  display: none;
}
`

export default Header
