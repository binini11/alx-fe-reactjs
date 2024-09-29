import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import WeatherCard from "./WeatherCard";

const API_KEY = "ca0dd5136868c9a0f4f44693345f2b70";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [city, setCity] = useState("");

  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
      console.log(response.data);
      setError("");
    } catch (error) {
      setError("City not found or network error");
      setWeather(null);
    }
  };

  const handleSearch = (city) => {
    setCity(city);
    fetchWeather(city);
  };

  const handleReset = () => {
    setCity("");
    setWeather(null);
    setError("");
  };

  useEffect(() => {
    if (city) {
      fetchWeather(city);
      const interval = setInterval(() => fetchWeather(city), 300000); // Update every 5 minutes
      return () => clearInterval(interval);
    }
  }, [city]);

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-sm mx-auto">
        <Search onSearch={handleSearch} onReset={handleReset} />
        {error && <p className="text-red-500">{error}</p>}
        <WeatherCard weather={weather} />
      </div>
    </div>
  );
};

export default Weather;
