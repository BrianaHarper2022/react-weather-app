import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        setWeatherData([
            {
          ready: true,
          coordinates: response.data.coord,
          temperature: response.data.temp,
        humidity: response.data.humidity,
          date: new Date(response.data.dt * 1000),
          description: response.data.weather[0].description,
          icon: response.data.weather[0].icon,
          wind: response.data.wind.speed,
          city: response.data.name,
        }
    ]);
      }


if (weatherData.ready) {
    return (
        <div className="container">
            <div className="Weather-app">
                <form className="mb-4">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="search-input-container">
                                <FaLocationDot className="location-icon" />
                                <input className="search-input w-100" type="search" placeholder="Enter a city..." autoFocus />
                            </div>
                        </div>
                            <div className="col-md-3 mt-3 mt-md-0">
                                <input className="submit-button w-100" type="submit" value="Search" />
                            </div>
                    </div>
                </form>
        <hr />
            <div className="row weather-info mt-4">
                <div className="col-6">
                    <h1>Charlotte</h1>
                        <ul className="p-0">
                            <li><span>{weatherData}</span>, {weatherData.description}</li>
                            <li>Precipitation: 2%</li>
                            <li>Humidity: {Math.round(weatherData.humidity)}%</li>
                            <li>Wind: {Math.round(weatherData.wind)} <FaWind /></li>
                        </ul>
                </div>
                <div className="col-6">
                    <div className="details-container">
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="clear" className="float-left"/>
                    <div className="float-left">
                        <span>{Math.round(weatherData.temperature)}<span>
                        </span>°F</span>
                    </div>
                    </div>
                </div>
            </div>
        <hr />
            <footer>
                <p>This project was coded by <a href="https://github.com/BrianaHarper2022" target="_blank" rel="noreferrer">Briana Harper</a> and is <a href="https://github.com/BrianaHarper2022?tab=repositories" target="_blank" rel="noreferrer">open-sourced on Github</a> and hosted on <a href="https://weather-app-react-final-project.netlify.app" target="_blank" rel="noreferrer">Netlify</a></p>
            </footer>
            </div>
        </div>
    );
} else {
    const apiKey = "215576bab28022db35e6e64f040e1b56";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    
    return ("Loading...");

}}
