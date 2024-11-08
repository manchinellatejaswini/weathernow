import React from "react";

const WeatherDisplay = ({ weatherData, loading }) => {
  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (!weatherData) {
    return <div className="text-center">No data available</div>;
  }

  return (
    <div className="border p-4 rounded-md shadow-lg">
      <h2 className="text-lg font-bold">Current Weather</h2>
      <p>Temperature: {weatherData.temperature} °C</p>
      <p>Wind Speed: {weatherData.wind_speed} m/s</p>
      <p>Weather Code: {weatherData.weathercode}</p>
    </div>
  );
};

export default WeatherDisplay;
