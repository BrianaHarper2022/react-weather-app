import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
   function handleResponse(response) {
    }
   

    let apiKey = "a94b5f688aoee508a9b7fca6t23274ef"
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=imperial`

    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col Daily-Forecast">
                    <div>
                        <div className="WeatherForecast-day">Thu</div>
                            <WeatherIcon code="clear-sky-day" size={36} />
                        <div className="WeatherForecast-temperatures">
                            <span className="WeatherForecast-temperature-max">19°</span>
                            <span className="WeatherForecast-temperature-min">10°</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}