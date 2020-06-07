import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import carrateAvatar from "../../Images/carrate.jpg";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link className="navbar-item" to="/">
        <img
          className="navbar-item carrate-avatar"
          src={carrateAvatar}
          alt="Carrate Avatar"
        />
      </Link>
      <div className="navbar-item title">carrate</div>

      <link
        href="https://fonts.googleapis.com/css2?family=Muli:wght@300&display=swap"
        rel="stylesheet"
      ></link>
    </div>
  );
}
