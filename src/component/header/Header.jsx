import React, { Component } from 'react'

import { withRouter, Link } from 'react-router-dom'

import Location from '../../Location'

import Medias from '../medias/Medias'

import './Header.css'

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

  onLinkClick(link) {
    const { onLinkClick } = this.props

    onLinkClick?.(link.link)
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
    const visibleId = Location.pathname()
    const { isCollapsed } = this.state

    return (
      <header id="header" className={isCollapsed === true ? 'collapsed' : ''}>
        <div id="header-logo-container">
          <div id="header-first" />
          <div className="header-logo-sub-container">
            <div className="header-logo-padding-top" />
            <img src="/images-webp/logo-header.png" id="header-logo" alt="Mehdi Meddour logo" />
          </div>
          <div id="header-last" />
        </div>
        <div id="header-button-container">
          { this.links.map((link, idx) => (
            <Link aria-label={link.link} key={link.link} to={`/${link.link}`} onClick={this.collapseIfTrue}>
              <div
                className={`header-button ${idx === 0 ? 'first' : ''}
                ${idx >= this.links.length - 1 ? 'last' : ''}
                ${visibleId === link.link ? 'active' : ''}`}
              >
                {link.label}
              </div>
            </Link>
          ))}
          <div className="header-media-container bp-small">
            <Medias />
          </div>
        </div>
        <button
          id="header-hamburger-container"
          className={isCollapsed === true ? 'open' : ''}
          onClick={this.collapse}
          type="submit"
        >
          <span />
          <span />
          <span />
        </button>
      </header>
    )
  }
}

export default withRouter(Header)
