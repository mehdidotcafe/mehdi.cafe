import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'

import Image from '../Image'
import SubTitle from '../component/sub-title/SubTitle'
import Description from '../component/description/Description'

import './RecommendationSlider.css'

import './slick.min.css'

class RecommendationSlider extends Component {
  constructor(props) {
    super(props)

    this.settings = {
      dots: true,
      arrows: true,
      infinite: true,
    }
  }

  render() {
    const { recommendations } = this.props

    return (
      <div className="recommendation-slider">
        <SubTitle text="Quelques recommendations" style={{ textTransform: 'initial', marginBottom: '4px', fontSize: '26px' }} />
        <Slider
          dots={this.settings.dots}
          arrows={this.settings.arrows}
          inifine={this.settings.infinite}
        >
          { recommendations.map((recommendation) => (
            <div className="recommendation-slide" key={recommendation.id}>
              <Image className="recommendation-author-image" src={`/images-webp/recommendations/${recommendation.img}`} alt={recommendation.author} />
              <div className="recommendation-author-info">
                <div className="recommendation-author-name">
                  {recommendation.author}
                </div>
                {
                  recommendation.author_job
                  && <div className="recommendation-author-job">{recommendation.author_job}</div>
                }
              </div>
              <Description text={recommendation.content} style={{ fontSize: '18px' }} />
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}

RecommendationSlider.propTypes = {
  recommendations: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
}

export default RecommendationSlider
