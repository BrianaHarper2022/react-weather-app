import React from "react";
import Weather from "./Weather";
import "./Weather.css";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <div className="App weather-app">
      <Weather defaultCity="Charlotte" />
    </div>
  );
}
