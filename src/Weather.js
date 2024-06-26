import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";
import { FaLocationDot } from "react-icons/fa6";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
          ready: true,
          coordinates: response.data.coordinates,
          temperature: response.data.temperature.current,
          humidity: response.data.temperature.humidity,
          date: new Date(response.data.time * 1000),
          description: response.data.condition.description,
          icon: response.data.condition.icon,
          wind: response.data.wind.speed,
          city: response.data.city,
        });
      }

      function search() {
        const apiKey = "a94b5f688aoee508a9b7fca6t23274ef";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);
    }
    
      function handleSubmit(event) {
        event.preventDefault();
        search();
      }
    
      function handleCityChange(event) {
        setCity(event.target.value);
      }

      if (weatherData.ready) {
    return (
            <div className="Weather-app">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-9">
                            <div className="search-input-container">
                                <FaLocationDot className="location-icon" />
                                <input className="search-input w-100" type="search" placeholder="Enter a city..." autoFocus onChange={handleCityChange} />
                            </div>
                        </div>
                            <div className="col-md-3 mt-3 mt-md-0">
                                <input className="submit-button w-100" type="submit" value="Search" />
                            </div>
                    </div>
                </form>
            <hr />
                <WeatherInfo data={weatherData} />
                <WeatherForecast coordinates={weatherData.coordinates} />
            <hr />
            <footer>
                <p>This project was coded by <a href="https://github.com/BrianaHarper2022" target="_blank" rel="noreferrer">Briana Harper</a> and is <a href="https://github.com/BrianaHarper2022?tab=repositories" target="_blank" rel="noreferrer">open-sourced on Github</a> and hosted on <a href="https://weather-app-react-final-project.netlify.app" target="_blank" rel="noreferrer">Netlify</a></p>
            </footer>
            </div>
    );
} else {
    search()
    return (
        <h2 className="loading">Loading...</h2>
    );
}
}