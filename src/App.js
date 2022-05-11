import './App.css';
import Searchbar from './components/searchbar';
import Currentweather from './components/current-weather';
import React from 'react';
import { getCurrentWeather } from './apis/open-weather.apis';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location : "",
      temp: "",
      feelsLike:"",
      description:"",
      icon:""
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

  onFormSubmit(){
    getCurrentWeather(this.state.location).then((res) => {
      this.setState({
        temp: res.data.main.temp,
        feelsLike: res.data.main.feels_like,
        description: res.data.weather[0].main,
        icon: res.data.weather[0].icon
      });
      
      // console.log('farenheit temp: ', res.data.main.temp);
    });
  }
  render(){
    return (
      <div className="App">
        <header className='App-header'>
        <Searchbar 
        location={this.state.location} 
        inputChange={e => this.onInputChange(e)} 
        formSubmitted={() => this.onFormSubmit()}
        />
        <Currentweather 
        currentTemperature={this.state.temp}
        feelsLike={this.state.feelsLike}
        description={this.state.description}
        icon={this.state.icon}
        />
        </header>
        
      </div>
    );
  }
 
}

export default App;
