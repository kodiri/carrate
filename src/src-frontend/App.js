import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.js";
import Homepage from "./Pages/Homepage/Homepage.js";
import Hero from "./Components/Hero/Hero.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Hero />
        <Switch>
          <Homepage />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
