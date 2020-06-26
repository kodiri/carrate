import React from "react";
import { useHistory } from "react-router-dom";
import "./Team.css";
import portfolio from "../../Images/portfolio.png";
import github from "../../Images/github-icon.svg";
import linkedin from "../../Images/linkedin-icon.svg";
import lauren from "../../Images/Team/lauren.JPG";
import lorraine from "../../Images/Team/lorraine.jpg";
import max from "../../Images/Team/max.jpeg";
import maxim from "../../Images/Team/maxim.jpg";
import rafal from "../../Images/Team/rafal.png";

export default function Team() {
  const history = useHistory();

  function goHome() {
    history.push("/");
  }

  return (
    <div className="team-grid">
      <h1>Meet Team Carrate</h1>
      <div className="team-member max">
        <div className="team-member-name">
          <h2>Max De Burnay</h2>
        </div>
        <div className="photo-grid">
          <img src={max} alt="max photo" className="photo max" />
        </div>
        <div className="team-contact-grid">
          <a
            className="portfolio"
            href="https://portfolio-kappa-woad.now.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={portfolio} alt="portfolio" className="photo" />
          </a>
          <a
            className="linked"
            href="https://www.linkedin.com/in/max-de-burnay-bastos-009b65197/?originalSubdomain=uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt=" linkedin" className="photo" />
          </a>
          <a
            className="github max"
            href="https://github.com/mdeburnay"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" className="photo" />
          </a>
        </div>
      </div>
      <div className="team-member lorraine">
        <div className="team-member-name">
          <h2>Lorraine Mills</h2>
        </div>
        <div className="photo-grid">
          <img src={lorraine} alt="lorraine photo" className="photo lorraine" />
        </div>
        <div className="team-contact-grid">
          <a
            className="portfolio lorraine"
            href="https://portfolio2-silk.now.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={portfolio} alt="portfolio" className="photo" />
          </a>
          <a
            className="linked lorraine"
            href="https://www.linkedin.com/in/millslorraine/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt=" linkedin" className="photo" />
          </a>
          <a
            className="github lorraine"
            href="https://github.com/djmissmills"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="lauren github" className="photo lauren" />
          </a>
        </div>
      </div>
      <div className="team-member lauren">
        <div className="team-member-name">
          <h2>Lauren Pane</h2>
        </div>
        <div className="photo-grid">
          <img src={lauren} alt="lauren photo" className="photo lauren" />
        </div>
        <div className="team-contact-grid">
          <a
            className="portfolio lauren"
            href="https://portfoliolp.now.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={portfolio}
              alt="lauren portfolio"
              className="photo lauren"
            />
          </a>
          <a
            className="linked lauren"
            href="https://uk.linkedin.com/in/lauren-pane-773169169"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              alt="lauren linkedin"
              className="photo lauren"
            />
          </a>
          <a
            className="github lauren"
            href="https://github.com/laurenpane"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="lauren github" className="photo lauren" />
          </a>
        </div>
      </div>
      <div className="team-member maxim">
        <div className="team-member-name">
          <h2>Maxim Botez</h2>
        </div>
        <div className="photo-grid">
          <img src={maxim} alt="maxim photo" className="photo maxim" />
        </div>
        <div className="team-contact-grid">
          <a
            className="portfolio maxim"
            href="https://react-portfolio-iota.vercel.app/#home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={portfolio} alt="portfolio" className="photo" />
          </a>
          <a
            className="linked maxim"
            href="https://www.linkedin.com/m/in/max-botez-72618568"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin" className="photo" />
          </a>
          <a
            className="github"
            href="https://github.com/sinner883"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" className="photo" />
          </a>
        </div>
      </div>
      <div className="team-member rafal">
        <div className="team-member-name">
          <h2>Rafal Dworak</h2>
        </div>
        <div className="photo-grid">
          <img src={rafal} alt="rafal photo" className="photo max" />
        </div>
        <div className="team-contact-grid">
          <a
            className="portfolio"
            href="https://portfoliolp.now.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={portfolio} alt="portfolio" className="photo" />
          </a>
          <a
            className="linked"
            href="https://www.linkedin.com/in/rdworak/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin" className="photo" />
          </a>
          <a
            className="github"
            href="https://github.com/rafdworak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="lauren github" className="photo lauren" />
          </a>
        </div>
      </div>
      <button className="btn" onClick={goHome}>
        <i class="fa fa-arrow-left"></i> Back to Home
      </button>
    </div>
  );
}
