import React from 'react'

function Footer() {
  return (
    <footer className=''>
        <div className='pt-5'>
            <h1 className='text-center ff-lobster fs--4 text-golden'>Your crunch is just one call away <br/>- don't wait, order now!</h1>
        </div>

        <div className='row footer-inner mx-md-5 mx-2'>
            <h1 className='col-md-4 col-8 fs-1 ff-lobster text-green text-md-center'>Chips 'n' Crunch</h1>

            <nav className='col-md-3 col-4 px-md-0 px-2'>
                <ul>
                    <li><a href='/' className='fw-bold fs-md-4 text-white '>Home</a></li>
                    <li className='my-2'><a href='/products' className='fw-bold fs-md-4 text-white'>Products</a></li>
                    <li><a href='/contact' className='fw-bold fs-md-4 text-white'>Contact</a></li>
                </ul>
            </nav>

            <div className='col-md-5 footer-contact my-md-0 my-2'>
                <p className='fs-0'>Phone: <h1 className='fs-5'>054 463 6828</h1></p>
                <p className='fs-0'>Email: <h1 className='fs-5'>christabelchips@gmail.com</h1></p>
                <p className='fs-0'>Location: <h1 className='fs-5'>TF Hostel</h1></p>
            </div>
        </div>

        <p className='footer-rights'>All Rights Reserved | <a href=''>Esi Twi Tawiah</a></p>
    </footer>
  )
}

export default Footer