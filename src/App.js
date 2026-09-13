
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Platforms from "./components/Platforms/Platforms";
import Pipeline from "./components/Pipeline/Pipeline";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Impact from "./components/Impact/Impact";
import Team from "./components/Team/Team";
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

        <section id="about" className="page-section"><About/></section>

        <section id="platforms" className="page-section"><Platforms /></section>

        <section id="pipeline" className="page-section"><Pipeline /></section>

        <section id="how-it-works" className="page-section"><HowItWorks /></section>

        <section id="impact" className="page-section"><Impact /></section>

        <section id="team" className="page-section"><Team /></section>    

        <section id="inspiration" className="page-section"> <Inspiration /></section>

        <section id="investors" className="page-section"><Investors /></section>

        <section id="contact" className="page-section"><Contact /></section>

        <Footer/>
      
  
           

           
        </>
      
  );
}

export default App;
