import React from "react";
import { useHistory } from "react-router-dom";
import "./NotFound.css";
import carrate from "../../Images/sad-carrate.jpg";
export default function NotFound() {
  const history = useHistory();
  function goHome() {
    history.push("/");
  }
  return (
    <div className="not-found">
      <div className="not-found-logo-grid">
        <img src={carrate} alt="carrate" className="not-found-logo" />
      </div>
      <div className="not-found-message">
        <h1 className="message">
          Oops!
          <br />
          Carrate doesn't recognise this.
          <br />
          Please enter a different ingredient
        </h1>
        <button className="btn" onClick={goHome}>
          <i class="fa fa-arrow-left"></i> Back to Home
        </button>
      </div>
    </div>
  );
}
