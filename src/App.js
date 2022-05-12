import './App.css';
import Searchbar from './components/searchbar';
import Currentweather from './components/current-weather';
import React from 'react';
import { getCurrentWeather, getForcast } from './apis/open-weather.apis';
import ForcastWeather from './components/forcast-weather';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location : "",
      temp: "",
      feelsLike:"",
      description:"",
      icon:"",
      hourlyForecast: []
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

  async onFormSubmit(){

    const weatherRes = await getCurrentWeather(this.state.location);
    const lat = weatherRes.data.coord.lat;
    const lon = weatherRes.data.coord.lon;
    const forecastRes = await getForcast(lat, lon);


    // getCurrentWeather(this.state.location).then((res) => {
      this.setState({
        temp: weatherRes.data.main.temp,
        feelsLike: weatherRes.data.main.feels_like,
        description: weatherRes.data.weather[0].main,
        icon: weatherRes.data.weather[0].icon,
        hourlyForecast: forecastRes.data.hourly
      });
      
    //   // console.log('farenheit temp: ', res.data.main.temp);
    // }
    // );
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
        <ForcastWeather forecast={this.state.hourlyForecast} />
        </header>
        
      </div>
    );
  }
 
}

export default App;
