import React from "react";
import "./Homepage.css";
import Searchbar from "../../Components/Searchbar/Searchbar.js";
import { BrowserRouter as Router } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <Router>
        <div>Welcome to Carrate!</div>
        <Searchbar />
      </Router>
    </div>
  );
}
