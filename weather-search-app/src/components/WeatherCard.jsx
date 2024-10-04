import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureHigh,
  faTint,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

/* weatherCard component is called with an object prop and displays the desired part of the 
object accordingly when the object has values. Am using three icons from fortawesome */
const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="ma-w-sm mx-auto border bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="inline-block text-2xl font-bold mb-2">{weather.name}</h2>
        <h3 className="inline-block text-gray-700 ml-2">
          {weather.weather[0].description}
        </h3>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt="Weather icon"
          className="inline-block"
        />
        <p className="text-gray-700">
          <FontAwesomeIcon icon={faTemperatureHigh} />
          Temprature: {weather.main.temp} °C
        </p>
        <p className="text-gray-700">
          <FontAwesomeIcon icon={faTint} />
          Humidity: {weather.main.humidity} %
        </p>
        <p className="text-gray-700">
          <FontAwesomeIcon icon={faWind} />
          Wind: {weather.wind.speed} km/h
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
