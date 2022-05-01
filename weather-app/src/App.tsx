import WeatherInfo from "./components/WeatherInfo";
import WeatherForm from "./components/WeatherForm";
import "./bootstrap.min.css";
import { WEATHER_APPID } from "./keys";
import { useState } from "react";

function App() {
  let state = {
    temperature: "",
    description: "",
    humidity: "",
    wind_speed: "",
    city: "",
    country: "",
    error: null,
  };

  const [infoWeather, setInfoWeather] = useState(state);

  const getWeather = async (latitude: string, longitude: string) => {
    console.log("latitude", latitude);
    console.log("longitude", longitude);

    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_APPID}&units=metric`;

    const response = await fetch(API_URL);

    const data = await response.json();
    //console.log("data", data);

    setInfoWeather({
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity, //humedad
      wind_speed: data.wind.speed, //velocidad del viento
      city: data.name,
      country: data.sys.country,
      error: null,
    });
  };

  return (
    <div className="App">
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <WeatherForm getWeather={getWeather} />
            <WeatherInfo infoWeather={infoWeather} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
