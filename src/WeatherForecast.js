import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

   function handleResponse(response) {
    setForecast(response.data.daily)
    setLoaded(true);
    }
 
    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col Daily-Forecast">
                    <WeatherForecastDay data={forecast[0]} />
                    </div>
                </div>
            </div>
        );

    } else { 
        let apiKey = "a94b5f688aoee508a9b7fca6t23274ef";
        let longitude = props.coordinates.longitude;
        let latitude = props.coordinates.latitude;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=imperial`;

        axios.get(apiUrl).then(handleResponse);

        return null;
    }
}