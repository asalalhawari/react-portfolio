import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header">
      <a href="#home" className="logo">Asal <span>AL_hawari</span></a>
      <i className='bx bx-menu' id="menu-icon"></i>

      <nav className="navbar">
        <Link to="/" className="active">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/education">Education</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
