
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Platforms from "./components/Platforms/Platforms";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Impact from "./components/Impact/Impact";
import Team from "./components/Team/Team";
import WhatDrivesUs from "./components/WhatDrivesUs/WhatDrivesUs";
import Inspiration from "./components/Inspiration/Inspiration";
import Investors from "./components/Investors/Investors";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";










function App() {
    return (
        <>
        <Navbar />

        <Hero/>

        <section id="about"><About/></section>

        <section id="platforms"><Platforms /></section>

        <section id="how-it-works"><HowItWorks /></section>

        <section id="impact"><Impact /></section>

        <section id="team"><Team /></section>

        <section id="what-drives-us"><WhatDrivesUs /></section>

        <section id="inspiration"> <Inspiration /></section>

        <section id="investors"><Investors /></section>

        <section id="Contact"><Contact /></section>

        <Footer/>
      
  
           

           
        </>
      
  );
}

export default App;
