import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <a href="#">
            <img 
              src="/path-to-your-logo.png" 
              alt="Logo" 
              className="logo-image"
            />
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="hamburger-menu">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="result" 
            smooth={true} 
            duration={500} 
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Result
          </Link>
        </div>

        {/* Register Button */}
        <div className="register-button">
          <button>Register</button>
        </div>
      </div>

      {/* Mobile Register Button */}
      {isMenuOpen && (
        <div className="mobile-register">
          <button>Register</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
