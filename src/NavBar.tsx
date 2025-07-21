import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  
  return (
    <div className="nav">
        <nav >
            <ul className='nav-list'>
                
                <li><Link to="/cynthia">Cynthia</Link></li>
                <li><Link to="/about">ABOUT ME</Link></li>
                <li><Link to="/portfolio">PORTFOLIO</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>
        </nav>
       
    </div>
  )
}

export default NavBar;