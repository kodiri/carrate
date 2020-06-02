import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./src-frontend/Components/Navbar/Navbar.js";
import Homepage from "./src-frontend/Pages/Homepage/Homepage.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Homepage />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
