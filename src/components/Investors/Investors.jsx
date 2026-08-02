import "./Investors.css";

const Investors = () => {

    return (

        <section className="investors">

            <div className="container">

                <div className="section-title">

                    <span>INVESTMENT OPPORTUNITY</span>

                    <h2>Why Invest in AbTher?</h2>

                    <p>
                        We are building India's next-generation AI-powered
                        molecular diagnostics and antibody therapeutics
                        platform for global healthcare markets.
                    </p>

                </div>

                <div className="investor-grid">

                    <div className="investor-card">
                        <h3>AI Diagnostics</h3>
                        <p>Rapid disease detection using advanced molecular biomarkers.</p>
                    </div>

                    <div className="investor-card">
                        <h3>Therapeutics</h3>
                        <p>Novel antibody therapeutics for precision medicine.</p>
                    </div>

                    <div className="investor-card">
                        <h3>Global Market</h3>
                        <p>Scalable healthcare solutions for India and international markets.</p>
                    </div>

                </div>

            </div>

        </section>

    );

};

export default Investors;