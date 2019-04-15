import React, {Component} from 'react'

import { Link } from 'react-router-dom'

import Location from './Location'

import Medias from './component/medias/Medias'

import './Header.css'

class Header extends Component {

  state = {
    isCollapsed: false
  }

  links = Location.links

  onLinkClick(link) {
    this.props.onLinkClick && this.props.onLinkClick(link.link)
  }

  collapse() {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    })
  }

  collapseIfTrue() {
    if (this.state.isCollapsed === true) {
      this.collapse()
    }
  }

  render() {
    const visibleId = Location.pathname()

    return (
      <header id="header" className={this.state.isCollapsed === true ? 'collapsed' : ''}>
        <div id="header-logo-container">
          <div id="header-first"></div>
          <div className="header-shadow-clear"></div>
          <div className="header-logo-sub-container">
            <div className="header-logo-padding-top"></div>
            <img src="/images/logo-header.png" id="header-logo" alt="Mehdi Meddour logo"/>
          </div>
          <div className="header-shadow-clear"></div>
          <div id="header-last"></div>
        </div>
        <div id="header-button-container">
           { this.links.map((link, idx) => (
            <Link aria-label={link.link} key={link.link} to={`/${link.link}`} onClick={this.collapseIfTrue.bind(this)}>
              <div className={`header-button ${idx === 0 ? 'first' : ''} ${idx >= this.links.length - 1 ? 'last' : ''} ${visibleId === link.link ? 'active' : ''}`}>{link.label}</div>
            </Link>
          ))}
          <div className="header-media-container bp-small">
            <Medias/>
          </div>
        </div>
        <div id="header-hamburger-container" className={this.state.isCollapsed === true ? 'open' : ''} onClick={this.collapse.bind(this)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
    )
  }
}

export default Header
