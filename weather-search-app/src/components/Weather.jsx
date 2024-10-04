import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import WeatherCard from "./WeatherCard";

const API_KEY = "ca0dd5136868c9a0f4f44693345f2b70";

/* my Weather arrow function has is working with three states, three functions and one hook
 to accomplish the desired outcome.*/
const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [city, setCity] = useState("");

  /*the fetchWeather asynchronious arrow function uses axios library to 
  fetch data on on the city name enetered from openweathermap's api */
  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
      console.log(response);
      setError("");
    } catch (error) {
      setError(
        `\'${city}\' City not found or request failed. Make sure to type the city name correctlyand use text only.`
      );
      setWeather(null);
    }
  };

  //handlesearch function sets the city state and call on the fetchWeather on the city entered.
  const handleSearch = (city) => {
    setCity(city);
    fetchWeather(city);
  };

  //Reset function as it name implies resets all states to initial value.
  const handleReset = (city) => {
    setCity("");
    setWeather(null);
    setError("");
  };

  /* this hoook runs on on the dependency city state
  and runs on every five minutes interval.
  and everytime the its cleaned witht the clearInterval built in function*/
  useEffect(() => {
    if (city) {
      fetchWeather(city);
      const interval = setInterval(() => fetchWeather(city), 300000);
      return () => clearInterval(interval);
    }
  }, [city]);

  return (
    <div className="container border mx-auto p-4">
      <div className="max-w-sm mx-auto">
        <Search onSearch={handleSearch} onReset={handleReset} />
        {error && <p className="text-red-700 font-bold">{error}</p>}
        <WeatherCard weather={weather} />
      </div>
    </div>
  );
};

export default Weather;
