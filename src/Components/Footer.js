import React from 'react';
import './Footer.css'; // You can create an external CSS file for additional styling
import wellness from '../Assets/wellbeing.png';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="footer-logo">
            <a href="#home"><img src={wellness} alt="" /></a>
              <p>Wellness</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="footer-links">
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="footer-contact">
              <p>Contact Us:</p>
              <p>Email: info@wellness.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Wellness. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
