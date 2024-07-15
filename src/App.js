import React, { useState } from 'react';
import axios from 'axios';
import Weather from './Weather';
import Forecast from './Forecast';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState('');

  const apiKey = '109d3544595a1ca5ec0a5d46c7a8d9e0';

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
      setError('');
      getForecast(response.data.coord.lat, response.data.coord.lon);
    } catch (err) {
      setError('City not found. Please try again.');
      setWeather(null);
      setForecast(null);
    }
  };

  const getForecast = async (lat, lon) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`
      );
      setForecast(response.data.daily);
    } catch (err) {
      setError('Error fetching forecast.');
    }
  };

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={getWeather}>Get Weather</button>
      {error && <p>{error}</p>}
      {weather && <Weather data={weather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
};

export default App;
