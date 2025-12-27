import React from "react";
import "./Explore.css";

import one from "../../assets/explore/Frame 24.png";
import two from "../../assets/explore/Frame 27.png";
import three from "../../assets/explore/Frame 32.png";
import four from "../../assets/explore/Frame 33.png";

const Explore = () => {
  const destinations = [one, two, three, four];

  return (
    <section className="explore">
      {/* Header */}
      <h1 className="explore-title">
        Explore our top study <span>Destinations</span>
      </h1>

      <p className="explore-subtitle">
        Turn your international education dreams into reality
      </p>

      {/* Cards */}
      <div className="explore-scroll-wrapper">
      <div className="explore-scroll">
        {destinations.map((img, index) => (
          <div key={index} className="explore-card">
            <img src={img} alt={`Destination ${index + 1}`} />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Explore;
