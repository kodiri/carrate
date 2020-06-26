import React, { useState } from "react";

const RightNav = ({ open }) => {
  const [query, setQuery] = useState("");

  const getSearch = (e) => {
    setQuery(e.target.value);
  };
  return (
    <ul open={open} className="menu-list">
      <li className="filter-box" value="Seafood" onClick={getSearch}>
        Seafood
      </li>
      <li className="filter-box" value="Beef" onClick={getSearch}>
        Beef
      </li>
      <li className="filter-box" value="Chicken" onClick={getSearch}>
        Chicken
      </li>
      <li className="filter-box" value="Dessert" onClick={getSearch}>
        Dessert
      </li>
      <li className="filter-box" value="Lamb" onClick={getSearch}>
        Lamb
      </li>
      <li className="filter-box" value="Pasta" onClick={getSearch}>
        Pasta
      </li>
      <li className="filter-box" value="Pork" onClick={getSearch}>
        Pork
      </li>
      <li className="filter-box" value="Side" onClick={getSearch}>
        Side
      </li>
      <li className="filter-box" value="Starter" onClick={getSearch}>
        Starter
      </li>
      <li className="filter-box" value="Vegan" onClick={getSearch}>
        Vegan
      </li>
      <li className="filter-box" value="Vegetarian" onClick={getSearch}>
        Vegetarian
      </li>
      <li className="filter-box" value="Breakfast" onClick={getSearch}>
        Breakfast
      </li>
    </ul>
  );
};

export default RightNav;
