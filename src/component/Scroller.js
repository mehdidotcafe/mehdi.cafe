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

    //this.container = this.containerRef.current
    //console.log(props.container)
  }

  bindListener() {
    //console.log(this.containerRef.current)
    this.containerRef.current.addEventListener('scroll', this.onScroll)
  }

  unbindListener() {
    this.containerRef.current.removeEventListener('scroll', this.onScroll)
  }

  getContainerScrollTop() {
    return this.containerRef.current.scrollTop || window.pageYOffset || document.documentElement.scrollTop
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

  scrollToElement(element, index, isSmooth = true) {
    this.scrollTimeout = setTimeout(() => {
      const elementRect = element.getBoundingClientRect()

      this.isScrolling = true
      this.containerRef.current.scrollBy({
        behavior: isSmooth ? 'smooth' : 'auto',
        left: 0,
        top: elementRect.top
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
    }, 0)
  }

  onScroll(e) {
    //return
    var scrollDirectionCoeff = this.getScrollDirection() === true ?  1 : -1

    if (!(this.isScrolling || (this.index + scrollDirectionCoeff) >= this.sectionRefs.length || (this.index + scrollDirectionCoeff) < 0 || e.timeStamp < 2000)) {
      var nextIndex = this.index + scrollDirectionCoeff

      var currentElement = this.sectionRefs[this.index].current.getBoundingClientRect()
      var nextElement = this.sectionRefs[nextIndex].current.getBoundingClientRect()

      if ((scrollDirectionCoeff === 1 && currentElement.top + currentElement.height < this.containerRef.current.clientHeight) ||
      (scrollDirectionCoeff === -1 && nextElement.top + nextElement.height >= 0)) {
        e.preventDefault()
        e.stopPropagation()
        this.nextIndex = nextIndex
        this.notifyOnScroll(nextIndex)
        this.scrollToElement( this.sectionRefs[nextIndex].current, nextIndex)
      } else {
        this.isScrolling = false
      }
    }
  }

  componentDidMount() {
    this.scrollToElement(this.sectionRefs[this.index].current, this.index, false)
    this.bindListener()
  }

  componentWillUnmount() {
    this.unbindListener()
    window.clearInterval(this.scrollInterval)
    window.clearTimeout(this.scrollTimeout)
  }

  componentDidUpdate() {
    if (this.nextIndex !== this.props.index) {
      this.index = this.props.index
      this.scrollToElement(this.sectionRefs[this.index].current, this.props.index)
    }
  }

  render() {
    return (
      <div ref={this.containerRef} style={{height: this.props.height, maxHeight: this.props.height, overflow: 'auto'}}>
        { this.sections.map(child => child) }
      </div>
    )
  }
}

export default Scroller
