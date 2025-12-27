import React from "react";
import "./Hero.css";

function Hero({ title, subtitle, buttonText, mainImage, experts }) {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
         <button className="btn primary md">{buttonText}</button>
         </div>
          <div className="hero-image-container">
          <img className="hero-image" src={mainImage} alt="Hero" />
        </div>
        </div>


   
          <div className="hero-experts">
            {experts && experts.map((expert, index) => (
              <img
                key={index}
                src={expert}
                alt={`Expert ${index + 1}`}
                className="expert-avatar"
              />
            ))}
          </div>
        
       
      
    </section>
  );
}

export default Hero;
