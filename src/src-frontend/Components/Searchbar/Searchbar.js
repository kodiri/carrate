import React, { useEffect, useState } from "react";
import "./Searchbar.css";
import Recipe from "../Navbar/Recipe/Recipe.js";
import Menu from "../Navbar/Menu/Menu.js";
import magnifierIcon from "../../Images/magnifier-icon.svg";
import filterIcon from "../../Images/filter-icon.svg";
const APP = () => {
  const APP_ID = "948e2ff1";
  const APP_KEY = "2d7de9309cad9acbecd59a9acaa0b598";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  useEffect(() => {
    getRecipes();
  }, [query]);
  const getRecipes = async () => {
    const responce = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await responce.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    // setSearch(" ");  to empty the search bar after we pressed the submit button
  };
  return (
    <div className="APP">
      <form onSubmit={getSearch} className="searchbar">
        <Menu />
        <input
          className="searchbar-text"
          type="text"
          value={search}
          onChange={updateSearch}
          // name="search"
          placeholder="What's in the cupboard?"
        />
        <button className="search-button" type="submit">
          <img src={magnifierIcon} alt="search button" />
        </button>
      </form>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.id}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
};
export default APP;
