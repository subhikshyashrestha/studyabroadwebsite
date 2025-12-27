import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logos/Layer 2.png";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const topLinks = ["Blogs", "Events", "About Us", "Mock Test", "Student Resources"];
  const mainLinks = [
    "Services",
    "Study Destinations",
    "Scholarships",
    "Test Preparation",
    "Programs & University",
  ];

  return (
    <nav className="navbar">
      {/* Top Bar */}
      <div className="top-bar">
        <ul className="top-links">
          {topLinks.map((link, index) => (
            <li key={index}><a href="#">{link}</a></li>
          ))}
        </ul>
      </div>

      {/* Main Navbar */}
      <div className="navbar-container">
        {/* Left Section: Hamburger + Logo */}
        <div className="left-section">
          <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        </div>

        {/* Center Links */}
        <ul className="nav-links">
          {mainLinks.map((link, index) => (
            <li key={index}><a href="#">{link}</a></li>
          ))}
        </ul>

        {/* Right Section: Search + Contact */}
        <div className="right-section">
          <button className="search-btn" aria-label="Search">
            <FaSearch size={16} />
          </button>
          <button className="contact-btn">Contact Us</button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <>
          <div className="sidebar">
            <ul>
              {topLinks.map((link, index) => (
                <li key={`top-${index}`}>
                  <a href="#" onClick={() => setIsMobileMenuOpen(false)}>{link}</a>
                </li>
              ))}
              {mainLinks.map((link, index) => (
                <li key={`main-${index}`}>
                  <a href="#" onClick={() => setIsMobileMenuOpen(false)}>{link}</a>
                </li>
              ))}
              <li>
                <button className="search-btn" onClick={() => setIsMobileMenuOpen(false)}>
                  <FaSearch size={16} />
                </button>
              </li>
              <li>
                <button className="contact-btn" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Overlay */}
          <div className="overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
