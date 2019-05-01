import React, {Component} from 'react'

class Scroller extends Component {
  index = 0
  nextIndex = 0
  containerRef = React.createRef()
  sectionRefs = []
  lastScrollTop = 0
  isScrolling = false

  scrollInterval = undefined
  scrollTimeout = undefined

  constructor(props) {
    super(props)

    this.sections = React.Children.map(this.props.children, child => {
      var ref = React.createRef()

      this.sectionRefs.push(ref)
      return <div ref={ref}>{child}</div>
    })

    this.index = this.props.index || 0

    this.nextIndex = this.props.index || 0

    this.onScroll = this.onScroll.bind(this)

    this.container = document.querySelector('html')
    //this.container = this.containerRef.current
  }

  bindListener() {
    window.addEventListener('scroll', this.onScroll)
  }

  unbindListener() {
    window.removeEventListener('scroll', this.onScroll)
  }

  getContainerScrollTop() {
    return this.container.scrollTop || window.pageYOffset || document.documentElement.scrollTop
    // return this.containerRef.current.scrollTop || window.pageYOffset || document.documentElement.scrollTop
  }

  getScrollDirection() {
    var st = this.getContainerScrollTop()
    var ret = st > this.lastScrollTop

    this.lastScrollTop = st <= 0 ? 0 : st
    return ret
  }

  notifyOnScroll(index) {
    this.props.onScroll && this.props.onScroll(index)
  }

  scrollToElement(elementRect, index, isSmooth = true) {
    const top = this.getContainerScrollTop()

      this.isScrolling = true
      // this.containerRef.current
      this.scrollTimeout = setTimeout(() => {
        window.scrollTo({
          behavior: isSmooth ? 'smooth' : 'instant',
          left: 0,
          top: top + elementRect.top
        })

        if (this.scrollInterval) {
          window.clearInterval(this.scrollInterval)
        }
        this.scrollInterval = window.setInterval(() => {
          if (elementRect.top <= this.getContainerScrollTop()) {
            this.isScrolling = false
            this.index = index
            this.nextIndex = index
            window.clearInterval(this.scrollInterval)
          }
        }, 1000)

      }, 10)

  }

  onScroll(e) {
    var scrollDirectionCoeff = this.getScrollDirection() === true ?  1 : -1

    if (!(this.isScrolling || (this.index + scrollDirectionCoeff) >= this.sectionRefs.length || (this.index + scrollDirectionCoeff) < 0 || e.timeStamp < 2000)) {
      var nextIndex = this.index + scrollDirectionCoeff

      var currentElement = this.sectionRefs[this.index].current.getBoundingClientRect()
      var nextElement = this.sectionRefs[nextIndex].current.getBoundingClientRect()

      // this.containerRef.current
      if ((scrollDirectionCoeff === 1 && currentElement.top + currentElement.height < this.container.clientHeight) ||
      (scrollDirectionCoeff === -1 && nextElement.top + nextElement.height >= 0)) {
        e.preventDefault()
        e.stopPropagation()
        this.nextIndex = nextIndex
        this.notifyOnScroll(nextIndex)
        this.scrollToElement(nextElement, nextIndex)
      } else {
        this.isScrolling = false
      }
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.scrollToElement(this.sectionRefs[this.index].current.getBoundingClientRect(), this.index, false)
      this.bindListener()
    }, 1)
  }

  componentWillUnmount() {
    this.unbindListener()
    window.clearInterval(this.scrollInterval)
    window.clearTimeout(this.scrollTimeout)
  }

  componentDidUpdate() {
    if (this.nextIndex !== this.props.index) {
      this.index = this.props.index
      this.scrollToElement(this.sectionRefs[this.index].current.getBoundingClientRect(), this.props.index)
    }
  }

  render() {
    return (
      <div ref={this.containerRef}>
        { this.sections.map(child => child) }
      </div>
    )
  }
}

export default Scroller
