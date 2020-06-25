import React from "react";
import { useHistory } from "react-router-dom";

import "./Homepage.css";
import Searchbar from "../../Components/Searchbar/Searchbar.js";
import InspireButton from "../../Components/InspireButton/InspireButton.js";
import Hero from "../../Components/Hero/Hero.js";

export default function Homepage() {
  const history = useHistory();
  function getTeam() {
    return history.push("/team");
  }
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
        rel="stylesheet"
      ></link>
      <div className="homepage">
        <div className="homepage-container">
          <Hero />
          <Searchbar />
          <div className="buttons">
            <InspireButton />
            <button className="meet-team" onClick={getTeam}>
              Meet the Team
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
