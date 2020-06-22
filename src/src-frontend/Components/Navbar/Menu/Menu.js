import React, { useState } from "react";
import "./Menu.css";
import filterIcon from "../../../Images/filter-icon.svg";
// import { Link } from "react-router-dom";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* // <div className="menu-container"> */}
      <button className="filter-button" onClick={() => setMenuOpen(!menuOpen)}>
        <img src={filterIcon} alt="filter button" />
      </button>
      {menuOpen && (
        <div className="menu-list">
            <label class="dropdown-item"><input type="checkbox" name="gluten" value="Gluten"/>Gluten Free</label>   
            <label class="dropdown-item"><input type="checkbox" name="gluten" value="Sulfites"/>Sulfites Free</label>     
        </div>
      )
      }
      {/* // </div> */}
    </>
  );
}

export function selectedValues(){
  const values = Array
  .from(document.querySelectorAll('input[type="checkbox"]'))
  .filter((checkbox) => checkbox.checked)
  .map((checkbox) => checkbox.value);
 return values;                              
}