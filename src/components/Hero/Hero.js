import "./Hero.css";
import heroImage from "../../assets/hero/hero-student.png";
import expert1 from "../../assets/hero/Frame 11.png";
import expert2 from "../../assets/hero/Frame 12.png";
import expert3 from "../../assets/hero/Frame 7.png";
import Button from "../Button/Button";

function Hero() {
  const experts = [expert1, expert2, expert3];

  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Get Expert Guidance for Your <span>Study Abroad Plans</span>
          </h1>
          <p className="hero-subtitle">
            Discover top universities, explore scholarship options, and get professional assistance to turn your international education dreams into reality.
          </p>
          <Button variant="primary" size="lg">Book an Appointment</Button>

          {/* Experts below button */}
          <div className="hero-experts">
            {experts.map((expert, index) => (
              <img
                key={index}
                src={expert}
                alt={`Expert ${index + 1}`}
                className="expert-avatar"
              />
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-image-container">
          <img className="hero-image" src={heroImage} alt="Happy student" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
