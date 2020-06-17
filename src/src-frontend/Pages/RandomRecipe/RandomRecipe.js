import React, { useState, useEffect } from "react";

const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php";

export default function RandomRecipe() {
  const [recipe, setRecipe] = useState(undefined);

  useEffect(() => {
    async function getRandomMeal() {
      const response = await fetch(API_URL);
      const data = await response.json();
      setRecipe(data.meals[0]);
    }
    getRandomMeal();
  }, []);

  if (!recipe) return null;

  const {
    strMeal,
    strMealThumb,
    strInstructions,
    strArea,
    strCategory,
  } = recipe;

  return (
    <div className="random-recipe-container">
      <h1>Random Recipe</h1>
      <div>
        <img src={strMealThumb} />{" "}
      </div>
      <h3>{strMeal}</h3>
      <h3>Recipe category: {strCategory}</h3>
      <h3>Dish type: {strArea}</h3>
      <h3>{strInstructions}</h3>
    </div>
  );
}
