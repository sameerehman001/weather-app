import React from 'react'

export default class Currentweather extends React.Component {
  render() {
      const url = `http://openweathermap.org/img/wn/${this.props.icon}@2x.png`
      const tempToCelcius=(farenheit)=>{
          return ((farenheit-32)*(5/9).toFixed(2))
      }
    return (
      <div className='current-weather'>
          <div className='current-weather__content'>
              <p className='current-weather__temp'>{tempToCelcius(this.props.currentTemperature)}</p>
              <p className='current-weather__description'>{this.props.description}</p>
              <img className='current-weather__icon' src={url} alt={this.props.description} />   
              {console.log(this.props)}           

          </div>
          <div>
              <p className='current-weather__feels-like'>Feels Like: {this.props.feelsLike}</p>
          </div>

      </div>
    );
  }
}
