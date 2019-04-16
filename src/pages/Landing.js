import React from 'react'

import { Link } from 'react-router-dom'

import Medias from '../component/medias/Medias'

import Image from '../Image'

import Row from '../layout/row/Row'

import Description from '../component/description/Description'

import BasicPage from './BasicPage'
import RecommendationService from '../services/Recommendation'

import RecommendationSlider from './RecommendationSlider'

import './Landing.css'

class Landing extends BasicPage {
  // because i'm lazy :)
  getAge() {
    var birthday = +new Date("1996-11-14");
    return ~~((Date.now() - birthday) / (31557600000));
  }

  renderContent() {
    return (
        <div className="landing-container">
            <div style={{alignSelf: 'flex-end'}}>
              <Image src="/images-webp/me-transparent-2.png" className="landing-avatar-image" alt="Mehdi Meddour"/>
            </div>
            <div className="info-container">
              <div className="main-text-container">
                <p className="first-text">Bonjour, je suis Mehdi.</p>
                <h1>Développeur Freelance WEB / MOBILE.</h1>
                <span style={{marginTop: '8px'}}>
                  <Description style={{fontSize: '24px'}} text={`Mes diverses expériences à travers une multitude de technologies m'ont permis d’acquérir une expertise des langages de développement sur diverses plateformes.<br/>Je vous accompagne dans la réalisation de votre projet de sa conception à sa livraison.</p>`}/>
                </span>
                <Row className="media-container-row">
                  <Link to="/work" className="link">Voir mes projets</Link>
                  <Medias className="bp-large"></Medias>
                </Row>
              </div>
              <div className="recommendation-slider-container">
                <RecommendationSlider recommendations={RecommendationService.get()}/>
              </div>
            </div>
        </div>
    )
  }
}

export default Landing
