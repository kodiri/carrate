import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.js";
import Homepage from "./Pages/Homepage/Homepage.js";
import RecipeCardPage from "./Pages/RecipeCardPage/RecipeCardPage.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Homepage />
          <Route exact path="/:recipeId" component={RecipeCardPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
