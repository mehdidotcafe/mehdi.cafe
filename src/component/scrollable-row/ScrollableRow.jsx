import React, { Component } from 'react'

import Row from '../../layout/row/Row'

class ScrollableRow extends Component {
  constructor(props) {
    super(props)

    this.elementRefs = []

    this.index = 1

    this.containerRef = React.createRef()

    this.intervalId = undefined

    for (let i = 0; i < props.children.length; i += 1) {
      this.elementRefs.push(React.createRef())
    }
    this.setContainerRef = this.setContainerRef.bind(this)
  }

  componentDidMount() {
    let direction = 1
    const { step } = this.props

    if (step) {
      this.intervalId = setInterval(() => {
        this.containerRef.scrollBy({ left: step * direction, behavior: 'smooth' })
        if ((direction === 1
          && this.containerRef.scrollLeft + this.containerRef.clientWidth
            >= this.containerRef.scrollWidth)
          || (direction === -1 && this.containerRef.scrollLeft === 0)) {
          direction *= -1
        }
      }, 1500)
    }
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  }

  setContainerRef(ref) {
    this.containerRef = ref
  }

  render() {
    const { style, className, children } = this.props

    return (
      <Row style={style} customRef={this.setContainerRef} noWrap className={className}>
        {children.map((child, idx) => (
          // eslint-disable-next-line
          <span ref={this.elementRefs[idx]} key={idx}>
            {child}
          </span>
        ))}
      </Row>
    )
  }
}

export default ScrollableRow
