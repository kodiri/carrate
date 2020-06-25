import React, { useState, useEffect } from "react";
import "./Menu.css";
import filterIcon from "../../../Images/filter-icon.svg";
import Recipe from "../../Navbar/Recipe/Recipe.js";
import { useIsMount } from "../../Searchbar/useIsMount.js";
// import { Link } from "react-router-dom";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const isMount = useIsMount();

  useEffect(() => {
    if (isMount) {
      console.log("First Render");
    } else {
      getRecipes();
    }
  }, [query]);

  const getSearch = (e) => {
    setQuery(e.target.value);
  };

  const getRecipes = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${query}`
    );
    const data = await response.json();
    setRecipes(data.meals);
    console.log(data.meals);
  };

  function openNav() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      {/* // <div className="menu-container">  */}
      <button className="filter-button" onClick={openNav}>
        <img src={filterIcon} alt="filter button" />
      </button>
      {menuOpen && (
        <>
          <ul className="menu-list">
            <li className="filter-box" value="Seafood" onClick={getSearch}>
              Seafood
            </li>
            <li className="filter-box" value="Beef" onClick={getSearch}>
              Beef
            </li>
            <li className="filter-box" value="Chicken" onClick={getSearch}>
              Chicken
            </li>
            <li className="filter-box" value="Dessert" onClick={getSearch}>
              Dessert
            </li>
            <li className="filter-box" value="Lamb" onClick={getSearch}>
              Lamb
            </li>
            <li className="filter-box" value="Pasta" onClick={getSearch}>
              Pasta
            </li>
            <li className="filter-box" value="Pork" onClick={getSearch}>
              Pork
            </li>
            <li className="filter-box" value="Side" onClick={getSearch}>
              Side
            </li>
            <li className="filter-box" value="Starter" onClick={getSearch}>
              Starter
            </li>
            <li className="filter-box" value="Vegan" onClick={getSearch}>
              Vegan
            </li>
            <li className="filter-box" value="Vegetarian" onClick={getSearch}>
              Vegetarian
            </li>
            <li className="filter-box" value="Breakfast" onClick={getSearch}>
              Breakfast
            </li>
          </ul>
        </>
      )}
      <div className="recipe-category-results">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.idMeal}
            id={recipe.idMeal}
            title={recipe.strMeal}
            image={recipe.strMealThumb}
          />
        ))}
      </div>
    </>
  );
}
