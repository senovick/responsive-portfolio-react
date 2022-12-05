import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header" id="header">
      <nav className='nav container'>
        <Link className='nav__logo'>Sean</Link>
        <div className="nav__menu">          
        <ul className='nav__list'>
          <li className='nav__item'>
            <Link className='nav__link active-link' to='/'>
              <i className='bx bx-home-alt'></i>
            </Link>
          </li>
          <li className='nav__item'>
            <Link className='nav__link' to='/about'>
              <i className='bx bx-user'></i>
            </Link>
          </li>
          <li className='nav__item'>
            <Link className='nav__link' to='/skills'>
              <i className='bx bx-book'></i>
            </Link>
          </li>
          <li className='nav__item'>
            <Link className='nav__link' to='/work'>
              <i className='bx bx-briefcase-alt-2'></i>
            </Link>
          </li>
          <li className='nav__item'>
            <Link className='nav__link' to='/contact'>
              <i className='bx bx-message-square-detail'></i>
            </Link>
          </li>
        </ul>
        </div>
      </nav>               
    </header>
  )
}

export default Navbar