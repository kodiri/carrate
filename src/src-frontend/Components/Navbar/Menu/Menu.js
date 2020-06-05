import React, { useState } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="menu-container">
      <button className="menu-header" onClick={() => setMenuOpen(!menuOpen)}>
        Browse all recipes
      </button>
      {menuOpen && (
        <div className="menu-list">
          <div className="menu-link">Browse by category</div>
        </div>
      )}
    </div>
  );
}
