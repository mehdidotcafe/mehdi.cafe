import React, {Component} from 'react'
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

    this.sections = React.Children.map(props.children, child => {
      var ref = React.createRef()

      this.sectionRefs.push(ref)
      return <div ref={ref}>{child}</div>
    })

    this.index = props.index || 0

    this.nextIndex = props.index || 0

    this.scrollTimerFx = this.scrollTimerFx.bind(this)
  }

  componentDidMount() {
    this.container = this.props.container || this.containerRef.current || document.querySelector('html')

    this.isScrolling = true
    this.scrollToElement(this.sectionRefs[this.index].current, this.index, false)
    this.bindListener()
  }

  componentDidUpdate() {
    const {index} = this.props

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
    var scrollDirectionCoeff = this.getScrollDirection() === true ?  1 : -1

    if ((this.index + scrollDirectionCoeff) < this.sectionRefs.length && (this.index + scrollDirectionCoeff) >= 0 && e.timeStamp >= 2000) {
      var nextIndex = this.index + scrollDirectionCoeff

      // console.log('scroll start')
      var currentElement = this.sectionRefs[this.index].current.getBoundingClientRect()
      var nextElement = this.sectionRefs[nextIndex].current.getBoundingClientRect()

      // console.log(scrollDirectionCoeff, this.sectionRefs[this.index].current,  this.sectionRefs[nextIndex].current)
      if ((scrollDirectionCoeff === 1 && currentElement.top + currentElement.height < this.getContainerBounding().height) ||
      (scrollDirectionCoeff === -1 && nextElement.top + nextElement.height >= 0)) {
        e.preventDefault()
        e.stopPropagation()
        this.nextIndex = nextIndex
        this.notifyOnScroll(nextIndex)
        this.scrollToElement(this.sectionRefs[nextIndex].current, nextIndex)
      }/* else {
         this.isScrolling = false
      }*/
    }
  }

  getContainerBounding() {
    return this.container.getBoundingClientRect()
  }

  getContainerScrollTop() {
    return this.container.scrollTop || window.pageYOffset || document.documentElement.scrollTop
  }

  getScrollDirection() {
    var st = this.getContainerScrollTop()
    var ret = st > this.lastScrollTop

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
      top: top + elementRect.top
    })

    this.index = index
    this.nextIndex = index
  }

  notifyOnScroll(index) {
    const {onScroll} = this.props

    onScroll && onScroll(index)
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
          this.canScrollTimeout = window.setTimeout(() => this.canScroll = true, 500)
        } else {
          this.isScrolling = true
          this.onScroll(e)
        }
      }, 100);
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
    return (
      <div ref={this.containerRef} className={["scroller-main-container", this.props.className || ''].join(' ')}>
        { this.sections.map(child => child) }
      </div>
    )
  }
}

Scroller.propTypes = {
  index: PropTypes.number.isRequired,
  children: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
  onScroll: PropTypes.func.isRequired
}

export default Scroller
