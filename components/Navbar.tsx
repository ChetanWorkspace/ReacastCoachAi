import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-brand">
        <div className="nav-logo-mark">R</div>
        <div className="nav-brand-name">
          Recast<span>Coach</span>.ai
        </div>
      </div>
      <a href="#contact" className="nav-cta">
        Get in touch
      </a>
    </nav>
  );
};

export default Navbar;
