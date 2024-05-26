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
                <div className="col-6">
                    <div className="details-container">
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="clear" className="float-left"/>
                    <div className="float-left">
                        <span>{Math.round(props.data.temperature)}</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}