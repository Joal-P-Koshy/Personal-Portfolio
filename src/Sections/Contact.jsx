import React from 'react'
import "../Styles/Contact.css"


function Contact() {
  return (
    <>
      <section className="contact">
        <div className="sec-head" data-aos = 'fade-up' data-aos-duration="1000">
          <p>Contact</p>
        </div>
        <hr data-aos = 'zoom-in' data-aos-duration="2000"/>
        <div className="contact-icons" data-aos = 'fade-right' data-aos-duration="2000">
          <a href="https://wa.me/9778342389" target='_blank' data-aos = 'fade-right' data-aos-duration="600">
            <i class="fa-brands fa-whatsapp whatsapp"></i>
          </a>
          <a href="https://github.com/Joal-P-Koshy" target='_blank'data-aos = 'fade-right' data-aos-duration="800">
            <i class="fa-brands fa-github git"></i>
          </a>
          <a href="www.linkedin.com/in/joal-p-koshy-a82110297" target='_blank'data-aos = 'fade-right' data-aos-duration="1000">
            <i class="fa-brands fa-linkedin linkedin"></i>
          </a>
          <a href="https://www.instagram.com/mr_spydo?igsh=cHIxODF5MG1oY3lq" target='_blank'data-aos = 'fade-right' data-aos-duration="1200">
            <i class="fa-brands fa-instagram insta"></i>
          </a>
          <a href="mailto:joalpkoshyy@gmail.com" target='_blank'data-aos = 'fade-right' data-aos-duration="1400">
            <i class="fa-solid fa-envelope mail"></i>
          </a>
        </div>
      </section>
    </>
  )
}

export default Contact