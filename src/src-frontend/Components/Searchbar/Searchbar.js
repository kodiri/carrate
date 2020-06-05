import React, {Component} from "react";
import "./Searchbar.css";

/*
export default function Searchbar() {
  return <div>Hello, searchbar!</div>;
}
*/
export default class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = {
        search: ''
    }
}
handleChange = (event) => {
  this.setState({
      search: event.target.value
  })
}
/* needs to be tied to the desired API

handleSubmit = (event) => {
  event.preventDefault();
  this.props.handleSearchSubmit(this.state.search)
}
*/

  render (){
    return (
      <div className='search'>
        <form onSubmit={this.handleSubmit}>
              <input id='searchbar' type='text' name='search' 
                  placeholder='Search my igredients' 
                  value={this.state.search} onChange={this.handleChange}
              />
              <input type='submit' value='Search'/>
        </form>
      </div>
    )
  }
}