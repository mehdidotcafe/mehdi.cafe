import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './MainSlider.css'

class MainSlider extends Component {
  constructor(props) {
    super(props)

    this.slideRefs = []

    this.containerRef = React.createRef()

    for (let i = 0; i < props.slides.length; i += 1) {
      this.slideRefs.push(React.createRef())
    }
  }

  componentDidMount() {
    this.scrollToSlide()
  }

  componentDidUpdate() {
    this.scrollToSlide()
  }

  scrollToSlide() {
    const { currentSlide } = this.props

    this.containerRef.current.scrollTo(this.slideRefs[currentSlide].current.offsetLeft, 0)
  }

  render() {
    const { slides } = this.props

    return (
      <div id="main-slider" ref={this.containerRef}>
        {slides.map((slide, idx) => (
          <span ref={this.slideRefs[idx]} className="basic-page" key={slide}>
            { slide }
          </span>
        ))}
      </div>
    )
  }
}

MainSlider.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  slides: PropTypes.arrayOf(PropTypes.symbol.isRequired).isRequired,
}

export default MainSlider
