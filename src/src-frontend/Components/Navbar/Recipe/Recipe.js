import React from "react";
import { Link } from "react-router-dom";

const Recipe = ({ key, title, image }) => {
  return (
    <div>
      <Link to={`/recipes/${key}`} className="item">
        <h2>{title}</h2>
      </Link>
      <img src={image} />
    </div>
  );
};

export default Recipe;
