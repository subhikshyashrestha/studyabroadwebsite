import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logos/Layer 2.png";
import sidebarImage from "../../assets/footer/Frame 879.png";
import { FaSearch, FaTimes, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sidebarLinks = [
    "Services",
    "Study Destinations",
    "Scholarships",
    "Test Preparation",
    "Programs & University",
    "Blogs",
    "Events",
    "About Us",
    "Mock Test",
    "Student Resources",
  ];

  return (
    <nav className="navbar">
      {/* TOP BAR */}
      <div className="top-bar">
        <div className="nav-inner top-inner">
          <div className="top-socials">
            <a href="#" aria-label="Facebook" className="social-circle">
              <FaFacebookF size={14} />
            </a>
            <a href="#" aria-label="Instagram" className="social-circle">
              <FaInstagram size={14} />
            </a>
            <a href="#" aria-label="TikTok" className="social-circle">
              <FaTiktok size={14} />
            </a>
          </div>

          <ul className="top-links">
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/mock-test">Mock Test</a></li>
            <li className="has-caret">
              <a href="/student-resources">
                Student Resources <FaChevronDown className="caret" size={12} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="navbar-main">
        <div className="nav-inner navbar-container">
          {/* Left: Logo */}
          <div className="left-section">
            <div
              className="hamburger"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              role="button"
              aria-label="Open menu"
            >
              <span />
              <span />
              <span />
            </div>

            <a className="logo" href="/">
              <img src={logo} alt="Logo" />
            </a>
          </div>

          {/* Center Links (desktop) */}
          <ul className="nav-links">
            <li className="has-caret">
              <a href="/services">
                Services <FaChevronDown className="caret" size={12} />
              </a>
            </li>
            <li className="has-caret">
              <a href="/study-destinations">
                Study Destinations <FaChevronDown className="caret" size={12} />
              </a>
            </li>
            <li><a href="/scholarships">Scholarships</a></li>
            <li><a href="/test-preparation">Test Preparation</a></li>
            <li><a href="/programs">Program &amp; University</a></li>
          </ul>

          {/* Right: Divider + Search + Contact */}
          <div className="right-section">
            <span className="nav-divider" />

            <button className="search-btn" aria-label="Search">
              <FaSearch size={18} />
            </button>

            <button className="contact-btn">Contact Us</button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <>
          <div className="sidebar">
            <div className="sidebar-top">
              <button
                className="close-btn"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <FaTimes size={20} />
              </button>
              <button className="search-btn" aria-label="Search">
                <FaSearch size={16} />
              </button>
            </div>

            <ul className="sidebar-links">
              {sidebarLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" onClick={() => setIsMobileMenuOpen(false)}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <div className="sidebar-bottom">
              <button className="contact-btn">Contact Us</button>
              <img src={sidebarImage} alt="Sidebar Visual" />
            </div>
          </div>

          <div className="overlay" onClick={() => setIsMobileMenuOpen(false)} />
        </>
      )}
    </nav>
  );
}

export default Navbar;