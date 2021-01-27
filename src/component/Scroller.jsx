import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Scroller extends Component {
  constructor(props) {
    super(props)

    this.containerRef = React.createRef()
    this.sectionRefs = []
    this.lastScrollTop = 0
    this.isScrolling = false
    this.canScroll = true

    this.scrollTimeout = undefined
    this.scrollTimer = undefined
    this.canScrollTimeout = undefined

    this.sections = React.Children.map(props.children, (child) => {
      const ref = React.createRef()

      this.sectionRefs.push(ref)
      return <div ref={ref}>{child}</div>
    })

    this.index = props.index || 0

    this.nextIndex = props.index || 0

    this.scrollTimerFx = this.scrollTimerFx.bind(this)
  }

  componentDidMount() {
    const { container } = this.props
    this.container = container || this.containerRef.current || document.querySelector('html')

    this.isScrolling = true
    this.scrollToElement(this.sectionRefs[this.index].current, this.index, false)
    this.bindListener()
  }

  componentDidUpdate() {
    const { index } = this.props

    if (this.nextIndex !== index) {
      this.index = index
      this.isScrolling = true
      this.scrollToElement(this.sectionRefs[this.index].current, index)
    }
  }

  componentWillUnmount() {
    this.unbindListener()
    window.clearTimeout(this.scrollTimeout)
    window.clearTimeout(this.canScrollTimeout)
  }

  onScroll(e) {
    const scrollDirectionCoeff = this.getScrollDirection() === true ? 1 : -1

    if ((this.index + scrollDirectionCoeff) < this.sectionRefs.length
      && (this.index + scrollDirectionCoeff) >= 0 && e.timeStamp >= 1000) {
      const nextIndex = this.index + scrollDirectionCoeff

      const nextElement = this.sectionRefs[nextIndex].current.getBoundingClientRect()

      if ((scrollDirectionCoeff === 1)
      || (scrollDirectionCoeff === -1 && nextElement.top + nextElement.height >= 0)) {
        e.preventDefault()
        e.stopPropagation()
        this.nextIndex = nextIndex
        this.notifyOnScroll(nextIndex)
        this.scrollToElement(this.sectionRefs[nextIndex].current, nextIndex)
      }
    }
  }

  getContainerBounding() {
    return this.container.getBoundingClientRect()
  }

  getContainerScrollTop() {
    return this.container.scrollTop || window.pageYOffset || document.documentElement.scrollTop
  }

  getScrollDirection() {
    const st = this.getContainerScrollTop()
    const ret = st > this.lastScrollTop

    this.lastScrollTop = st <= 0 ? 0 : st
    return ret
  }

  scrollToElement(element, index, isSmooth = true) {
    const top = this.getContainerScrollTop()
    const elementRect = element.getBoundingClientRect()

    // this.isScrolling = true
    this.container.scrollTo({
      behavior: isSmooth ? 'smooth' : 'instant',
      left: 0,
      top: top + elementRect.top,
    })

    this.index = index
    this.nextIndex = index
  }

  notifyOnScroll(index) {
    const { onScroll } = this.props

    if (onScroll) {
      onScroll(index)
    }
  }

  scrollTimerFx(e) {
    if (this.canScroll) {
      /**
       * @LINK https://stackoverflow.com/questions/4620906/how-do-i-know-when-ive-stopped-scrolling
       */
      if (this.scrollTimer !== null) {
        clearTimeout(this.scrollTimer);
      }
      this.scrollTimer = setTimeout(() => {
        if (this.isScrolling) {
          this.canScroll = false
          this.getScrollDirection()
          this.isScrolling = false
          this.canScrollTimeout = window.setTimeout(() => {
            this.canScroll = true
          }, 50)
        } else {
          this.isScrolling = true
          this.onScroll(e)
        }
      }, 150);
    } else {
      this.getScrollDirection()
    }
  }

  bindListener() {
    this.container.addEventListener('scroll', this.scrollTimerFx)
  }

  unbindListener() {
    this.container.removeEventListener('scroll', this.scrollTimerFx)
  }

  render() {
    const { className } = this.props

    return (
      <div ref={this.containerRef} className={['scroller-main-container', className || ''].join(' ')}>
        { this.sections.map((child) => child) }
      </div>
    )
  }
}

Scroller.propTypes = {
  index: PropTypes.number.isRequired,
  children: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
  onScroll: PropTypes.func.isRequired,
}

export default Scroller
