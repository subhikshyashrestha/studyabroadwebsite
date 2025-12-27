import React from "react";
import "./Hero.css";
import heroImage from "../../assets/hero/hero-student.png"; // adjust path if needed
import expert1 from "../../assets/hero/Frame 11.png";
import expert2 from "../../assets/hero/Frame 12.png";
import expert3 from "../../assets/hero/Frame 7.png";
function Hero() {
    const experts = [expert1, expert2, expert3];
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <h1>Get Expert Guidance for Your Study Abroad Plans</h1>
          <p>
            Explore top universities, discover scholarship opportunities, and
            get personalized support for your global education journey.
          </p>
          <button className="hero-btn">Book an Appointment</button>
        </div>

        {/* Right Image */}
        <div className="hero-image">
          <img src={heroImage} alt="Happy student holding a book" />
        </div>
        
      </div>
      {/* Experts Image Section */}
      <div className="hero-experts">
        {experts.map((img, index) => (
          <img key={index} src={img} alt={`Expert ${index + 1}`} />
        ))}
      </div>
      
    </section>
  );
}

export default Hero;
