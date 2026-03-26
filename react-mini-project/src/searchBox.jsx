import TextField from "@mui/material/TextField";
import "./searchBox.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Alert from '@mui/material/Alert';

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_KEY = "ac278b46051f616cc55eab320293361c";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`,
      );
      let jsonResponse = await response.json();
      let result = {
        city: city.toUpperCase(),
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city);
      getWeatherInfo();
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="searchBox">
          <TextField
            className="search-bar"
            id="city"
            label="City name"
            variant="outlined"
            sx={{
              backdropFilter: "blur(8px)",
              background: "rgba(255,255,255,0.2)",
              input: { color: "black" },
              label: { color: "black" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "rgba(0, 0, 0, 0.6)",
                },
                "&:hover fieldset": {
                  borderColor: "black",
                },
                borderRadius: "25px",
              },
            }}
            value={city}
            onChange={handleChange}
            required
          />
          <Button
            variant="contained"
            type="submit"
            className="search-btn"
            sx={{
              width: "55px",
              height: "55px",
              marginLeft: "12px",

              backdropFilter: "blur(10px)",
              background: "rgba(255,255,255,0.2)",
              color: "black",
              borderRadius: "50%",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              "&:hover": {
                background: "rgba(255,255,255,0.3)",
              },
            }}
          >
            <SearchIcon />
          </Button>
            

          {error && <p style={{ color: "red" , fontSize: "2rem" }}> <b>No record found!</b></p>}
        </div>
      </form>
    </>
  );
}
