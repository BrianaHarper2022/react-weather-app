import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import CurrentTemperature from "./CurrentTemperature";
import { FaWind } from "react-icons/fa";

export default function WeatherInfo(props) {
    
    return (
        <div className="WeatherInfo">
            <div className="row weather-info mt-4">
                <div className="col-6">
                    <h1>{props.data.city}</h1>
                        <ul className="p-0">
                            <li><FormattedDate date={props.data.date} /></li>
                            <li>Humidity: <strong>{Math.round(props.data.humidity)}%</strong></li>
                            <li>Wind: <strong>{Math.round(props.data.wind)} <FaWind /></strong></li>
                            <li className="text-capitalize">{props.data.description}</li>
                        </ul>
                </div>
                <div className="icon-temperature col-6">
                    <WeatherIcon code={props.data.icon} size={52} />
                    <CurrentTemperature celsius={props.data.temperature} />
                </div> 
            </div>
        </div>
    );
}