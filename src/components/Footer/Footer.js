import React from "react";
import "./Footer.css";
import locationImage from "../../assets/footer/Accrediation.png";
import logoImage from "../../assets/logos/Layer 2.png";
import rightImage from "../../assets/footer/Frame 879.png";

const Footer = () => {
  return (
    <footer className="footer">
      {/* TOP LINKS */}
      <div className="footer-top">
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li className="active">Destinations</li>
            <li>Programs</li>
            <li>Tests</li>
            <li>Blogs</li>
            <li>Scholarships</li>
            <li>Events</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Career Counseling</li>
            <li>Test Preparation</li>
            <li>Financial Advice</li>
            <li>Pre-Departure Orientation</li>
            <li>University Admissions</li>
            <li>Visa Facilitation</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Destinations</h4>
          <ul>
            <li>Australia</li>
            <li>USA</li>
            <li>UK</li>
            <li>Canada</li>
            <li>Thailand</li>
            <li>UAE</li>
            <li>New Zealand</li>
            <li>Europe</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Test Preparation</h4>
          <ul>
            <li>IELTS</li>
            <li>TOEFL</li>
            <li>PTE</li>
            <li>SAT</li>
            <li>OET</li>
            <li>Duolingo</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Contacts</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      {/* LOCATIONS */}
      <div className="footer-locations">
        <h4>Our Locations</h4>

        <div className="location-grid">
          <div className="location-card">
            <h5 className="head-office">Head Office</h5>
            <div className="contact-info">
              <p>
                <span className="label">Location:</span>
                <span className="value">Kamalpokhari</span>
              </p>
              <p>
                <span className="label">Call Us:</span>
                <span className="value">01-5321268, 01-5321277</span>
              </p>
              <p>
                <span className="label">Email:</span>
                <span className="value">hello@360education.global</span>
              </p>
            </div>
          </div>

          <div className="location-card">
            <h5>Kumaripati</h5>
            <div className="contact-info">
              <p>
                <span className="label">Call Us:</span>
                <span className="value">01-5321268, 01-5321277</span>
              </p>
              <p>
                <span className="label">Email:</span>
                <span className="value">hello@360education.global</span>
              </p>
              <p>
                <span className="label">Visit Us:</span>
                <span className="value">Kathmandu</span>
              </p>
            </div>
          </div>

          <div className="location-card">
            <h5>Biratnagar</h5>
            <div className="contact-info">
              <p>
                <span className="label">Call Us:</span>
                <span className="value">01-5321268, 01-5321277</span>
              </p>
              <p>
                <span className="label">Email:</span>
                <span className="value">hello@360education.global</span>
              </p>
              <p>
                <span className="label">Visit Us:</span>
                <span className="value">Kathmandu</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <img
        src={locationImage}
        alt="Location visual"
        className="location-image"
      />

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <p>
          Our institution is recognized and accredited by leading global
          education bodies, ensuring high-quality standards and credibility.
          These accreditations validate our commitment to excellence, providing
          students with internationally accepted qualifications and enhanced
          career prospects.
        </p>

        <div className="footer-bottom-content">
          {/* Left side: logo + copyright */}
          <div className="footer-left">
            <img src={logoImage} alt="360 Education Logo" className="footer-logo" />
            <div className="footer-text">
              <p>© 2025, 360 Education.</p>
              <p>All Rights Reserved.</p>
            </div>
          </div>

          {/* Right side image */}
          <div className="footer-right">
            <img src={rightImage} alt="Right Image" className="footer-right-image" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
