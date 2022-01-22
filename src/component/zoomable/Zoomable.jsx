import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const sharedContainer = css`
  display: block;
  cursor: pointer;
  transition: all .3s ease-in-out;
  height: 100%;
  width: 100%;
`

const SubContainer = styled.div`
  ${sharedContainer}
`

const Container = styled.span`
  ${sharedContainer}
  &.zoomed {
    position: fixed;
    transform-origin: center center;
    z-index: 99;
  }

  &.zoomed {
    ${SubContainer} {
      box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
      transition: all .3s all-in-out;
      position: relative;  
    }
  } 
`

const Background = styled.span`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  animation: fadeIn 0.3s;
  background-color:rgba(0, 0, 0, 0.6);
`

class Zoomable extends Component {
  constructor() {
    super()
    this.containerRef = React.createRef()

    this.transitionDuration = 300

    this.copiedElement = undefined
    this.currentClickListener = undefined
    this.scaleFactor = undefined

    this.state = {
      isZoom: false,
    }
    this.zoomOrNot = this.zoomOrNot.bind(this)
  }

  componentWillUnmount() {
    if (this.currentClickListener) {
      document.removeEventListener('click', this.currentClickListener)
    }
    this.removeCopiedElement()
  }

  zoomOrNot(event) {
    const { isZoom } = this.state

    if (isZoom) {
      this.unzoom()
    } else {
      this.zoom(event)
    }
  }

  removeCopiedElement() {
    if (this.copiedElement && this.copiedElement.remove) {
      this.copiedElement.remove()
    } else if (this.copiedElement && this.copiedElement.parentNode) {
      this.copiedElement.parentNode.removeChild(this.copiedElement)
    }
    this.copiedElement = undefined
  }

  unzoom() {
    if (this.copiedElement) {
      this.copiedElement.style.transform = 'none'
      this.copiedElement.firstChild.style.transform = 'none'
      setTimeout(() => {
        this.removeCopiedElement()
        this.setState({
          isZoom: false,
        })
      }, this.transitionDuration)
    }
  }

  zoom(event) {
    event.stopPropagation()
    const reelElement = this.containerRef.current
    const absolutePosition = reelElement.getBoundingClientRect();
    this.copiedElement = reelElement.cloneNode(true)
    const scaledHeight = reelElement.clientHeight
    const scaledWidth = reelElement.clientWidth
    const self = this

    const windowWidth = window.innerWidth
      || window.innerWidth || document.documentElement.clientWidth
    const windowHeight = window.innerHeight
      || window.innerHeight || document.documentElement.clientHeight

    this.scaleFactor = (windowWidth * 0.7) / reelElement.offsetWidth

    this.copiedElement.classList.add('zoomed')
    this.copiedElement.style.left = `${absolutePosition.left}px`
    this.copiedElement.style.top = `${absolutePosition.top}px`
    this.copiedElement.style.height = `${reelElement.clientHeight}px`
    this.copiedElement.style.width = `${reelElement.clientWidth}px`

    this.currentClickListener = document.addEventListener('click', (e) => {
      e.stopPropagation()
      if (this.currentClickListener) {
        document.removeEventListener('click', this.currentClickListener)
        this.currentClickListener = undefined
      }
      self.unzoom()
    })

    document.getElementsByTagName('body')[0].appendChild(this.copiedElement)
    this.setState({ isZoom: true }, () => {
      setTimeout(() => {
        if (this.copiedElement.firstChild) {
          this.copiedElement.firstChild.style.transform = `scale(${this.scaleFactor})`
        }

        this.copiedElement.style.transform = `
                  translate(
                      calc((${windowWidth / 2}px - ${absolutePosition.left}px - ${scaledWidth / 2}px)),
                      calc((${windowHeight / 2}px - ${absolutePosition.top}px - ${scaledHeight / 2}px))
                  )
              `
      }, 0)
    })
  }

  render() {
    const { children } = this.props
    const { isZoom } = this.state

    return (
      <span>
        <Container onClick={this.zoomOrNot} ref={this.containerRef}>
          <SubContainer>
            {children}
          </SubContainer>
        </Container>
        {isZoom && <Background />}
      </span>
    )
  }
}

export default Zoomable
