import { FunctionComponent } from "react";

type TWeather = {
  temperature: string;
  description: string;
  humidity: string;
  wind_speed: string;
  city: string;
  country: string;
  error: null;
};

type Props = {
  infoWeather: TWeather;
};

const WeatherInfo: FunctionComponent<Props> = ({ infoWeather }) => {
  return (
    <>
      {infoWeather.temperature ? (
        <div className="card card-body">
          <p>
            Location: {infoWeather.city}, {infoWeather.country}
          </p>
          <p>Temperature: {infoWeather.temperature} &#8451;</p>
          <p>Description: {infoWeather.description}</p>
          <p>Humidity: {infoWeather.humidity}</p>
          <p>Wind Speed: {infoWeather.wind_speed} m/s</p>
        </div>
      ) : (
        <div className="card card-body">
          <p>Buenos Aires</p>
          <p>Latitude: -34.61315</p>
          <p>Longitude: -58.37723</p>
        </div>
      )}
    </>
  );
};

export default WeatherInfo;
