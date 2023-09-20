import React from 'react';
import './Navbar.css';
import logo from '../Assets/wellbeing.png'

const Navbar = () => {
  return (
    <section id ="home">
    <nav className="navbar">
      <div className="logo">
        <span className="icon">
          <a href="#home"><img src={logo} alt="" /></a>
        </span>
        <span className="logo-text">Wellness</span>
      </div>
      <ul className="nav-links">
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT US</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
    </section>
  );
};

export default Navbar;
