import React from "react";
import "./FormPage.css";
import studyImg from "../../assets/Form/Group 40709.png";
import Button from "../Button/Button";

const FormPage = () => {
  return (
    <div className="form-page">
      <div className="form-container">

        {/* FORM SECTION */}
        <div className="form-section">
          <h2>
            Fill out the <span>form</span> below
          </h2>
          <p className="subtitle">
            Our experts will connect with you to help you choose the right
            university, program, and scholarships.
          </p>

          <form>
            <div className="form-row">
              <div className="field">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" />
              </div>

              <div className="field">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" />
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email address" />
              </div>

              <div className="field">
                <label>Degree</label>
                <select>
                  <option>Select the degree</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label>Faculty</label>
                <select>
                  <option>Enter your faculty</option>
                </select>
              </div>

              <div className="field">
                <label>Destination</label>
                <select>
                  <option>Select destination</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label>Test Preparation</label>
              <select>
                <option>Select test preparation</option>
              </select>
            </div>

            <div className="field">
              <label>Your Message</label>
              <textarea
                rows="4"
                placeholder="Enter your queries or message"
              />
            </div>

           <Button type="submit" variant="yellow" size="md">Send Message</Button>

          </form>
        </div>

      
        <div className="image-section">
          <img src={studyImg} alt="Students discussion" />
        </div>

      </div>
    </div>
  );
};

export default FormPage;
