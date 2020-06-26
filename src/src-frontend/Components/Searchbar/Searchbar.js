import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Searchbar.css";
import Recipe from "../Navbar/Recipe/Recipe.js";
import Menu from "../Navbar/Menu/Menu.js";
import NotFound from "../NotFound/NotFound.js";
import magnifierIcon from "../../Images/magnifier-icon.svg";
import resetIcon from "../../Images/reset.png";
import { useIsMount } from "./useIsMount";
import { useHistory } from "react-router-dom";

const APP = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const history = useHistory();
  const isMount = useIsMount();

  // useEffect(() => {
  //   getRecipes();
  // }, [query]);

  useEffect(() => {
    if (isMount) {
      console.log("First Render");
    } else {
      getRecipes();
    }
  }, [query]);

  /*
  const getRecipes = async () => {
    if (categorySelect) {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorySelect}`
      );
      const data = await response.json();
      setRecipes(data.meals);
      console.log(data.meals);
      } else {
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`
          );
          const data = await response.json();
          setRecipes(data.meals);
      }
  };
*/

  const getRecipes = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`
    );
    const data = await response.json();
    setRecipes(data.meals);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="APP">
      <form onSubmit={getSearch} className="searchbar">
        {/* <div className="searchbar-button-container">
          <Menu />
        </div> */}
        <input
          className="searchbar-text"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="What do you want to use up?"
        />
        <div className="searchbar-button-container">
          <button className="search-button" type="submit">
            <img src={magnifierIcon} alt="search button" />
          </button>
        </div>
        {/* <button className="searchbar-reset" onClick={() => setRecipes([])}>
          <img className="reset-icon" src={resetIcon} alt="reset" />
        </button> */}
      </form>
      <div className="recipe-results">
        {recipes === null ? (
          <Redirect to="/notfound" />
        ) : (
          recipes.map((recipe) => (
            <Recipe
              key={recipe.idMeal}
              id={recipe.idMeal}
              title={recipe.strMeal}
              image={recipe.strMealThumb}
            />
          ))
        )}
      </div>
    </div>
  );
};
export default APP;
