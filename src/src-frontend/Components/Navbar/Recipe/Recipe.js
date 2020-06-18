import React from "react";
import { Link } from "react-router-dom";

const Recipe = ({ title, calories, image, id }) => {
  return (
    <div>
      <Link to={`/${id}`} className="item">
        <h2>{title}</h2>
      </Link>
      <p>{Math.round(calories)} calories</p>
      <img src={image} />
    </div>
  );
};

export default Recipe;
