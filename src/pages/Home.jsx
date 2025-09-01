import React from 'react'
import Card from '../components/Card'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from '../components/Header'
import Footer from '../components/Footer'


function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 2000,
    cssEase: "ease"
  };

  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />
  };

  return (
    <div>
      <Header />

      {/* ----------hero------- */}
      <div className='home-hero px-md-5'>
        <div className='row gap-5 d-flex align-items-center home-hero-inner px-md-5 px-2 py-md-0 py-3'>
          <div className='col-lg-4 col-md-5 py-lg-0 py-md-4'> 
            <h1 className='ff-lobster text-spicy d-lg-block d-none' style={{fontSize: '110px'}}>Crispy, <br /> <span className='text-brown ff-lobster'>Golden,</span>  <br /> Irrestible</h1>
            <h1 className='ff-lobster text-spicy d-lg-none d-block' style={{fontSize: '70px'}}>Crispy, <br /> <span className='text-brown ff-lobster'>Golden,</span>  <br /> Irrestible</h1>

            <a href='' className='chips-button mt-4'>Order-now</a>
          </div>

          <div className="slider-container col-md-6 px-md-0 px-4">
            <Slider {...settings}>
              <div>
                <img className='home-hero-img' src='../../assets/images/chips-5.jpg' />
              </div>
              <div>
                <img className='home-hero-img' src='../../assets/images/chips-4.jpg' />
              </div>
              <div>
                <img className='home-hero-img' src='../../assets/images/chips-3.jpg' />
              </div>
            </Slider>
          </div>
        </div>
      </div>


      {/* ----------cards-------- */}
      <div className='d-align home-cards px-md-0 px-3'>
        <div>
          <img src='../../assets/icons/salad.png' />
          <h1 className='fs-md-2 fs-4'>100% Natural</h1>
        </div>

        <div>
          <img src='../../assets/icons/calories.png' />
          <h1 className='fs-md-2 fs-4'>Low Calories</h1>
        </div>

        <div>
          <img src='../../assets/icons/hand-holding-leaves.png' />
          <h1 className='fs-md-2 fs-4'>Natural Flavour</h1>
        </div>
      </div>

      {/* --------------chips type--------------- */}
      <div className='home-chips-type row'>
        <div className="slider-container mb-5 px-md-0 px-5 col-lg-6 col-md-10">
          <Slider {...settings2}>
            {/* -------ripe----- */}
            <div className='home-chip d-flex align-items-center f-col gap-4'>
              <div className='w-50'>
                <img className='home-chip-img' src='../../assets/images/chips-2.jpg' />
              </div>

              <div>
                <h1 className='fs-1 fw-bold'>Plantain Chips</h1>
                <h3 className='fs-3 text-spicy fw-bold ff-lobster' style={{ letterSpacing: '5px' }}>Ripe</h3>

                <div className='d-flex align-items-center'>
                  <img src='../../assets/icons/star.png' />
                  <img src='../../assets/icons/star.png' />
                  <img src='../../assets/icons/star.png' />
                  <img src='../../assets/icons/star.png' />
                  <img src='../../assets/icons/star.png' />
                </div>
              </div>
            </div>

            {/* -------unripe----- */}
            <div className='home-chip d-flex align-items-center gap-4'>
              <div className='w-50'>
                <img className='home-chip-img' src='../../assets/images/chips-3.jpg' />
              </div>

              <div>
                <h1 className='fs-1 fw-bold'>Plantain Chips</h1>
                <h3 className='fs-3 text-spicy fw-bold ff-lobster' style={{ letterSpacing: '5px' }}>UnRipe</h3>

                <div className='d-flex align-items-center'>
                  <img src='../../assets/icons/star.png' />
                  <img src='../../assets/icons/star.png' />
                  <img src='../../assets/icons/star.png' />
                  <img src='../../assets/icons/star.png' />
                  <img src='../../assets/icons/star.png' />
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <div className='d-align justify-content-center'>
          <a className='chips-button'>View More</a>
        </div>
      </div>

      {/* ----------------------------- */}
      <div className='home-about row'>
        <div className='col-md-6 col-11 py-md-5 mx-md-5'>
          <h1 className='text-spicy fs-1 ff-lobster'>From Christabel</h1>
          <p>Born from a love of tasty, homemade snacks, our chips are made with care, seasoned to perfection, and always fresh.<hr /> <br />Whether you’re sharing with friends or enjoying a quiet snack, our chips bring joy to every bite</p>
        </div>
      </div>

      <div className='home-cta-card px-md-5 px-4'>
        <Card />
      </div>

      <Footer />

    </div>
  )
}

export default Home