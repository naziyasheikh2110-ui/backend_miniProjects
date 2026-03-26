import SearchBox from "./searchBox";
import InfoBox from "./infoBox";
import { useState } from "react";
import logo from "./assets/weatherApp.jpg";
import "./WeatherApp.css";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 30.37,
    humidity: 25,
    temp: 32.05,
    tempMax: 32.05,
    tempMin: 32.05,
    weather: "few clouds",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="WeatherApp">
      <div className="header">
        <img src={logo} alt="LOGO" />
        <h1>Weather App </h1>
      </div>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />

      <b>Made with 	&hearts;</b>
    </div>

  
  );
}
