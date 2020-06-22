import React from "react";
import { Link } from "react-router-dom";

const Recipe = ({ id, title, image }) => {
  return (
    <div className="results-grid">
      <h2 className="results-title">{title}</h2>
      <Link to={`/recipes/${id}`} className="item">
        <img className="results-image" src={image} />
      </Link>
    </div>
  );
};

export default Recipe;
