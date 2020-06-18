import React, { useState, useEffect } from "react";
import "./RecipeCardPage.css";

const API_URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772";

export default function GetRecipe() {
  const [recipe, setRecipe] = useState(undefined);
  useEffect(() => {
    async function getRecipe() {
      const res = await fetch(API_URL);
      const data = await res.json();

      setRecipe(data.meals[0]);
    }

    getRecipe();
  }, []);

  if (!recipe) return null;

  return (
    <div className="chosen-recipe">
      <h3 className="chosen-recipe-title">{meal.strMeal}</h3>
      <div className="chosen-recipe-img">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </div>
      <h5 className="chosen-recipe-instructions">{meal.strInstructions}</h5>
    </div>
  );
}
