import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="company-logo">
        <img src="/logo trasperent.png" alt="Logo" className="logo-img" />
        <span className="logo-text">
          <span className="gs">Being HR</span> 
        </span>
      </div>
      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <Link to="/">Home </Link>
        <Link to="/event">Events </Link>
       <Link to="/about"> About Us</Link>
        
        <Link to='/blog'>Blog </Link>
        {/* <div className="dropdown">
          <button className="dropbtn">Past Events</button>
          <div className="dropdown-content">
            <a href="#past-2023">2023</a>
            <a href="#past-2022">2022</a>
          </div>
        </div> */}
    <Link to="/contact">Contact Us</Link>
    <Link to="/login" className="join-now-button">Join Now</Link>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
}

export default Header;

