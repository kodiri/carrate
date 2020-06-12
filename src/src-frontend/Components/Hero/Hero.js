import React from "react";
import "./Hero.css";
import carrate from "./carrate.png";

function Hero() {
  return (
    <div className="wrapper">
      <div className="logo-container">
        <img src={carrate} alt={carrate} />
      </div>
      <p> Carrate</p>
    </div>
  );
}

export default Hero;
