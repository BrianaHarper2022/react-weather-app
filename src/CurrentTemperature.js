import React from "react";

export default function CurrentTemperature(props) {
    
        return (
            <div className="current-temperature">
                <span className="temperature">{Math.round(props.celsius)}</span>
                <span className="unit">ºF</span>
            </div>
        )
}