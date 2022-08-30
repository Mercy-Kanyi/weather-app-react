import React from "react";
import "./Weather.css";
import "./App.css";

export default function Weather() {
  let weatherData = {
    city: "Nairobi",
    temperature: "22",
    date: "Saturday 22.00",
    description: "Windy",
    imageUrl: "https://ssl.gstatic.com/onebox/weather/64/thunderstorms.png",
    humidity: "20%",
    wind: "6",
  };
  return (
    <div className="Weather">
      <div className="weather-app">
        <form className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autocomplete="off"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-success w-100"
              />
            </div>
          </div>
        </form>
        <div className="upperside">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>{weatherData.date}</li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="weather-temperature clearfix">
              <img
                src={weatherData.imageUrl}
                alt={weatherData.description}
                class="float-left"
              />
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="https://www.shecodes.io" className="active">
                  °C
                </a>{" "}
                |<a href="https://www.shecodes.io">°F</a>
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
