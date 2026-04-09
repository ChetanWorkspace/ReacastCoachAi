import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand-col">
            <div className="footer-brand">
              Recast<span>Coach</span>.ai
            </div>
            <div className="footer-tag">Same you. Stronger story.</div>
            <div className="footer-desc">
              Career coaching for displaced workers. Built for the person behind
              the resume.
            </div>
          </div>
          <div>
            <div className="footer-col-title">Alignment</div>
            <div className="fi-item">
              <div className="fi-dot"></div>
              <div className="fi-text">
                <strong>WIOA aligned</strong>
                Built around the FY2026 WIOA appropriations package. $2.9 billion
                in active workforce funding is available right now for programs
                serving displaced workers.
              </div>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Built for people</div>
            <div className="fi-item">
              <div className="fi-dot"></div>
              <div className="fi-text">
                <strong>3,000+ placements</strong>
                Founded by someone who has done this work. Built for the
                agencies serving people who need it most.
              </div>
            </div>
          </div>
        </div>
        <div className="footer-div"></div>
        <div className="footer-bot">
          <div className="footer-copy">
            &copy; 2026 RecastCoach.ai. All rights reserved.
          </div>
          <div className="footer-links">
            <a href="#" className="footer-link">
              Privacy policy
            </a>
            <a href="#" className="footer-link">
              Terms of service
            </a>
            <a href="#contact" className="footer-link">
              Contact
            </a>
            <a href="#" className="footer-link">
              recastcoach.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
