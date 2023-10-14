import React from 'react'
import "./Contact.css"
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from "react-icons/md"
import { BsWhatsapp } from "react-icons/bs"
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('protfolio_1999', 'template_owdnshj', form.current, 'S-U9yucaoGfI_4EcW')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="container contact-container" id="contact">
      <h5 className='section-heading-text'>Get In Touch</h5>
      <h2 className='section-heading'>Contact</h2>


      <div className="contact-main-container">

        <div className="contact-options">
          <div className="contact-option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>subhadipkundu1000@gmail.com</h5>
            <a href="mailto:subhadipkundu1000@gmail.com" target='_blank' rel="noreferrer">Send a messege</a>
          </div>

          <div className="contact-option">
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+91 8436 7317 10</h5>
            <a href="https://api.whatsapp.com/send?phone=8436731710" target='_blank' rel="noreferrer">Send a messege</a>
          </div>
        </div>
        {/* end of contact options */}


        <form ref={form} className="contact-form" onSubmit={sendEmail}>

          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" id="message" rows="7" required></textarea>
          <button type="submit" value='Send' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </div>

  )
}

export default Contact
