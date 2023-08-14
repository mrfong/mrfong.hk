import React, { useState } from "react";
import logo from '../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <div className='logo'>
        <a href="#logo"> <img src={logo} alt="LOGO" /> </a>
        </div>
        <div className='nav-link'>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#works">Works</a>
            <a href="#contact">Contact us</a>
        </div>
        <div className='nav-toggle' 
            onClick={() => {
                setIsOpen(!isOpen);
            }}
        >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
      </nav>
    )

}
export default Navbar