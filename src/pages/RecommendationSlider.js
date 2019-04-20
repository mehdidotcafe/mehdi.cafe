import React, {Component} from 'react'

import Image from '../Image'

import SubTitle from '../component/sub-title/SubTitle'

import Description from '../component/description/Description'

import './RecommendationSlider.css'

import Slider from 'react-slick';

class RecommendationSlider extends Component {
  constructor(props) {
    super(props)

    this.settings = {
      dots: true,
      arrows: true,
      infinite: true
    }
  }

  render() {
    return (
      <div className="recommendation-slider">
        <SubTitle text="Ils ont collaboré avec moi" style={{textTransform: 'initial', marginBottom: '4px', fontSize: '26px'}}></SubTitle>
        <Slider {...this.settings} >
        { this.props.recommendations.map(recommendation => (
          <div className="recommendation-slide" key={recommendation.id}>
            <Image className="recommendation-author-image" src={`/images-webp/recommendations/${recommendation.img}`} alt={recommendation.author}></Image>
            <div className="recommendation-author-info">
              <div className="recommendation-author-name">{recommendation.author}</div>
              { recommendation.author_job &&
                <div className="recommendation-author-job">{recommendation.author_job}</div>
              }
            </div>
            <Description text={recommendation.content} style={{fontSize: '18px'}}/>
          </div>
        ))}
        </Slider>
      </div>
    )
  }
}

export default RecommendationSlider
