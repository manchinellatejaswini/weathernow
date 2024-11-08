import React, { useState } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherDisplay from "./components/WeatherDisplay";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Weather Now</h1>
      <WeatherForm setWeatherData={setWeatherData} setLoading={setLoading} />
      <WeatherDisplay weatherData={weatherData} loading={loading} />
    </div>
  );
};

export default App;
