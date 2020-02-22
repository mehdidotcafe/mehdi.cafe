import React from 'react'

import RecommendationService from '../services/Recommendation'

import Title from '../component/title/Title'

import RecommendationSlider from './RecommendationSlider'

function Recommendation() {
  return (
    <div className='sub-basic-page'>
      <Title text='A propos de moi' noMargin />
      <div style={{marginTop: '64px', marginBottom: '64px'}}>
        <div style={{width: '33.3%', display: 'inline-block', verticalAlign: 'top'}}>
          <p style={{fontFamily: 'Roboto'}}>
            Développeur de 22 ans passionné par des projets passionants.
            <br />
            Mes diverses expériences à travers une multitude de technologies m&#39;ont permis d&#39;acquérir une expertise des langages de développement sur diverses plateformes. Je suis capable de vous conseiller dans la réalisation de votre idée et de prendre part à son développement.
            <br />
            Ma formation à EPITECH (école d&#39;ingénieur informatique) m&#39;a apprit à évoluer en permanence dans un monde informatique qui évolue constamment.
          </p>
        </div>
        <div style={{width: '66.6%', display: 'inline-block'}}>
          <RecommendationSlider recommendations={RecommendationService.get()} />
        </div>
      </div>
    </div>
  )
}

export default Recommendation
