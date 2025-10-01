import React, { useState } from 'react'
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

  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      image: "../../assets/images/chips-2.jpg",
      title: "Plantain Chips",
      status: "UnRipe",
      rating: 5
    },
    {
      image: "../../assets/images/chips-3.jpg",
      title: "Plantain Chips",
      status: "Ripe",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <Header />

      {/* ----------hero------- */}
      <div className='home-hero px-md-5'>
        <div className='row gap-8 justify-content-between home-hero-inner px-md-5 px-2 py-md-0 py-3'>
          {/* <div className='row gap-8 d-flex align-items-center home-hero-inner px-md-5 px-2 py-md-0 py-3'> */}
          <div className='col-lg-4 col-md-5 py-lg-0 py-md-4'>
            <h1 className='ff-lobster text-spicy d-lg-block d-none' style={{ fontSize: '110px' }}>Crispy, <br /> <span className='text-brown ff-lobster'>Golden,</span>  <br /> Irrestible</h1>
            <h1 className='ff-lobster text-spicy d-lg-none d-block' style={{ fontSize: '70px' }}>Crispy, <br /> <span className='text-brown ff-lobster'>Golden,</span>  <br /> Irrestible</h1>

            <a href='' className='chips-button mt-4'>Order-now</a>
          </div>

          <div className="slider-container col-md-6 px-md-0 px-4 mt-md-0 mt-5">
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
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div style={{ width: '90%', minWidth: '80%'}}>
          <div className="position-relative">
            {/* Carousel Container */}
            <div className="d-flex align-items-center bg-white rounded overflow-hidden">
              {/* Previous Arrow */}
              <button
                onClick={prevSlide}
                className="btn border-0 p-3"
                style={{
                  backgroundColor: 'transparent',
                  fontSize: '2rem',
                  color: '#28a745',
                  transition: 'all 0.3s ease',
                  zIndex: 10
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#218838';
                  e.currentTarget.style.transform = 'scale(1.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#28a745';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 8 8 12 12 16" />
                  <line x1="16" y1="12" x2="8" y2="12" />
                </svg>
              </button>

              {/* Slide Content */}
              <div className="row w-100 m-0 align-items-center py-4">
                {/* Image Section */}
                <div className="col-md-6 text-center">
                  <img
                    src={slides[activeIndex].image}
                    alt={slides[activeIndex].title}
                    className="img-fluid rounded"
                    style={{
                      width: '90%',
                      height: 'auto',
                      objectFit: 'cover',
                      maxHeight: '400px'
                    }}
                  />
                </div>

                {/* Text Section */}
                <div className="col-md-6 px-5 mt-4">
                  <h1 className="fs-1 fw-bold" style={{marginBottom: '-5px'}}>{slides[activeIndex].title}</h1>
                  <h3
                    className=""
                    style={{marginBottom: '-4px',
                      color: slides[activeIndex].status === "UnRipe" ? '#dc3545' : '#28a745',
                      fontFamily: 'cursive',
                      fontSize: '1.5rem'
                    }}
                  >
                    {slides[activeIndex].status}
                  </h3>
                  <div className="mb-3">
                    {[...Array(slides[activeIndex].rating)].map((_, i) => (
                      <span key={i} style={{ color: '#ffc107', fontSize: '1.5rem' }}>★</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Next Arrow */}
              <button
                onClick={nextSlide}
                className="btn border-0 p-3"
                style={{
                  backgroundColor: 'transparent',
                  fontSize: '2rem',
                  color: '#28a745',
                  transition: 'all 0.3s ease',
                  zIndex: 10
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#218838';
                  e.currentTarget.style.transform = 'scale(1.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#28a745';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 16 16 12 12 8" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </button>
            </div>
           
          </div>

          <div className='d-align mt-4 justify-content-center'>
            <a className='chips-button'>View More</a>
          </div>
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