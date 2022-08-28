import React from 'react'
import { VscGithub } from 'react-icons/vsc'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { SiVisualstudio } from 'react-icons/si'

import './about.css'
import me from '../../assets/meByW.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>¿Más sobre mí?</h5>
      <h2>Con gusto!</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="AboutImage" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
              <article className="about__card">
                <VscGithub className='about__icon' />
                <h5>GitHub</h5>
                <small>15+ Proyectos</small>
              </article>

              <article className="about__card">
                <AiOutlineLinkedin className='about__icon' />
                <h5>Linkedin</h5>
                <small>500+ Contactos</small>
              </article>

              <article className="about__card">
                <SiVisualstudio className='about__icon' />
                <h5>Tecnologías</h5>
                <small>11+ Aprendidas</small>
              </article>
          </div>
          <p>
          Mi meta es convertirme en un profesional lo más completo posible, 
          con habilidades y experiencias adquiridas a lo largo de proyectos y estudios.
          Por lo cual estoy listo para superar los próximos desafios que vendrán 
          </p>

          <a href="#contact" className='btn btn-primary'>¿Nos ponemos en contacto?</a>
        </div>
      </div>
    </section>
  )
}

export default About