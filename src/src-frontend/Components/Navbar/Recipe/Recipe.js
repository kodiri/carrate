import React from "react";
import { Link } from "react-router-dom";

const Recipe = ({ id, title, image }) => {
  return (
    <div>
      <Link to={`/recipes/${id}`} className="item">
        <h2>{title}</h2>
      </Link>
      <img src={image} />
    </div>
  );
};

export default Recipe;
