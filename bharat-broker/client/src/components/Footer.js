import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Bharat Broker</h3>
          <p>Your trusted partner in financial growth</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@bharatbroker.com</p>
          <p>Phone: +91 (123) 456-7890</p>
          <p>Address: 123 Financial Street, Mumbai, India</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Bharat Broker. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
