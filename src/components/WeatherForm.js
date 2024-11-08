import React, { useState } from "react";

const WeatherForm = ({ setWeatherData, setLoading }) => {
  const [city, setCity] = useState("");

  // Function to fetch weather data using fetch API
  const fetchWeather = async (city) => {
    setLoading(true);
    try {
      // Fetch coordinates based on city name
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );
      const geoData = await geoResponse.json();

      if (geoData.results && geoData.results.length > 0) {
        const { latitude, longitude } = geoData.results[0];

        // Fetch weather data using the obtained coordinates
        const weatherResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );
        const weatherData = await weatherResponse.json();

        setWeatherData(weatherData.current_weather);
      } else {
        console.error("City not found");
        setWeatherData(null);
      }
    } catch (error) {
      console.error("Error fetching weather data", error);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border p-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 ml-2">
        Get Weather
      </button>
    </form>
  );
};

export default WeatherForm;
