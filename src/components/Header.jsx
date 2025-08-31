import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='bg-golden px-5 d-align justify-content-between py-2'>
        <h1>
            <a href='/' className='ff-lobster'>Chips 'n' Munch</a>
        </h1>

        <nav>
            <ul className='d-align gap-5 mt-2'>
                <li><NavLink to='/' className='fw-bold header-navlink'>Home</NavLink></li>
                <li><NavLink to='/products' className='fw-bold header-navlink'>Products</NavLink></li>
                <li className='header-contact bg-white'><NavLink to='/contact' className='fw-bold fs--0'>Contact</NavLink></li>
            </ul>
        </nav>


    </header>
  )
}

export default Header