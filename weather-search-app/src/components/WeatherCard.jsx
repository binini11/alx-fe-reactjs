import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHigh, faTint, faWind } from '@fortawesome/free-solid-svg-icons';

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className=" inline-block text-2xl font-bold mb-2">{weather.name}</h2>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather icon" className="inline-block " />
        <p className="text-gray-700"><FontAwesomeIcon icon={faTemperatureHigh} /> Temperature: {weather.main.temp}°C</p>
        <p className="text-gray-700"><FontAwesomeIcon icon={faTint} /> Humidity: {weather.main.humidity}%</p>
        <p className="text-gray-700"><FontAwesomeIcon icon={faWind} /> Wind Speed: {weather.wind.speed} km/h</p>
        
      </div>
    </div>
  );    
};

export default WeatherCard;
