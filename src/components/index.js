import React from "react";
import HeroSection from "./v1/heroSection";

const HeroSectionIndex = () => {
  return (
    <div className="navbar__box">
      <h2>HeroSection Components</h2>
      <div>
        <div className="textbox">
          <p>Hero Section Version1.2.0</p>
        </div>
        <HeroSection />
      </div>
    </div>
  );
};

export default HeroSectionIndex;
