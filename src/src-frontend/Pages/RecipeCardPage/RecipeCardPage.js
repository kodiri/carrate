import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./RecipeCardPage.css";

export default function RecipeCardPage({ match }) {
  const [recipe, setRecipe] = useState(undefined);

  useEffect(() => {
    async function getChosenRecipe() {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${match.params.id}`
      );
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
    <div className="recipe-container">
      <div className="meal">
        <div className="meal-img">
          <img src={strMealThumb} />{" "}
        </div>
        <div className="meal-details">
          <h1 className="meal-title">{strMeal}</h1>
          <p className="meal-instructions">
            {strInstructions /*.substring(0, 250) + "..."*/}
          </p>
          <ul className="meal-info">
            <li>
              Recipe category: <strong>{strCategory}</strong>
            </li>
            <li>
              Dish type: <strong>{strArea}</strong>
            </li>

            <button className="btn">
              {/* <a href="#"> */}
              <Link to="/">
                <i class="fa fa-arrow-left"></i> Back to Home
              </Link>
              {/* </a> */}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}
