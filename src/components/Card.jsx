import React from 'react'

function Card() {
  return (
    <div className='cta-card row'>
      <h1 className='ff-lobster col-md-10 text-golden d-lg-block d-none' style={{ fontSize: '70px' }}>Chips 'n' Munch</h1>
      <h1 className='ff-lobster text-center text-golden d-lg-none d-block' style={{ fontSize: '50px', marginBottom: '-40px' }}>Chips 'n' Munch</h1>

      <div className='col-lg-2 d-align justify-content-center'>
        <a href='' className='chips-button'>Order now</a>
      </div>
    </div>
  )
}

export default Card