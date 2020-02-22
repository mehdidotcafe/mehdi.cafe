import React, {Component} from 'react'

import Medias from '../medias/Medias'

import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-button-container">
          <button className="basic-button"><a className="media-button" aria-label="Envie de me proposer un projet ?" href="mailto:contact@meddou.com">Me proposer un projet ?</a></button>
          <span className="copyright">Copyright @ Mehdi Meddour</span>
        </div>
        <div style={{width: 0, overflow: 'visible'}}>
          <Medias/>
        </div>
      </div>
    )
  }
}

export default Footer
