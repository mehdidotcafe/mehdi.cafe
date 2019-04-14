import React, {Component} from 'react'

import './MainSlider.css'

class MainSlider extends Component {
  constructor(props) {
    super(props)

    this.slideRefs = []

    this.containerRef = React.createRef()

    for (var i = 0; i < props.slides.length; i++) {
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
    this.containerRef.current.scrollTo(this.slideRefs[this.props.currentSlide].current.offsetLeft, 0)
  }

  render() {
    return (
      <div id="main-slider" ref={this.containerRef}>
        {this.props.slides.map((slide, idx) => (
          <span ref={this.slideRefs[idx]}  className="basic-page" key={idx}>
            { slide }
          </span>
        ))}
      </div>
    )
  }
}

export default MainSlider
