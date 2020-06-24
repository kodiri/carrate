import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./Homepage.css";
import Searchbar from "../../Components/Searchbar/Searchbar.js";
import InspireButton from "../../Components/InspireButton/InspireButton.js";
import Hero from "../../Components/Hero/Hero.js";
<<<<<<< HEAD
import Team from '../../Components/Team/Team.js'
=======
import Team from "../../Components/Team/Team.js";
>>>>>>> upstream/master

export default function Homepage() {
  return (
    <>
<<<<<<< HEAD
      <div className="homepage-container">
        <link
          href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
          rel="stylesheet"
        ></link>
        <Hero />
        <Searchbar />
        <InspireButton />
        <Team />
=======
      <div className="homepage">
        <div className="homepage-container">
          <link
            href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
            rel="stylesheet"
          ></link>
          <Hero />
          <Searchbar />
          <InspireButton />
        </div>
>>>>>>> upstream/master
      </div>
    </>
  );
}
