import React from "react";

export default function WeatherForecast() {
    return (
        <div className="WeatherForcast text-center">
            <div className="row">
                <div className="col">
                    <ul>
                        <li className="box">
                            <span>Thurs</span>
                            <span> 23°F</span>
                        </li>
                        <li className="box">
                            <span>Fri</span>
                            <span> 23°F</span>
                        </li>
                        <li className="box">
                            <span>Sat</span>
                            <span> 23°F</span>
                        </li>
                        <li className="box">
                            <span>Sun</span>
                            <span> 23°F</span>
                        </li>
                        <li className="box">
                            <span>Mon</span>
                            <span> 23°F</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}