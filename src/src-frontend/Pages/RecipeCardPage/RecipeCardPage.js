import React, { useState, useEffect } from "react";

const API_URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772";

export default function RecipeCardPage() {
  const [recipe, setRecipe] = useState(undefined);

  useEffect(() => {
    async function getChosenRecipe() {
      const response = await fetch(API_URL);
      const data = await response.json();
      setRecipe(data.meals[0]);
    }
    getChosenRecipe();
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
    <div className="chosen-recipe-container">
      <h1>{strMeal}</h1>
      <div>
        <img src={strMealThumb} />{" "}
      </div>
      <h3>Recipe category: {strCategory}</h3>
      <h3>Dish type: {strArea}</h3>
      <h3>{strInstructions}</h3>
    </div>
  );
}
