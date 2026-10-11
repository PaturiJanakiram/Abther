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
       
        <div class="trust">
          <div class="trust-inner">           
            <p class="trust-item">  <span className="tick-mark">✓</span>Recognised &amp; aligned with</p>
            <p class="trust-item">  <span className="tick-mark">✓</span>Startup India · DPIIT</p>
            <p class="trust-item">  <span className="tick-mark">✓</span>National research grant frameworks</p>
            <p class="trust-item">  <span className="tick-mark">✓</span>Regulatory-ready (CDSCO · CE · FDA pathways)</p>
            <div><p><span className="tick-mark">✓</span>Academic &amp; clinical research network</p></div>           
          </div>
        </div>
        </section>
    );
};

export default Hero;
