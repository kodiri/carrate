import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Menu from "./Menu/Menu.js";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link className="navbar-item" to="/">
        Home
      </Link>
      <Menu />
    </div>
  );
}
