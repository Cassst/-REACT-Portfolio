import React from 'react'

import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {FaGlobe} from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/augusto-castro/" rel="noopener noreferrer" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Cassst" rel="noopener noreferrer"                   target="_blank"><BsGithub /></a>
        <a href="https://cassst.github.io/Augusto-Castro/" rel="noopener noreferrer"    target="_blank"><FaGlobe/></a>
    </div>
  )
}

export default HeaderSocials