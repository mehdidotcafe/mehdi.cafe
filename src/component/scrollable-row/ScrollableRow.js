import React, {Component} from 'react'

import Row from '../../layout/row/Row'

class ScrollableRow extends Component {
  elementRefs = []

  index = 1

  containerRef = React.createRef()

  intervalId = undefined

  constructor(props) {
    super(props)

    for (var i = 0; i < this.props.children.length; i++) {
      this.elementRefs.push(React.createRef())
    }
  }

  componentDidMount() {
      let direction = 1

      if (this.props.step) {
        this.intervalId = setInterval(() => {
          this.containerRef.scrollBy({left: this.props.step * direction, behavior: 'smooth'})
          if ((direction === 1 && this.containerRef.scrollLeft + this.containerRef.clientWidth >= this.containerRef.scrollWidth)
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

  render() {
    return (
      <Row style={this.props.style} customRef={ref => (this.containerRef = ref)} noWrap className={this.props.className}>
        {this.props.children.map((child, idx) => (
          <span ref={this.elementRefs[idx]} key={idx}>
            {child}
          </span>
        ))}
      </Row>
    )
  }
}

export default ScrollableRow
