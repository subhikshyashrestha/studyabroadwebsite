import React from "react";
import "./SuccessStories.css";

import main1 from "../../assets/stories/Frame 865.png";
import main2 from "../../assets/stories/image 58.png";
import story1 from "../../assets/stories/Frame 67.png";
import story2 from "../../assets/stories/Frame 66.png";
import story3 from "../../assets/stories/Frame 65.png";

function SuccessStories() {
  const rightImages = [story1, story2, story3];

  return (
    <section className="success-page">
      <div className="success-wrapper">
        {/* Header */}
        <div className="success-header">
          <h1 className="sucess-title">Student Success Stories:<span> Hear from Our Achievers</span></h1>
          <p className="subheading">
            We help students make informed decisions and achieve their academic dreams with confidence
          </p>
        </div>

        {/* Images Section */}
        <div className="success-layout">
          {/* Left Images */}
          <div className="success-left">
            <img src={main1} alt="Student success 1" />
            <img src={main2} alt="Student success 2" />
          </div>

          {/* Right Images */}
          <div className="success-right">
            {rightImages.map((img, index) => (
              <img key={index} src={img} alt={`Success ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;
