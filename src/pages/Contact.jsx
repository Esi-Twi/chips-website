import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'


function Contact() {
  return (
    <div>
      <Header />

      {/* ----------contact hero----------------- */}
      <div className='contact-hero mx-md-5 mx-4'>
        {/* <img src='../../assets/images/background-2.jpg'/> */}
        <div className='mx-md-5'>
          <p className='ff-lobster text-green display-md-5 fs-2 '>Let’s Get Crispy Together!</p>
          <h1 className='ff-lobster text-spicy display-md-1 display-4'>Place Your Order Today</h1>
        </div>
      </div>

      {/* ------------form ------------ */}
      <div className='row contact-inner gap-4 d-align justify-content-center px-md-0 px-4'>
        <div className='col-lg-4 col-md-5 contact-info'>
          <div className='contact-detail'>
            <img src='../../assets/icons/phone-call.png' />

            <div>
              <p>Phone Number</p>
              <h1>054 463 6828</h1>
            </div>
          </div>

          <div className='contact-detail'>
            <img src='../../assets/icons/email.png' />

            <div>
              <p>Email</p>
              <h1>Christabelchips@gmail.com</h1>
            </div>
          </div>

          <div className='contact-detail'>
            <img src='../../assets/icons/whatsapp.png' />

            <div>
              <p>Whatsapp Number</p>
              <h1>054 463 6828</h1>
            </div>
          </div>

          <div className='contact-detail'>
            <img src='../../assets/icons/pin.png' />

            <div>
              <p>Location</p>
              <h1>TF Hostel</h1>
            </div>
          </div>
        </div>

        <div className='col-lg-4 col-md-5 contact-form'>
          <h1 className='ff-lobster'>Contact Form</h1>

          <form>
            <input type='text' placeholder='Name' />
            <input type='text' placeholder='Phone Number' />
            <input type='email' placeholder='Email' />
            <textarea rows={5} placeholder='Message' />
            <button className='chips-button'>Send</button>
          </form>
        </div>
      </div>

      {/* ---------map---------------- */}
      <div className='map-container px-md-5 px-3'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508838!2d144.9537353153159!3d-37.81720997975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAyLjAiUyAxNDTCsDU3JzE0LjMiRQ!5e0!3m2!1sen!2sgh!4v1618533381245!5m2!1sen!2sgh"
          style={{ border: 0, width: '100%', height: '100%' }}
          className='px-md-5'
          allowFullScreen=""
          loading="lazy">
        </iframe>
      </div>

      <Footer />

    </div>
  )
}

export default Contact