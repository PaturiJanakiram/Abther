import "./About.css";

import MissionVision from "./MissionVision";
import ValueCard from "./ValueCard";
import CultureCard from "./CultureCard"; 

const About = () => {

    return (

        <section className="about" id="about">

            <div className="container">

                <div className="section-title">

                    <span>ABOUT US</span>

                    <h2>
                        Building the Future of
                        <span> Precision Healthcare</span>
                    </h2>

                    <p>
                        AbTher Health combines artificial intelligence,
                        molecular diagnostics and biotechnology to deliver
                        innovative healthcare solutions.
                    </p>

                </div>

                <div className="mission-grid">

                    <MissionVision
                        icon="🧬"
                        title="Mission"
                        description="Develop affordable AI-powered diagnostics and therapeutics."
                    />

                    <MissionVision
                        icon="🌍"
                        title="Vision"
                        description="Improve global healthcare through precision medicine."
                    />

                </div>

                <div className="values">

                    <h2>Our Core Values</h2>

                    <div className="value-grid">

                        <ValueCard
                            icon="💡"
                            title="Innovation"
                            description="Research-driven biotechnology."
                        />

                        <ValueCard
                            icon="🤝"
                            title="Integrity"
                            description="Ethical and transparent science."
                        />

                        <ValueCard
                            icon="🚀"
                            title="Excellence"
                            description="Deliver world-class healthcare."
                        />

                    </div>

                </div>

                <div className="culture">

                    <h2>Our Culture</h2>

                    <div className="culture-grid">

                        <CultureCard
                            title="Collaboration"
                            description="Scientists and engineers working together."
                        />

                        <CultureCard
                            title="Patient First"
                            description="Every innovation begins with patient care."
                        />

                        <CultureCard
                            title="Continuous Learning"
                            description="Always exploring new discoveries."
                        />

                    </div>

                </div>

            </div>

        </section>

    );

};

export default About;