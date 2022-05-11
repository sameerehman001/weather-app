import axios from "axios";

// const API_KEY = '25ce23fd1e4f3a761d0491ad895ffb52';

function getCurrentWeather(location){
return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}`
);
}

export {
    getCurrentWeather
}