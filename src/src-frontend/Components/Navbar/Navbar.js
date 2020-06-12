import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link className="navbar-item" to="/"></Link>
      <div className="navbar-item title"></div>

      <link
        href="https://fonts.googleapis.com/css2?family=Muli:wght@300&display=swap"
        rel="stylesheet"
      ></link>
    </div>
  );
}
