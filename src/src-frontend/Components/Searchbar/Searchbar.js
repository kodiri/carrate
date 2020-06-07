import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Searchbar.css";

import magnifierIcon from "../../Images/magnifier-icon.svg";
import filterIcon from "../../Images/filter-icon.svg";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };
  /* needs to be tied to the desired API

handleSubmit = (event) => {
  event.preventDefault();
  this.props.handleSearchSubmit(this.state.search)
}
*/

  render() {
    return (
      <div className="searchbar">
        <form onSubmit={this.handleSubmit}>
          <Link className="filter-icon">
            <img src={filterIcon} alt="Filter Icon" />
          </Link>
          <input
            className="searchbar-text"
            id="searchbar"
            type="text"
            name="search"
            placeholder="What's in the cupboard?"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <Link className="search-button" to="/results">
            <img src={magnifierIcon} alt="Search Button" />
          </Link>
        </form>
      </div>
    );
  }
}
