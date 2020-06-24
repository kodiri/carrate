import React from "react";
import "./Hero.css";
import carrate from "./carrate.png";

function Hero() {
  return (
    <div className="wrapper">
      <div className="logo-container">
        <img className="logo-img" src={carrate} alt={carrate} />
      </div>
      <p className="logo-text">carrate</p>
      <link
        href="https://fonts.googleapis.com/css2?family=Carme&display=swap"
        rel="stylesheet"
      ></link>
    </div>
  );
}

export default Hero;
