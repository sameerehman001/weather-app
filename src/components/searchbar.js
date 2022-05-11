import React from 'react'
import { getCurrentWeather } from '../apis/open-weather.apis';

export default class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location : "PAkistan",
    };

    getCurrentWeather('New York').then((res) => {
      console.log('res ', res);
    })
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
