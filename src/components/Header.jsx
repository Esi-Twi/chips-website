import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'


// navlink is not active 

function Header() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
     <>
{/* // <header className='bg-golden px-5 d-align justify-content-between py-2'>
    //     <h1>
    //         <a href='/' className='ff-lobster'>Chips 'n' Munch</a>
    //     </h1>

    //     <nav>
    //         <ul className='d-align gap-5 mt-2'>
    //             <li><NavLink to='/' className='fw-bold header-navlink'>Home</NavLink></li>
    //             <li><NavLink to='/products' className='fw-bold header-navlink'>Products</NavLink></li>
    //             <li className='header-contact bg-white'><NavLink to='/contact' className='fw-bold fs--0'>Contact</NavLink></li>
    //         </ul>
    //     </nav>


    // </header> */}


      <header className='bg-golden px-md-5 px-3 d-flex justify-content-between align-items-center py-md-2 py-3'>
        <h1 className="mb-0">
          <a href='/' className='ff-lobster fs-3 text-decoration-none'>Chips 'n' Munch</a>
        </h1>
        
        {/* Desktop Navigation */}
        <nav className="d-none d-lg-block">
          <ul className='d-flex align-items-center gap-5 mt-2 mb-0 list-unstyled'>
            <li><NavLink to='/' className={({ isActive }) =>`fw-bold header-navlink text-decoration-none ${isActive ? "active" : ""}`}>Home</NavLink></li>
            <li><NavLink to='/products' className={({ isActive }) =>`fw-bold header-navlink text-decoration-none ${isActive ? "active" : ""}`}>Products</NavLink></li>
            <li className='header-contact bg-white rounded'>
              <NavLink to='/contact' className={({ isActive }) =>`fw-bold text-decoration-none contact-button d-block ${isActive ? "active" : ""}`}>Contact</NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className="d-lg-none btn p-2 border-0 bg-transparent"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <div className="hamburger-icon">
            <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          </div>
        </button>
      </header>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay d-lg-none ${isMenuOpen ? 'show' : ''}`}>
        <div className="mobile-nav-content bg-white shadow-lg mx-2 rounded">
          <div className="d-flex justify-content-end p-3">
            <button 
              className="btn btn-link p-0 fs-1 text-dark"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
          <nav className="px-3 pb-4">
            <ul className='list-unstyled mb-0'>
              <li className="mb-3">
                <NavLink 
                  to='/' 
                  className='fw-bold text-decoration-none d-block py-2 px-2 rounded hover-bg-light'
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="mb-3">
                <NavLink 
                  to='/products' 
                  className='fw-bold text-decoration-none d-block py-2 px-2 rounded hover-bg-light'
                  onClick={closeMenu}
                >
                  Products
                </NavLink>
              </li>
              <li className="mb-3">
                <NavLink 
                  to='/contact' 
                  className='fw-bold text-decoration-none d-block py-2 px-2 rounded hover-bg-light'
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header