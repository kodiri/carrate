import React from "react";
import { Link } from "react-router-dom";
import "./Team.css";
import portfolio from "../../Images/portfolio.png";
import github from "../../Images/github-icon.svg";
import linkedin from "../../Images/linkedin-icon.svg";
import lauren from "../../Images/Team/lauren.JPG";

class Team extends React.Component {
  render() {
    return (
      <div className="team-grid">
        <h1>Meet Team Carrate</h1>
        <div className="team-member lauren">
          <h2 className="team-member-name">Lauren Pane</h2>
          <div className="photo-grid">
            <img src={lauren} alt="lauren photo" className="photo lauren" />
          </div>
          <div className="team-contact-grid">
            <img
              src={portfolio}
              alt="lauren portfolio"
              className="portfolio lauren"
            />
            <img
              src={linkedin}
              alt="lauren linkedin"
              className="linkedin lauren"
            />
            <img src={github} alt="lauren github" className="github lauren" />
          </div>
        </div>
        <div className="team-member max">
          <h2 className="team-member-name">Max De Burnay-Bastos</h2>
          <div className="photo-grid">
            <img src={lauren} alt="max photo" className="photo max" />
          </div>
          <div className="team-contact-grid">
            <img
              src={portfolio}
              alt="max portfolio"
              className="portfolio max"
            />
            <img src={linkedin} alt="max linkedin" className="linkedin max" />
            <img src={github} alt="max github" className="github max" />
          </div>
        </div>
        <div className="team-member lorraine">
          <h2 className="team-member-name">Lorraine Mills</h2>
          <div className="photo-grid">
            <img src={lauren} alt="lorraine photo" className="photo lorraine" />
          </div>
          <div className="team-contact-grid">
            <img
              src={portfolio}
              alt="lorraine portfolio"
              className="portfolio lorraine"
            />
            <img
              src={linkedin}
              alt="lorraine linkedin"
              className="linkedin lorraine"
            />
            <img
              src={github}
              alt="lorraine github"
              className="github lorraine"
            />
          </div>
        </div>
        <div className="team-member maxim">
          <h2 className="team-member-name">Maxim Botez</h2>
          <div className="photo-grid">
            <img src={lauren} alt="maxim photo" className="photo maxim" />
          </div>
          <div className="team-contact-grid">
            <img
              src={portfolio}
              alt="maxim portfolio"
              className="portfolio maxim"
            />
            <img
              src={linkedin}
              alt="maxim linkedin"
              className="linkedin maxim"
            />
            <img src={github} alt="maxim github" className="github maxim" />
          </div>
        </div>
        <div className="team-member rafal">
          <h2 className="team-member-name">Rafal Dworak</h2>
          <div className="photo-grid">
            <img src={lauren} alt="rafal photo" className="photo max" />
          </div>
          <div className="team-contact-grid">
            <img
              src={portfolio}
              alt="rafal portfolio"
              className="portfolio rafal"
            />
            <img
              src={linkedin}
              alt="rafal linkedin"
              className="linkedin rafal"
            />
            <img src={github} alt="rafal github" className="github rafal" />
          </div>
        </div>
        <button className="btn">
          {/* <a href="#"> */}
          <Link to="/">
            <i className="fa fa-arrow-left"></i> Back to Home
          </Link>
          {/* </a> */}
        </button>
      </div>
    );
  }
}

export default Team;
