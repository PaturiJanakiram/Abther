import React from "react";
import '../css/AbtherHealth.css'
import AbtherLogo from '../images/AbtherLogo.JPG'
import AbtherHealthImg from '../images/Menu.jpg'
import Contact from '../components/Contact'
function AbtherHealth() {
    return (
        <div className="container">

            {/* Header */}
            <header className="header">
                <div className="logo"><img src={AbtherLogo} alt='AbtherLogo'/></div>
                <div className="menuItem">&nbsp;&nbsp;Faster Insights<br />Healthier Futures</div>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="heroImage"><img src={AbtherHealthImg} alt='AbtherHealthImage' /></div>
                <div className="heroText">Revolutionizing Diagnostics <br/> &nbsp; "40+ Diseases". 15 Minutes, One Device.</div>
            </section>

            {/* Points */}
            <section className="featureSection">
                <div className="featureItem">
                    <span className="featureIcon">⏱️</span>
                    <p><strong>Fast:</strong> Results in 15–30 minutes</p>
                </div>

                <div className="featureItem">
                    <span className="featureIcon">🧬</span>
                    <p>Accurate: Strong Biology, AI + Spectrometry powered</p>
                </div>

                <div className="featureItem">
                    <span className="featureIcon">❤️</span>
                    <p><strong>Accessible:</strong> Portable, low-cost, rural-ready</p>
                </div>

                <div className="featureItem">
                    <span className="featureIcon">➕</span>
                    <p><strong>Comprehensive:</strong> 40+ diseases in one device, Multiplex</p>
                </div>
                <div className="featureItem">
                    <h3>Impact</h3>                    
                </div>
                <div className="featureItem">
                    <span className="impactBox"></span>
                    <p>Early detection saves lives</p>
                </div>
                <div className="featureItem">
                    <span className="impactBox"></span>
                    <p>Fighting antimicrobial resistance</p>
                </div>
                <div className="featureItem">
                    <span className="impactBox"></span>
                    <p>Bringing diagnostics to every corner of the world</p>
                </div>
            </section>           

            {/* Footer */}
                <Contact/>
            
        </div>
    );
}

export default AbtherHealth;
