import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';  // Create this file if it doesn't exist

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo">Your Logo</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Registration</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
