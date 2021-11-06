import React, { useState } from "react";
import "./App.css";
const Api = {
  key: "98ff436b7c20596466311487b2531a16",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${Api.base}weather?q=${query}&units=metric&APPID=${Api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          // console.log(result);
        });
    }
  };
  const datebuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <div className="App">
      <div className="Main">
        <img
          src="https://source.unsplash.com/1920x1080?nature"
          alt="Background"
          className="Background"
        />
        <div className="weather-container">
          <div className="Search">
            <input
              type="text"
              className="Search-bar"
              placeholder="Search here..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          {typeof weather.main != "undefined" ? (
            <div>
              <div className="weather-info">
                <div className="location">
                  {weather.name},{weather.sys.country}
                </div>
                <div className="date">{datebuilder(new Date())}</div>
              </div>
              <div className="weather-box">
                <div className="temp">
                  {Math.round(weather.main.temp)}&nbsp;&deg;C
                </div>
                <div className="additional-info">
                  <label className="feel">Feels like:</label>&nbsp;
                  {Math.round(weather.main.feels_like)}&nbsp;&deg;C&nbsp;&nbsp;
                  <label className="humidity">Humidity:</label>&nbsp;
                  {Math.round(weather.main.humidity)}&nbsp;%
                </div>
                <div className="weather">{weather.weather[0].main}</div>
                <div className="add-info">
                  <label className="wind">Wind:</label>&nbsp;
                  {Math.round(weather.wind.speed)}&nbsp;m/s&nbsp;&nbsp;
                  <label className="visibility">visibility:</label>&nbsp;
                  {Math.round(weather.visibility / 1000)}&nbsp;km
                  <br />
                  <label className="pressure">Pressure:</label>&nbsp;
                  {Math.round(weather.main.pressure)}&nbsp;mb
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="mobscreen">
        <img src={require("./Assests/Oops.gif").default} alt="oops" />
        <h4>
          Sorry <br /> This site is Currently unavailable for Mobile Devices
        </h4>
      </div>
    </div>
  );
}

export default App;
