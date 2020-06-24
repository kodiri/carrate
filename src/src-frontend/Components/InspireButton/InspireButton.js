import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./InspireButton.css";

export default function InspireButton() {
  const history = useHistory();
  function goRandomRecipePage() {
    return history.push("/randomRecipe");
  }

  return (
    <div className="inspire-btn-container">
      <button className="inspire-btn" onClick={goRandomRecipePage}>
        Inspire Me
      </button>
      <link
        href="https://fonts.googleapis.com/css2?family=Signika&display=swap"
        rel="stylesheet"
      ></link>
    </div>
  );
}
