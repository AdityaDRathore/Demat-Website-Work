import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope, FaSignInAlt, FaUserPlus, FaCode, FaBars } from 'react-icons/fa';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: '/', icon: <FaHome />, text: 'Home' },
    { path: '/about', icon: <FaInfoCircle />, text: 'About' },
    { path: '/contact', icon: <FaEnvelope />, text: 'Contact' },
    { path: '/login', icon: <FaSignInAlt />, text: 'Login' },
    { path: '/register', icon: <FaUserPlus />, text: 'Register' },
    { path: '/dev-dashboard', icon: <FaCode />, text: 'Dev Dashboard' },
  ];

  return (
    <>
      <nav className="desktop-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="mobile-nav">
        <button className="menu-toggle" onClick={toggleMenu}>
          <FaBars />
        </button>
        <ul className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path} className={location.pathname === item.path ? 'active' : ''} onClick={toggleMenu}>
                {item.icon}
                <span>{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
