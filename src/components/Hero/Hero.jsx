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
                        <span> Within Reach</span>
                    </h1>

                    <p>
                        AI-powered diagnostics and antibody therapeutics
                        engineered in India for global healthcare.
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
