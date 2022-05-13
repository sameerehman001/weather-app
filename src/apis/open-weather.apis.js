import axios from "axios";

// const API_KEY = '25ce23fd1e4f3a761d0491ad895ffb52';
axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5/';
const appIdQueryParam = `appid=${process.env.REACT_APP_API_KEY}`;

function getCurrentWeather(location){
return axios.get(
    `weather?q=${location}&units=imperial&${appIdQueryParam}`
);
}

function getForcast(lat, lon){
    return axios.get(
        `onecall?lat=${lat}&lon=${lon}&${appIdQueryParam}`
    )
}

export {
    getCurrentWeather,
    getForcast
}