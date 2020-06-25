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
import Team from "./Pages/Team/Team.js";
import NotFound from "./Components/NotFound/NotFound.js";
//import Recipe from "./Components/Navbar/Recipe/Recipe.js";

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
          <Route exact path={"/recipes/:id"} component={RecipeCardPage} />
          <Route exact path={"/team"} component={Team} />
          <Route exact path="/notfound" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
