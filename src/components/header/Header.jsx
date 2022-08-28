import React from 'react';

import './header.css';

import me from '../../assets/meByW.jpg';
import CTA from './CTA';
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Portafolio de</h5>
        <h1>Augusto Castro</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={me} alt="" className='me-img'/>
        </div>

        <a href="#contact" className='scroll__down'>Hacia abajo</a>
      </div>
    </header>
  )
}

export default Header