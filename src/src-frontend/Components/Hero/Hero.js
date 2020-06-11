import React from "react";
import "./Hero.css";
import carrate from "./carrate.png";

<<<<<<< HEAD
const Hero = () => {
  return (
    <div className="wrapper">
      <div className="logo-container">
        <img src={carrate} alt={carrate} />
      </div>
      <p> Carrate</p>
    </div>
  );
};
=======

function Hero () {
    return(

        <div className="wrapper">
                <div className="logo-container"><img src={carrate} alt={carrate}/></div>
                <p> Carrate</p>
        </div>
    )
}
>>>>>>> b8bff279b052509161b86223c3afebc669e91def

export default Hero;
