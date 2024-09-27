import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHigh, faTint, faWind } from '@fortawesome/free-solid-svg-icons';

/**
 * WeatherCard Component
 * @param {object} weather - The weather data object.
 * Displays weather information for a specified city.
 */
const WeatherCard = ({ weather }) => {
  // If no weather data is provided, return null
  if (!weather) return null;

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        {/* City name */}
        <h2 className="inline-block text-2xl font-bold mb-2">{weather.name}</h2>
        {/* Weather description */}
        <h3 className="inline-block text-gray-700 ml-2">{weather.weather[0].description}</h3>
        {/* Weather icon */}
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather icon" className="inline-block" />
        {/* Temperature */}
        <p className="text-gray-700"><FontAwesomeIcon icon={faTemperatureHigh} /> Temperature: {weather.main.temp}°C</p>
        {/* Humidity */}
        <p className="text-gray-700"><FontAwesomeIcon icon={faTint} /> Humidity: {weather.main.humidity}%</p>
        {/* Wind speed */}
        <p className="text-gray-700"><FontAwesomeIcon icon={faWind} /> Wind Speed: {weather.wind.speed} km/h</p>
      </div>
    </div>
  );
};

export default WeatherCard;
