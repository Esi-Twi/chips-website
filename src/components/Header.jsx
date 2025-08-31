import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='bg-golden '>
        <h1>
            <a href='/'>Chips 'n' Munch</a>
        </h1>

        <nav>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/products'>Products</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>


    </header>
  )
}

export default Header