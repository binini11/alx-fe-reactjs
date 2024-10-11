import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureHigh,
  faThermometerHalf,
  faHandHoldingHeart,
  faTint,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="max-w-sm mx-auto border bg-white shadow-lg rounded-lg overflow-hidden md:max-w-md lg:max-w-lg">
      <div className="p-4 md:p-6 lg:p-8">
        <h2 className="inline-block text-2xl font-bold mb-2 sm:text-3xl md:text-4xl">
          {weather.name}
        </h2>
        <h3 className="inline-block text-gray-700 ml-2 sm:text-lg md:text-xl lg:text-2xl">
          {weather.weather[0].description}
        </h3>

        <p className="text-gray-700 mt-2 md:mt-4 lg:mt-6">
          <FontAwesomeIcon icon={faTemperatureHigh} /> Temperature:{" "}
          {weather.main.temp} °C
        </p>
        <p className="text-gray-700 mt-2 md:mt-4 lg:mt-6">
          <FontAwesomeIcon icon={faThermometerHalf} />{" "}
          <FontAwesomeIcon icon={faHandHoldingHeart} /> Feels Like:{" "}
          {weather.main.feels_like} °C
        </p>
        <p className="text-gray-700 mt-2 md:mt-4 lg:mt-6">
          <FontAwesomeIcon icon={faTint} /> Humidity: {weather.main.humidity} %
        </p>
        <p className="text-gray-700 mt-2 md:mt-4 lg:mt-6">
          <FontAwesomeIcon icon={faWind} /> Wind: {weather.wind.speed} km/h
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
