import React, { Component } from 'react'

export default class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location : "PAkistan",
    };
  }
  onInputChange(e){
    this.setState({
      location: e.target.value
    });
  }
  onFormSubmit(e){
    e.preventDefault();
  }
  

  render() {    
    const locstion = this.state.location;

    return (
      <div>
        <form onSubmit={(e) => this.onFormSubmit(e) }>
          <button type='submit'>
            Search
          </button>
          <input 
          id="search" 
          name="search"
          value={this.location}
          onChange={(e)=> this.onInputChange(e)}
          ></input>
        </form>
      </div>
    )
  }
}
