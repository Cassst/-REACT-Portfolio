import React from 'react'
import cv from '../../assets/AC_cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={cv} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contacto</a>

    </div>
  )
}

export default CTA