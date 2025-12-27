import React from "react";
import "./Solution.css";
import solutionImage from "../../assets/solution/Group 14.png"; // replace with your image path
import Button from "../Button/Button";

function Solution() {
  const bulletPoints = [
    "Identify strengths and choose the right career path.",
    "Find the best-fit course and institution globally.",
    "Stay informed about future career opportunities.",
    "Explore financial aid and scholarship options.",
    "Improve the admission chances with expert guidance.",
  ];

  return (
    <section className="solution-page">
      {/* Header */}
      <div className="solution-header">
        <h1 className="solution-title">
          <span>Personalized Solutions </span>for Your Global Education
        </h1>
        <p className="subheading">
          Turn your international education dreams into reality
        </p>
      </div>

      {/* Content Section */}
      <div className="solution-content">
        {/* Left: Image */}
        <div className="solution-image">
          <img src={solutionImage} alt="Personalized Solutions" />
        </div>

        {/* Right: Career Counseling */}
        <div className="solution-text">
          <h2>Career Counseling</h2>
          <p>
            Making the right career choice is crucial for long-term success. Our
            expert career counseling services provide personalized guidance to
            help you identify the best academic programs, universities, and
            career paths based on your strengths, interests, and global
            opportunities. Whether you're exploring options or need strategic
            advice, we ensure you make informed decisions that align with your
            aspirations.
          </p>
          <ul>
            {bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <Button variant="primary" size="md">View Career Counseling in Detail</Button>

        </div>
       
      </div>

       <div className="partners-section">
          <h2 className="solution-title">Partnered with <span>500+ Trusted Universities Worldwide</span></h2>
        </div>

        {/* Partnered Universities Section */}

  <div className="partners-image">
    <img src={require("../../assets/solution/Frame 56.png")} alt="Partnered Universities" />
  </div>


    </section>
  );
}

export default Solution;
