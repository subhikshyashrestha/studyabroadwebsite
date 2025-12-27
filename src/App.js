import './styles/global.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

import FormPage from './components/FormPage/FormPage';
import Explore from './components/Explore/Explore';
import Legacy from './components/Legacy/Legacy';
import Solution from './components/Solution/Solution';
import SuccessStories from './components/SuccessStories/SuccessStories';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';

// Import Hero images
import heroImage from "./assets/hero/hero-student.png";
import expert1 from "./assets/hero/Frame 11.png";
import expert2 from "./assets/hero/Frame 12.png";
import expert3 from "./assets/hero/Frame 7.png";

function App() {
  const expertsArray = [expert1, expert2, expert3];

  return (
    <div>
      <Navbar />
      <Hero
        title={
          <>
            Get Expert Guidance for Your <span>Study Abroad Plans</span>
          </>
        }
        subtitle="Discover top universities, explore scholarship options, and get professional assistance to turn your international education dreams into reality."
        buttonText="Book an Appointment"
        mainImage={heroImage}
        experts={expertsArray}
      />
      <Events />
      <FormPage />
      <Explore />
      <Legacy />
      <Solution />
      <SuccessStories/>
      <Footer />
    </div>
  );
}

export default App;
