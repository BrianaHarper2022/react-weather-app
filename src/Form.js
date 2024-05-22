import React from "react";

export default function Form() {
  return (
    <div>
      <input
        type="search"
        placeholder="Enter a city.."
        required
        id="search-form-input"
        className="search-input"
      />
      <input type="submit" value="Search" className="search-button" />
    </div>
  );
}
