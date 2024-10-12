import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import WeatherCard from "./WeatherCard";
import WeeklyForecast from "./WeeklyForecast";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [weeklyForecast, setWeeklyForecast] = useState(null);
  const [error, setError] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const saveToLocalStorage = (city) => {
    let searches = JSON.parse(localStorage.getItem("recentSearches")) || [];
    if (!searches.includes(city)) {
      searches.push(city);
    }
    localStorage.setItem("recentSearches", JSON.stringify(searches));
  };

  const fetchWeather = async (city) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
      );
      setWeather(response.data);
      setError("");
      saveToLocalStorage(city);
      const { coord } = response.data;
      fetchWeeklyForecast(coord.lat, coord.lon);
    } catch (error) {
      setError(
        `\'${city}\' City not found or request failed. Make sure to type the city name correctly and use text only.`
      );
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchWeeklyForecast = async (lat, lon) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
      );
      setWeeklyForecast(response.data);
    } catch (error) {
      console.error("Error fetching weekly forecast:", error);
    }
  };

  const handleSearch = (city) => {
    setCity(city);
    fetchWeather(city);
  };

  const handleReset = () => {
    setCity("");
    setWeather(null);
    setWeeklyForecast(null);
    setError("");
  };

  useEffect(() => {
    if (city) {
      fetchWeather(city);
      const interval = setInterval(() => fetchWeather(city), 180000);
      return () => clearInterval(interval);
    }
  }, [city]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetchWeatherByCoords(latitude, longitude);
    });
  }, []);

  const fetchWeatherByCoords = async (lat, lon) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
      );
      setWeather(response.data);
      setError("");
      fetchWeeklyForecast(lat, lon);
    } catch (error) {
      setError("Could not fetch weather data for your location.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`max-w-4xl border mx-auto p-6 ${
        theme === "light" ? "bg-white" : "bg-gray-800"
      } text-gray-900 ${
        theme === "light" ? "text-black" : "text-white"
      } rounded-xl`}
    >
      <button
        onClick={toggleTheme}
        className="mb-4 py-2 px-4 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600 transition duration-300"
      >
        Toggle Theme
      </button>
      <div className="max-w-lg mx-auto">
        <Search onSearch={handleSearch} onReset={handleReset} theme={theme} />
        {error && <p className="text-red-700 font-bold">{error}</p>}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <WeatherCard weather={weather} theme={theme} />
        )}
        {weeklyForecast && (
          <WeeklyForecast forecast={weeklyForecast} theme={theme} />
        )}
      </div>
    </div>
  );
};

export default Weather;
