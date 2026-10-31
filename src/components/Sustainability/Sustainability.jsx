import React from "react";
import "./Sustainability.css";
import sustainimage from "../../images/sustainability/nature.png";

const Sustainability = () => {
  return (

    <section class="sust">
      <div class="wrap">
        <div class="sec-head">
          <span class="eyebrow on-dark">Built in, not bolted on</span>
          <h2>Healthcare that protects the planet too</h2>
          <p>We don't only want to improve lives — we want to do it responsibly. Environmental and social impact are design principles at AbTher, from day one.</p>
        </div>
        <img src={sustainimage} alt="susitainablity"/>
         <div class="sus-grid">
            <div class="sus"><div class="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v18M5 8c3 0 7 2 7 5M19 8c-3 0-7 2-7 5" /></svg></div><div><h3>No cold chain</h3><p>Removes energy-intensive refrigeration across the supply chain — deployable anywhere and dramatically lower carbon per test.</p></div></div>
            <div class="sus"><div class="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 6h18l-2 14H5zM3 6l3-4h12l3 4M10 11v5M14 11v5" /></svg></div><div><h3>Minimal-waste design</h3><p>Low-plastic, low-footprint cassettes designed to meet international sustainability standards from prototype to scale.</p></div></div>
            <div class="sus"><div class="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l3 6 6 .8-4.5 4.2L18 20l-6-3.2L6 20l1.5-7L3 8.8 9 8z" /></svg></div><div><h3>Low-dose therapeutics</h3><p>Our localised ADC strategy is designed to use a fraction of a conventional systemic dose — less drug, less waste, less toxicity.</p></div></div>
            <div class="sus"><div class="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" /></svg></div><div><h3>Aligned to global goals</h3><p>Directly advances UN Sustainable Development Goals for good health, well-being, and reduced inequalities.</p></div></div>
          </div>
      </div>
    </section>
  );
};

export default Sustainability;
