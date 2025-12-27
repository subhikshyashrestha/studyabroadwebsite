import React from "react";
import "./Legacy.css";
import mainImage from "../../assets/legacy/Frame 54.png"; // main right-side image
import sideImage from "../../assets/legacy/Frame 51.png"; // image on left below text

function Legacy() {
  return (
    <section className="legacy">
      <div className="legacy-content">
        <div className="legacy-left">
          <div className="legacy-text">
            <h1 className="legacy-title">
              A Legacy of Trust, Excellence, and <span>Student Success</span>
            </h1>
            <p className="legacy-subheading">
              At 360 Education, we are committed to guiding students toward a
              successful international education journey. With expert
              counseling, comprehensive support, and a strong network of global
              institutions, we help students make informed decisions and achieve
              their academic dreams with confidence.
            </p>
          </div>

          <div className="legacy-side-image">
            <img src={sideImage} alt="Side Illustration" />
          </div>
          {/* Learn More Button */}
          <div className="legacy-btn-container">
            <button className="legacy-btn">
              Learn more about 360 Education
            </button>
          </div>
        </div>

        <div className="legacy-image">
          <img src={mainImage} alt="Legacy Illustration" />
        </div>
      </div>
    </section>
  );
}

export default Legacy;
