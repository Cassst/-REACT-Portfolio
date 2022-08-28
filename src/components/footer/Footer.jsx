import React from 'react'

import './footer.css'

import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {FaGlobe} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>Augusto C.</a>

      <ul className="permalinks">
        <li><a href="#about">Sobre mi</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/augusto-castro/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Cassst" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://cassst.github.io/Augusto-Castro/" rel="noopener noreferrer"    target="_blank"><FaGlobe/></a>
      </div>

      <div className="footer_copyright">
        <small>
          &copy; Augusto Castro - 2022
        </small>
      </div>
    </footer>
  )
}

export default Footer