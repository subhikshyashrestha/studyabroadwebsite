import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logos/Layer 2.png";
import { FaSearch, FaTimes, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import Button from "../Button/Button";
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sidebarLinks = [
    { label: "Services", hasArrow: true },
    { label: "Study Destinations", hasArrow: true },
    { label: "Scholarships", hasArrow: false },
    { label: "Test Preparation", hasArrow: false },
    { label: "Program & University", hasArrow: false },
    { label: "Blogs", hasArrow: false },
    { label: "Events", hasArrow: false },
    { label: "About Us", hasArrow: false },
    { label: "Mock Test", hasArrow: false },
    { label: "Student Resources", hasArrow: true },
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

          <div className="right-section">
            <span className="nav-divider" />
            <button className="search-btn" aria-label="Search">
              <FaSearch size={18} />
            </button>
            <Button variant="secondary" size="md">Contact Us</Button>
          </div>
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      {isMobileMenuOpen && (
        <>
          <div className="sidebar">
            <div className="sidebar-top">
              <button
                className="close-btn"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <FaTimes size={22} />
              </button>

              <button className="sidebar-search-btn" aria-label="Search">
                <FaSearch size={18} />
              </button>
            </div>

            <ul className="sidebar-links">
              {sidebarLinks.map((item, index) => (
                <li key={index}>
                  <a href="#" onClick={() => setIsMobileMenuOpen(false)}>
                    <span>{item.label}</span>
                    {item.hasArrow && <FaChevronRight className="side-arrow" size={14} />}
                  </a>
                </li>
              ))}
            </ul>

            <div className="sidebar-bottom">
              <Button variant="secondary" size="md">Contact Us</Button>


              <div className="sidebar-socials">
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
            </div>
          </div>

          <div className="overlay" onClick={() => setIsMobileMenuOpen(false)} />
        </>
      )}
    </nav>
  );
}

export default Navbar;