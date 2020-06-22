import React, { useEffect, useState } from "react";
import "./Searchbar.css";
import Recipe from "../Navbar/Recipe/Recipe.js";
import Menu, { selectedValues } from "../Navbar/Menu/Menu.js";
import magnifierIcon from "../../Images/magnifier-icon.svg";
import { useIsMount } from './useIsMount';

const APP = () => {
  const APP_ID = "948e2ff1";
  const APP_KEY = "2d7de9309cad9acbecd59a9acaa0b598";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const isMount = useIsMount();

 // useEffect(() => {
 //   getRecipes();
 // }, [query]);


  useEffect(() => {
    if (isMount) {
      console.log('First Render');
    } else {
      getRecipes();
    }
  },[query]);

  const getRecipes = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`);
    const data = await response.json();
    setRecipes(data.meals);
    //console.log(data.meals);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  const checkedValues = selectedValues();
  console.log(checkedValues);

  return (
    <div className="APP">
      <form onSubmit={getSearch} className="searchbar">
        <Menu />
        <input
          className="searchbar-text"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="What do you want to use up?"
        />
        <button className="search-button" type="submit">
          <img src={magnifierIcon} alt="search button" />
        </button>
      </form>
      
      {recipes.map((recipe) => (
          <Recipe
            key={recipe.idMeal}
            id={recipe.idMeal}
            title={recipe.strMeal}
            image={recipe.strMealThumb}
          />
        ))}
    </div>
  );
};
export default APP;
