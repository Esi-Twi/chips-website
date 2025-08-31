import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'


function Contact() {
  return (
    <div>
      <Header />

      {/* ----------contact hero----------------- */}
      <div className='contact-hero'>
        {/* <img src='../../assets/images/background-2.jpg'/> */}
        <div>
          <p className='ff-lobster text-green'>Let’s Get Crispy Together!</p>
          <h1 className='ff-lobster text-spicy'>Place Your Order Today</h1>
        </div>
      </div>

      {/* ------------form ------------ */}
      <div className='row contact-inner gap-5'>
        <div className='col-md-4 contact-info'>
          <div className='contact-detail'>
            <img src='../../assets/icons/phone-call.png'/>

            <div>
              <p>Phone Number</p>
              <h1>054 463 6828</h1>
            </div>
          </div>

           <div className='contact-detail'>
            <img src='../../assets/icons/email.png'/>

            <div>
              <p>Email</p>
              <h1>Christabelchips@gmail.com</h1>
            </div>
          </div>

           <div className='contact-detail'>
            <img src='../../assets/icons/whatsapp.png'/>

            <div>
              <p>Whatsapp Number</p>
              <h1>054 463 6828</h1>
            </div>
          </div>

           <div className='contact-detail'>
            <img src='../../assets/icons/pin.png'/>

            <div>
              <p>Location</p>
              <h1>TF Hostel</h1>
            </div>
          </div>
        </div>

        <div className='col-md-6 contact-form'>
          <h1 className='ff-lobster'>Contact Form</h1>
          
          <form>
            <input type='text' placeholder='Name'/>
            <input type='text' placeholder='Phone Number'/>
            <input type='email' placeholder='Email'/>
            <textarea  rows={5} placeholder='Message'/>

            <button>Send</button>
          </form>
        </div>
      </div>

      {/* ---------map---------------- */}
      <div>

      
      </div>

      <Footer />

    </div>
  )
}

export default Contact