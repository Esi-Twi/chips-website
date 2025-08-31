import React from 'react'

function Footer() {
  return (
    <footer className=''>
        <div>
            <h1>Your crunch is just one call away <br/>- don't wait, order now!</h1>
        </div>

        <div className='row'>
            <h1 className='col-md-9'>Chips 'n' Crunch</h1>

            <nav className='col-md-3'>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>Products</a></li>
                    <li><a href='/'>Contact</a></li>
                </ul>
            </nav>
        </div>

        <p className=''>All Rights Reserved | <a href=''>Esi Twi Tawiah</a></p>
    </footer>
  )
}

export default Footer