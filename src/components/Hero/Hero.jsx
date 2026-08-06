import HeroStats from "./HeroStats";
import FloatingCards from "./FloatingCards";
import "./hero.css";
import heroImage from "../../assets/images/hero-device.webp";

const Hero = () => {
    return (
        <section className="hero">          
        
            <div className="container hero-grid">            
                <div className="hero-left">         
                {/*    <Maintanance/>*/}
                    <span className="hero-badge">
                        Deep Science Biotech . Visakhapatnam
                    </span>

                    <h1>
                        Precision Medicine,
                        <span> within reach </span>of everyone.
                    </h1>

                    <p>
                      We build AI-powered diagnostics and next-generation antibody & ADC therapeutics — engineered in India, designed to global standards, made to reach every clinic on earth.
                    </p>

                    <div className="hero-buttons">

                        <button className="btn-primary">
                            Explore Science
                        </button>

                        <button className="btn-outline">
                            Investors
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
