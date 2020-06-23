import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>Oops! Ingredient not recognised. Please try again</h1>
      <Link to="/">Back home</Link>
    </div>
  );
}
