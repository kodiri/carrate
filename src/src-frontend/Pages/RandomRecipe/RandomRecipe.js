import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./RandomRecipe.css";

const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php";

export default function RandomRecipe() {
  const [recipe, setRecipe] = useState(undefined);
  const history = useHistory();

  function goHome() {
    history.push("/");
  }

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
    <div clasName="inspired-heading">
      <h1>Feeling inspired?</h1>
      <div className="recipe-container">
        <div className="meal">
          <div className="meal-img">
            <img src={strMealThumb} />{" "}
          </div>
          <div className="meal-details">
            <h1 className="meal-title">{strMeal}</h1>
            <p className="meal-instructions">
              {strInstructions /*.substring(0, 251) + "..."*/}
            </p>
            <ul className="meal-info">
              <li>
                Recipe category: <strong>{strCategory}</strong>
              </li>
              <li>
                Dish type: <strong>{strArea}</strong>
              </li>

              <button className="btn" onClick={goHome}>
                <i class="fa fa-arrow-left"></i> Back to Home
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
