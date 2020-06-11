import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Searchbar.css";
import Recipe from '../Navbar/Recipe/Recipe.js'

import magnifierIcon from "../../Images/magnifier-icon.svg";
import filterIcon from "../../Images/filter-icon.svg";

const APP = () => {

    const APP_ID = "948e2ff1";
    const APP_KEY = "2d7de9309cad9acbecd59a9acaa0b598";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('banana');

    useEffect(() => {
        getRecipes();
    }, [query]);


    const getRecipes = async () => {
        const responce = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);

        const data = await responce.json();
        setRecipes(data.hits)
        console.log(data.hits);
    }
    const updateSearch = e => {
        setSearch(e.target.value);
        // console.log(search);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        // setSearch(" ");  to empty the search bar after we pressed the submit button
    }

    return (
        <div className="APP">
            <form onSubmit={getSearch} className="searchbar" >
                <input
                    className="searchbar-text"
                    type="text"
                    value={search}
                    onChange={updateSearch}
                    // name="search"
                    placeholder="type here"
                     />
                <button className="search-btn" type="submit">Search</button>
            </form>
            {recipes.map(recipe => (
                <Recipe 
                key={recipe.recipe.id}
                title={recipe.recipe.label} 
                calories={recipe.recipe.calories} 
                image={recipe.recipe.image }
                />
            ))}
        </div>
    )
}

export default APP;

/*
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
*/

/* needs to be tied to the desired API

handleSubmit = (event) => {
  event.preventDefault();
  this.props.handleSearchSubmit(this.state.search)
}
*/

/*
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
*/
