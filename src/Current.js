import React from "react";

export default function Current() {
  return (
    <div className="current-weather">
      <div>
        <h1 className="current-city" id="city">
          Charlotte
        </h1>
        <p className="current-details">
          <span id="time"></span>Thursday 21:04,{" "}
          <span id="description">moderate rain</span>
          <br />
          Humidity: 57%<strong id="humidity"></strong>, Wind: 1.01mph
          <strong id="wind-speed"></strong>
        </p>
      </div>
      <div className="current-temperature-container">
        <div id="icon"></div>
        <span className="current-temperature-value" id="temperature"></span>
        <span className="current-temperature-degree"> 77 °F</span>
      </div>
    </div>
  );
}
