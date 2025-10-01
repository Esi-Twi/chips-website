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
          <h1 className='text-center ff-lobster display-1 text-golden mb-5 d-md-none'>Our Products</h1>

          <div className='mx-md-0 mx-5'>
            <p className='fs-3'>We have</p>
            <div className='mx-5'>
              <p><img src='../../assets/icons/square.png' /> Ripe</p>
              <p><img src='../../assets/icons/square.png' /> Unripe</p>
            </div>

            <h4 className='ff-lobster text-golden fs-1'>Let’s Get Crispy Together! Place Your Order Today.</h4>
          </div>
        </div>
      </div>

      {/* -----------product list------------------ */}
      <div className='container mx-auto' style={{ margin: '5rem 0' }}>
        <h1 className='text-center text-green ff-lobster mb-md-5 display-1 '>Plantain Chips available for you</h1>

        <div className='d-flex items-center flex-column'>
          <div className="container">
            <div className="row">
              {/* Product 1 */}
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="mt-4" >
                    <img
                      src="../../assets/images/chips-4.jpg"
                      alt="Cocoyam Chips"
                      className="card-img-top"
                      style={{ objectFit: 'contain', height: '250px' }}
                    />
                  </div>
                  <div className="card-body text-center d-flex flex-column">
                    <h5 className="card-title fw-bold mb-2" style={{ fontSize: '1rem', textTransform: 'uppercase' }}>
                      RIPE CHIPS BIGGIE JAR
                    </h5>
                    <p className="card-text text-muted mb-3" style={{ fontSize: '0.875rem' }}>
                      Fried Ripe Chips Biggie-14kg
                    </p>
                    <div className="mt-auto">
                      <p className="h5 fw-bold mb-3">₵120.00</p>
                      <button
                        className="btn btn-success px-4 py-1 fw-bold bg-green">
                        🛒 BUY
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className='mt-4' >
                    <img
                      src="../../assets/images/chips-1.jpg"
                      alt="Plantain Chips"
                      className="card-img-top"
                      style={{ objectFit: 'contain', height: '250px' }}
                    />
                  </div>
                  <div className="card-body text-center d-flex flex-column">
                    <h5 className="card-title fw-bold mb-2" style={{ fontSize: '1rem', textTransform: 'uppercase' }}>
                      PLATED UNRIPE PLANTAIN CHIPS WITH GROUNDNUTS
                    </h5>
                    <p className="card-text text-muted mb-3" style={{ fontSize: '0.875rem' }}>
                      Plated Portion for events - 8g
                    </p>
                    <div className="mt-auto">
                      <p className="h5 fw-bold mb-3">₵25.00</p>
                      <button
                        className="btn btn-success px-4 py- fw-bold bg-green" >
                        🛒 BUY
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product 3 */}
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="mt-4">
                    <img
                      src="../../assets/images/chips-3.jpg"
                      alt="Chinchin Munchie"
                      className="card-img-top"
                      style={{ objectFit: 'contain', height: '250px' }}
                    />
                  </div>
                  <div className="card-body text-center d-flex flex-column">
                    <h5 className="card-title fw-bold mb-2" style={{ fontSize: '1rem', textTransform: 'uppercase' }}>
                       UNRIPE PLANTAIN CHIPS
                    </h5>
                    <p className="card-text text-muted mb-3" style={{ fontSize: '0.875rem' }}>
                      Individual Purchase - 16g
                    </p>
                    <div className="mt-auto">
                      <p className="h5 fw-bold mb-3">₵10.00</p>
                      <button
                        className="btn btn-success px-4 py-1 fw-bold bg-green">
                        🛒 BUY
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Products