import React from 'react';

import './header.css';

import me from '../../assets/me.png';
import CTA from './CTA';
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Portafolio de</h5>
        <h1>Augusto Castro</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={me} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Hacia abajo</a>
      </div>
    </header>
  )
}

export default Header