import React, { useState } from 'react'
import "../../components/Navbar/Navbar.css"
import logo from "../../../public/assets/portfolio.png";
import MobileNav from '../MobileNav/MobileNav';

function Navbar() {

const[openMenu,setOpenMenu]=useState(false);

const toggleMenu =()=> {
  setOpenMenu(!openMenu);
};

  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
    <nav className='nav-wrapper'>
        <div className='nav-content'>
            <img className='logo' src={logo} alt='logo'/>
            <ul>
              <li>
                <a className='menu-item'>Home</a>
              </li>
              <li>
                <a className='menu-item'>Skills</a>
              </li>
              <li>
                <a className='menu-item'>Work Experience</a>
              </li>
              <li>
                <a className='menu-item'>Contact Me</a>
              </li>
              <button className='contact-btn' onClick={()=>{}}>Hire Me</button>
            </ul>
            <button className='menu-btn' onClick={toggleMenu}>
              <span
              className={"material-symbols-outlined"}
              style={{fontSize:"1.8rem"}}></span>{openMenu ?"close":"menu"}
            </button>
        </div>
    </nav>
    </>
  )
}

export default Navbar