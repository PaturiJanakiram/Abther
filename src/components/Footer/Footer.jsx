// Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <div className="fb">
              <div className="m">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C9 5 9 8 12 11C15 8 15 5 12 2Z"
                    fill="#fff"
                  />
                  <circle cx="7" cy="15" r="3.4" fill="#fff" opacity=".85" />
                  <circle cx="17" cy="15" r="3.4" fill="#fff" opacity=".7" />
                  <circle cx="12" cy="19" r="3" fill="#fff" />
                </svg>
              </div>
              <div className="n">AbTher Biotech</div>
            </div>
            <p>
              Precision AI-powered diagnostics and antibody therapeutics —
              democratising access to healthcare worldwide.
            </p>
          </div>

          <div className="foot-col">
            <h5>Company</h5>
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
          <p>© 2026 AbTher Biotech. All rights reserved.</p>
          <p>Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
