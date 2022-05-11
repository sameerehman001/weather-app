import React from 'react'
import { getCurrentWeather } from '../apis/open-weather.apis';

export default class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location : "",
      temp: ""
    };

    // getCurrentWeather('New York').then((res) => {
    //   console.log('res ', res);
    // })
  }

  onInputChange(e){ 
    this.setState({
      location: e.target.value
    });
  }

  onFormSubmit(e){
    e.preventDefault();

    getCurrentWeather(this.state.location).then((res) => {
      this.setState({
        temp: res.data.main.temp
      });
      
      // console.log('farenheit temp: ', res.data.main.temp);
    });
  }
  

  render() {    
    const location = this.state.location;
    const temp = this.state.temp;

    return (
      <div>
        <form onSubmit={(e) => this.onFormSubmit(e) }>
          <button type='submit'>
            Search
          </button>
          <input 
          id="search" 
          name="search"
          value={location}
          onChange={(e)=> this.onInputChange(e)}
          ></input>
        </form>
        <p>
          {temp}
        </p>
      </div>
    )
  }
}
