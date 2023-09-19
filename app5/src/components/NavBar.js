import React from 'react'
import {Link} from "react-router-dom"
import '../CSS/nav.css'
const NavBar = () => {
  return (
    <div>
      <nav className='navbar bg-dark text-white'>
        <Link to={'/'} className='text-decoration-none h4 text-white mx-2'>Design Challenge 5</Link>
        <ul className='d-flex list-unstyled fs-5 text-white'>
            <li className='me-3 li-item'><Link to={'/'} className='text-decoration-none text-white p-2'>Home</Link></li>
            <li className='me-3 li-item'><Link to={'/contact'} className='text-decoration-none text-white'>Contact</Link></li>
            <li className='me-3 li-item'><Link to={'/about'} className='text-decoration-none text-white'>About</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
