import React from "react";
import FormattedDate from "./FormattedDate";
import { FaWind } from "react-icons/fa";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="row weather-info mt-4">
                <div className="col-6">
                    <h1>{props.data.city}</h1>
                        <ul className="p-0">
                            <li className="text-capitalize">
                                <span><FormattedDate date={props.data.date} />
                                </span>{" "}
                                {props.data.description}</li>
                            <li>Humidity: {Math.round(props.data.humidity)}%</li>
                            <li>Wind: {Math.round(props.data.wind)} <FaWind /></li>
                        </ul>
                </div>


                <div className="icon-temperature col-6">
                        <h2 className="current-temperature">
                             {Math.round(props.data.temperature)}
                        <span className="unit">ºF</span>
                     </h2>
                </div> 
            </div>
        </div>
    );
}