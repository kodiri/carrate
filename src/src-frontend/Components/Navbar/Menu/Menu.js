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
          <div className="menu-link">Categories</div>
        </div>
      )}
      {/* // </div> */}
    </>
  );
}
