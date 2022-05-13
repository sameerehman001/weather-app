import React, { Component } from 'react'

export default class ForcastWeather extends Component {
  render() {
      const forecastItems = this.props.forecast.map((f) => {
          const url = `http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`
          let ampm = "AM"
          let hour = new Date(f.dt * 1000).getHours();

          if(hour > 12){
              hour = hour -12;
              ampm = "PM";
          }

          return(
              <div className='forecast-item'>
                  <p>_____________________________________________________________________________________________________________</p>
                  <p className='forecat-item__hour'>{hour}:00 {ampm}{" "}</p>
                  <p className='forecast-item__temp'>Temperatue : {f.temp} fahrenheit </p>
                  <img src={url} alt={f.weather[0].description} />
                  <p className='forecast-item__description'>Description : {f.weather[0].main}</p>
                  <p>_____________________________________________________________________________________________________________</p>
              </div>
          );
      });
    return (
      <div className='forecast'>{forecastItems}</div>
    )
  }
}
