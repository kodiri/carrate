import React, { useState, useEffect } from "react";
import "./Menu.css";
import filterIcon from "../../../Images/filter-icon.svg";
// import { Link } from "react-router-dom";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");


  const getSearch = (e) => {
    setQuery(e.target.value);
    console.log({query});
  }

  return (
    <>
      {/* // <div className="menu-container"> */}
      <button className="filter-button" onClick={() => setMenuOpen(!menuOpen)}>
        <img src={filterIcon} alt="filter button" />
      </button>
      {menuOpen && (
        <div className="menu-list">
            <button className='filter-box' value='Seafood' onClick={getSearch}>Seafood</button>
            <button className='filter-box' value='Beef' onClick={getSearch}>Beef</button>
            <button className='filter-box' value='Chicken' onClick={getSearch}>Chicken</button>
            <button className='filter-box' value='Dessert' onClick={getSearch}>Dessert</button>
            <button className='filter-box' value='Lamb' onClick={getSearch}>Lamb</button>
            <button className='filter-box' value='Pasta' onClick={getSearch}>Pasta</button>
            <button className='filter-box' value='Pork' onClick={getSearch}>Pork</button>
            <button className='filter-box' value='Side' onClick={getSearch}>Side</button>
            <button className='filter-box' value='Starter' onClick={getSearch}>Starter</button>
            <button className='filter-box' value='Vegan' onClick={getSearch}>Vegan</button>
            <button className='filter-box' value='Vegetarian' onClick={getSearch}>Vegetarian</button>
            <button className='filter-box' value='Breakfast' onClick={getSearch}>Breakfast</button>
            <button className='filter-box' value='Goat' onClick={getSearch}>Goat</button>
        </div>        
      )
      }
      {/* // </div> */}
    </>
  );
}