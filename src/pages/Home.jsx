import React from 'react'
import Carousel from '../components/Carousel'
import Card from '../components/Card'

import Header from '../components/Header'
import Footer from '../components/Footer'


function Home() {
  const slides = [
    { image: "../../assets/images/chips-1.jpg", title: "Back Workout" },
    { image: "../../assets/images/chips-2.jpg", title: "Cardio" },
    { image: "../../assets/images/chips-3.jpg", title: "Strength Training" },
  ]

  return (
    <div>
      <Header />

      {/* ----------hero------- */}
      <div className='home-hero'>
        <div className='home-hero-inner'>
          <div>
            <h1 className='ff-lobster text-spicy'>Crispy, <br /> <span className='text-brown ff-lobster'>Golden,</span>  <br /> Irrestible</h1>

            <a href='' className='chips-button mt-4'>Order-now</a>
          </div>

          <div>
            {/* <Carousel autoSlide={true} autoSlideInterval={1000}>
              <img style={{ width: '80%' }} src='../../assets/images/chips-1.jpg' />
              <img style={{ width: '80%' }} src='../../assets/images/chips-1.jpg' />
              <img style={{ width: '80%' }} src='../../assets/images/chips-1.jpg' />
            </Carousel> */}
          </div>
        </div>
      </div>


      {/* ----------cards-------- */}
      <div className='d-align home-cards'>
        <div>
          <img src='../../assets/icons/salad.png' />
          <h1>100% Natural</h1>
        </div>

        <div>
          <img src='../../assets/icons/calories.png' />
          <h1>Low Calories</h1>
        </div>

        <div>
          <img src='../../assets/icons/hand-holding-leaves.png' />
          <h1>Natural Flavour</h1>
        </div>
      </div>

      {/* --------------chips type--------------- */}
      <div className='home-chips-type'>
        <div>
          <div className='home-chip d-align mb-5 gap-5'>
            <div>
              <img className='home-chip-img' src='../../assets/images/chips-2.jpg' />
            </div>

            <div>
              <h1 className='fs-1 fw-bold'>Plantain Chips</h1>
              <h3 className='fs-3 text-spicy fw-bold ff-lobster' style={{letterSpacing: '5px'}}>Ripe</h3>

              <div>
                <img src='../../assets/icons/star.png' />
                <img src='../../assets/icons/star.png' />
                <img src='../../assets/icons/star.png' />
                <img src='../../assets/icons/star.png' />
                <img src='../../assets/icons/star.png' />
              </div>
            </div>
          </div>

          <div>

          </div>
        </div>

        <div className='d-align justify-content-end'>
          <a className='chips-button'>View More</a>
        </div>
      </div>

      {/* ----------------------------- */}
      <div className='home-about'>
        <div>
          <h1 className='text-spicy ff-lobster'>From Chris</h1>
          <p>Born from a love of tasty, homemade snacks, our chips are made with care, seasoned to perfection, and always fresh.<hr /> <br />Whether you’re sharing with friends or enjoying a quiet snack, our chips bring joy to every bite</p>
        </div>
      </div>

      <div className='home-cta-card'>
        <Card />
      </div>





      <Footer />

    </div>
  )
}

export default Home