import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureHigh,
  faThermometerHalf,
  faHandHoldingHeart,
  faTint,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

const WeatherCard = ({ weather, theme }) => {
  if (!weather) return null;

  return (
    <div
      className={`max-w-md mx-auto border rounded-xl overflow-hidden shadow-md transform transition-all hover:scale-105 duration-300 ${
        theme === "light"
          ? "bg-white border-gray-200"
          : "bg-gray-700 border-gray-600"
      }`}
    >
      <div className="p-6">
        <h2
          className={`text-3xl font-semibold mb-3 ${
            theme === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          {weather.name}
        </h2>
        <h3
          className={`text-lg mb-4 ${
            theme === "light" ? "text-gray-600" : "text-gray-300"
          }`}
        >
          {weather.weather[0].description}
        </h3>
        <div
          className={`space-y-2 ${
            theme === "light" ? "text-gray-700" : "text-gray-300"
          }`}
        >
          <p>
            <FontAwesomeIcon icon={faTemperatureHigh} /> Temperature:{" "}
            {weather.main.temp} °C
          </p>
          <p>
            <FontAwesomeIcon icon={faThermometerHalf} />{" "}
            <FontAwesomeIcon icon={faHandHoldingHeart} /> Feels Like:{" "}
            {weather.main.feels_like} °C
          </p>
          <p>
            <FontAwesomeIcon icon={faTint} /> Humidity: {weather.main.humidity}{" "}
            %
          </p>
          <p>
            <FontAwesomeIcon icon={faWind} /> Wind: {weather.wind.speed} km/h
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
