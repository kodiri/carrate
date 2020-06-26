import React, { useState } from "react";
import RightNav from "./RightNav.js";
import filterIcon from "../../Images/filter-icon.svg";

export default function Filter() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div>
        <button
          className="filter-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img src={filterIcon} alt="filter button" />
        </button>
      </div>
      <RightNav menuOpen={menuOpen} />
    </>
  );
}
