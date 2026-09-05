// Footer.jsx
import React from "react";
import "./Footer.css";
import flogo from "../../images/footer/flogo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <div className="fb">
              <img src={flogo} alt="flogo" />             
            </div>
            <p>
              Precision diagnostics and antibody & ADC therapeutics — engineered in India, designed for the world. Democratising access to fast, accurate, affordable healthcare.
            </p>
          </div>

          <div className="foot-col">
            <h5>EXPLORE</h5>
            <a href="#about">About</a>
            <a href="#platforms">Platforms</a>
            <a href="#team">Team</a>
            <a href="#impact">Impact</a>
          </div>

          <div className="foot-col">
            <h5>Connect</h5>
            <a href="#investors">Investors</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="foot-bottom">
          <p>© 2025 AbTher Biotech Pvt. Ltd. · Visakhapatnam, Andhra Pradesh, India </p>
          <p>Democratising healthcare, one drop at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
