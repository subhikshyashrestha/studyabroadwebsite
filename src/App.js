import './styles/global.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";



import FormPage from './components/FormPage/FormPage';
import Explore from './components/Explore/Explore';
import Legacy from './components/Legacy/Legacy';
import Solution from './components/Solution/Solution';
import './components/SuccessStories/SuccessStories';
import SuccessStories from './components/SuccessStories/SuccessStories';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
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
