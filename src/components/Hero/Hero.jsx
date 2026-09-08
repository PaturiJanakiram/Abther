import HeroStats from "./HeroStats";
import FloatingCards from "./FloatingCards";
import "./hero.css";
import heroImage from "../../assets/images/hero-device.png";

const Hero = () => {
    return (
        <section className="hero">        
            <div className="container hero-grid">            
                <div className="hero-left">         
                {/*    <Maintanance/>*/}
                 <div className="hero-badge">
                      <span class="pulse">
                      </span>
                       <span data-ae="t16" contenteditable="true">Deep Science Biotech . Visakhapatnam</span>
                  </div>

                    <h1>
                        Precision Medicine,
                        <span> within reach </span>of everyone.
                    </h1>

                    <p>
                      We build AI-powered diagnostics and next-generation antibody & ADC therapeutics — engineered in India, designed to global standards, made to reach every clinic on earth.
                    </p>

                    <div className="hero-buttons">
                        <button className="btn-primary">
                            Explore our science
                        </button>

                        <button className="btn-outline">
                             For Investors & Partners
                        </button>

                    </div>

                    <HeroStats />

                </div>

                <div className="hero-right">

                    <img
                        src={heroImage}
                        alt="Abther Device"
                    />

                    <FloatingCards />

                </div>

            </div>
        </section>
    );
};

export default Hero;
