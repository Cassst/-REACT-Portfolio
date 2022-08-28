import React,{ useRef } from 'react'

import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('react_portfolio_2022', 'template_tr20oui', form.current, 'DE3zglSYI1RuhVquW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>¿Nos mantenemos en contacto?</h5>
      <h2>Escribime un E-mail!</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>E-mail</h4>
            <h5>augusto.94.castro@gmail.com</h5>
            <a href="mailto:augusto.94.castro@gmail.com" target="_blank" rel="noreferrer">Enviar un correo</a>
          </article>
        </div>
        {/*End of contact option*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nombre' required />
          <input type="email" name="email" placeholder='Email' required/>
          <textarea name="message" rows="7" placeholder='Mensaje' required></textarea>
          <button className="btn btn-primary" type='submit'>Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contact