import React, { Component } from 'react'
import styled from 'styled-components'

import { withRouter } from 'next/router'
import Link from 'next/link'

import LogoHeader from './LogoHeader'
import MenuHeader from './MenuHeader'

import Location from '../../Location'

import Medias from '../medias/Medias'

const Button = styled.div`
font-family: 'Oswald', sans-serif;
cursor: pointer;
text-align: center;
width: 96px;
color: white;
line-height: 64px;
text-decoration: none;
${(props) => (props.isActive ? `background-color: ${props.theme.secondaryColor};` : 'background-color: inherit;')}

${(props) => props.theme.isPhone} {
  width: 100vw;
  height: 64px;
  border-left: 0;
}

:hover {
  background-color: ${(props) => props.theme.secondaryColor} !important;
}
`

const Container = styled.header`
top: 0;
left: 0;
position: fixed;
width: 100%;
height: ${(props) => (props.isCollapsed ? 416 : 64)}px;
min-height: 64px;
display: flex;
flex-direction: row;
align-items: flex-end;
overflow-y: visible;
z-index: 100;
display: block;

${(props) => props.theme.isPhone} {
  transition: 0.3s;

  ${Button} {
    display: ${(props) => (props.isCollapsed ? 'block' : 'none')};
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
  padding-top: 64px;
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
`

class Header extends Component {
  constructor() {
    super()
    this.state = {
      isCollapsed: false,
    }

    this.links = Location.links
    this.collapseIfTrue = this.collapseIfTrue.bind(this)
    this.collapse = this.collapse.bind(this)
  }

  getVisibleId() {
    const { router } = this.props

    if (router.query.section) {
      return router.query.section[0]
    } if (router.query.name) {
      return this.links[1].link
    }
    return this.links[0].link
  }

  collapse() {
    const { isCollapsed } = this.state

    this.setState({
      isCollapsed: !isCollapsed,
    })
  }

  collapseIfTrue() {
    const { isCollapsed } = this.state

    if (isCollapsed === true) {
      this.collapse()
    }
  }

  render() {
    const visibleId = this.getVisibleId()
    const { isCollapsed } = this.state

    // eslint-disable
    return (
      <Container isCollapsed={isCollapsed}>
        <LogoHeader />
        <ButtonContainer>
          {this.links.map((link, idx) => (
            <li key={link.link}>
              <Link aria-label={link.link} key={link.link} href={`/${link.link}`}>
                <Button
                  onClick={this.collapseIfTrue}
                  isActive={visibleId && visibleId === link.link}
                  className={`header-button ${idx === 0 ? 'first' : ''}
                  ${idx >= this.links.length - 1 ? 'last' : ''}
                  `}
                >
                  {link.label}
                </Button>
              </Link>
            </li>
          ))}
          <MediaContainer className="bp-small">
            <Medias />
          </MediaContainer>
        </ButtonContainer>
        <MenuHeader
          isCollapsed={isCollapsed}
          onClick={this.collapse}
          type="submit"
        />
      </Container>
    )
    // eslint-enable
  }
}

export default withRouter(Header)
