import React from "react";
import axios from "axios";
import "./Weather.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";

export default function Weather() {
    return(
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
                            <li><span>Wednesday 05:19am</span>, Clear</li>
                            <li>Precipitation: 2%</li>
                            <li>Humidity: 78%</li>
                            <li>Wind: 3mph <FaWind /></li>
                        </ul>
                </div>
                <div className="col-6">
                    <div className="details-container">
                        <span><img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="clear" />
                        62°F</span>
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
}