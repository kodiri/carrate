import React from "react";
import "./Homepage.css";
// import Searchbar from "../../Components/Searchbar/Searchbar.js";
import { BrowserRouter as Router } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <Router>
        <div className="homepage-container">
          <h1 className="homepage-title">Carrate</h1>
          <link
            href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap"
            rel="stylesheet"
          ></link>
          <div className="homepage-searchbar"></div>
          <div className="homepage-button-container">
            <button className="homepage-button">Categories</button>
            <button className="homepage-button">Filter</button>
            <button className="homepage-button">Inspire Me</button>
            <button className="homepage-button">Share</button>
          </div>
        </div>
        {/* <Searchbar /> */}
      </Router>
    </>
  );
}
