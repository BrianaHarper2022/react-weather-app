import React from "react";

export default function Weather() {
    return(
        <div className="Weather-app">
            <form>
                <div className="row"> 
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city..." />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <input type="submit" value="search" className=" btn btn-primary"/>
                     </div>
                </div>
            </form>
        <hr />
            <h1>Charlotte</h1>
            <ul>
                <li>Wednesday 05:19am</li>
                <li>Clear</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="clear" />
                    62°F
                </div>
            </div>
            <div classname="col-6">
                <ul>
                    <li>Precipitation: 2%</li>
                    <li>Humidity: 78%</li>
                    <li>Wind: 3mph</li>
                </ul>
            </div>
            <p>This project was coded by <a href="https://github.com/BrianaHarper2022" target="_blank" rel="noreferrer">Briana Harper</a> and is <a href="https://github.com/BrianaHarper2022?tab=repositories" target="_blank" rel="noreferrer">open-sourced on Github</a> and hosted on <a href="https://weather-app-react-final-project.netlify.app" target="_blank" rel="noreferrer">Netlify</a></p>
        </div>
    );
}