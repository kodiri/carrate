import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage.js";
import RandomRecipe from "./Pages/RandomRecipe/RandomRecipe.js";
import RecipeCardPage from "./Pages/RecipeCardPage/RecipeCardPage.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            exact
            path="/randomRecipe"
            component={withRouter(RandomRecipe)}
          />
          <Route exact path={"/recipes/:id"}  component={RecipeCardPage} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
