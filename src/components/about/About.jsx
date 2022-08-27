import React from 'react'
import { VscGithub } from 'react-icons/vsc'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { SiVisualstudio } from 'react-icons/si'

import './about.css'
import me from '../../assets/me-about.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>¿Más sobre mí?</h5>
      <h2>qwee</h2>

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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam facere, praesentium vitae maxime eligendi animi, placeat distinctio et laudantium, esse aperiam libero quae voluptate cumque voluptatibus consequatur iure repellendus sit?</p>

          <a href="#contact" className='btn btn-primary'>Lets talk</a>
        </div>
      </div>
    </section>
  )
}

export default About