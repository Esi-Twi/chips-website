import React from 'react'

function Footer() {
  return (
    <footer className=''>
        <div className='pt-5'>
            <h1 className='text-center ff-lobster fs--4 text-golden'>Your crunch is just one call away <br/>- don't wait, order now!</h1>
        </div>

        <div className='row footer-inner'>
            <h1 className='col-md-5 fs-1 ff-lobster text-green text-center'>Chips 'n' Crunch</h1>

            <nav className='col-md-3'>
                <ul>
                    <li><a href='/' className='fw-bold fs-5 text-white'>Home</a></li>
                    <li><a href='/products' className='fw-bold fs-5 text-white'>Products</a></li>
                    <li><a href='/contact' className='fw-bold fs-5 text-white'>Contact</a></li>
                </ul>
            </nav>

            <div className='col-md-4 footer-contact'>
                <p>Phone: <h1>054 463 6828</h1></p>
                <p>Email: <h1>christabelchips@gmail.com</h1></p>
                <p>Location: <h1>TF Hostel</h1></p>
            </div>
        </div>

        <p className='footer-rights'>All Rights Reserved | <a href=''>Esi Twi Tawiah</a></p>
    </footer>
  )
}

export default Footer