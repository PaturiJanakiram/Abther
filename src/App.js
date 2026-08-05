
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Platforms from "./components/Platforms/Platforms";
import Team from "./components/Team/Team";
import Investors from "./components/Investors/Investors";
import Contact from "./components/Contact/Contact";








function App() {
    return (
        <>
        <Navbar />

        <Hero/>

        <section id="about"><About/></section>

        <section id="platforms"><Platforms/></section>           

        <section id="team"><Team/></section>

        <section id="investors"><Investors /></section>

        <section id="Contact"><Contact /></section>

      
  
           

           
        </>
      
  );
}

export default App;
