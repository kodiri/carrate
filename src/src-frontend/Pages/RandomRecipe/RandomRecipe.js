import React, { useState, useEffect } from "react";
import "./RandomRecipe.css";


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
    <div className="recipe-container">
      <div className="meal">
          <div className="meal-img">
            <img src={strMealThumb} />{" "}
          </div>
          <div className="meal-details">
            <h1 className="meal-title">{strMeal}</h1>
            <p className="meal-instructions">
            {strInstructions.substring(0, 251) + "..."}
            </p>
            <ul className="meal-info">
              <li>
                Recipe category: <strong>{strCategory}</strong>
              </li>
              <li>
                Dish type: <strong>{strArea}</strong>
              </li>

            <button className="btn">
              <a href="#"> View Recipe <i class="fa fa-arrow-right"></i></a>
            </button>  
            </ul>   
          </div> 
        </div> 
    </div>
  );
}




