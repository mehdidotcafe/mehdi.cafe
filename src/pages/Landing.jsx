import React from 'react'

import { Link } from 'react-router-dom'

import Medias from '../component/medias/Medias'

// import Image from '../Image'

import Row from '../layout/row/Row'

import Description from '../component/description/Description'

import BasicPage from './BasicPage'
// import RecommendationService from '../services/Recommendation'

// import RecommendationSlider from './RecommendationSlider'

import './Landing.css'

class Landing extends BasicPage {
  // because i'm lazy :)
  static getAge() {
    const birthday = +new Date('1996-11-14');
    return ~~((Date.now() - birthday) / (31557600000));
  }

  static isDay() {
    const date = new Date()
    const hours = date.getHours()

    return hours >= 6 && hours < 17
  }

  renderContent() {
    return (
      <div className="landing-container">
        <div className="landing-background" />
        <div className="info-container">
          <div className="main-text-container">
            <h2 className="first-text">
              {Landing.isDay() ? 'Bonjour' : 'Bonsoir'}
              , je suis Mehdi.
            </h2>
            <h1>Développeur Freelance WEB / MOBILE.</h1>
            <span style={{marginTop: '8px'}}>
              <Description
                style={{fontSize: '1.75em', margin: '2em 0'}}
                text="Mes expériences à travers une multitude de technologies m'ont permis d’acquérir une expertise des langages de développement de site internet et d'application mobile.<br/>Je vous accompagne dans la réalisation de votre projet de sa conception à sa livraison."
              />
            </span>
            <Row className="media-container-row">
              <Link to="/work" className="link">Voir mes projets</Link>
              <Medias className="bp-large" />
            </Row>
          </div>
          {/* <div className="recommendation-slider-container">
            <RecommendationSlider recommendations={RecommendationService.get()} />
          </div> */}
        </div>
        <div style={{alignSelf: 'center', zIndex: 2}}>
          <img
            src="/images-webp/mehdi_3.png"
            className="landing-avatar-image"
            alt="Mehdi Meddour"
          />
        </div>
      </div>
    )
  }
}

export default Landing
