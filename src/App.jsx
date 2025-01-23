import React from "react";
import Navigation from "./components/Navigation";
import AboutMe from "./Pages/AboutMe";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";
import "./components/Footer";
import "./styles/Navigation.css"; 
import "./styles/AboutMe.css"; 
import "./styles/Portfolio.css"; 
import Footer from "./components/Footer";
import { Routes, Route} from "react-router-dom"
const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/about" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;



