import React from 'react'


import Header from '../components/Header'
import Footer from '../components/Footer'


function Products() {
  return (
    <div>
      <Header />

      {/* --------hero--------- */}
      <div className='products-hero d-align justify-content-center'>
        <div className='products-hero-inner'>
          <h1 className='text-center ff-lobster mb-md-5 display-1 text-golden mb-5 d-md-block d-none'>Our Products</h1>
          <h1 className='text-center ff-lobster display-2 text-golden mb-5 d-md-none'>Our Products</h1>

          <div className='mx-md-0 mx-5'>
            <p className='fs-3'>We have</p>
            <div className='mx-5'>
              <p><img  src='../../assets/icons/square.png'/> Ripe</p>
              <p><img src='../../assets/icons/square.png'/> Unripe</p>
            </div>

            <h4 className='ff-lobster text-golden fs-1'>Let’s Get Crispy Together! Place Your Order Today.</h4>
          </div>
        </div>
      </div>

{/* -----------product list------------------ */}
      <div>
        <h1>Plantain Chips available for you</h1>

        <div>
        {/* images carousel */}
        <div>

        </div>

{/* chips details */}
<div>
  <h1>Plantain Chips</h1>
  <h3>Ripe/UnRipe</h3>

  <div>


  </div>

  <div>
    <a className='chips-button' href=''>Order Now</a>
  </div>
</div>
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default Products