import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./Homepage.css";
import Searchbar from "../../Components/Searchbar/Searchbar.js";
import InspireButton from "../../Components/InspireButton/InspireButton.js";

export default function Homepage() {
  return (
    <>
      <Router>
        <div className="homepage-container">
          <link
            href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
            rel="stylesheet"
          ></link>
          <Searchbar />
          <InspireButton />
        </div>
      </Router>
    </>
  );
}
