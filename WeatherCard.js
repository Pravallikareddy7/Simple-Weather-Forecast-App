import React from 'react';

const WeatherCard = ({ data }) => {
  const { main, weather, wind } = data;
  return (
    <div className="weather-card">
      <p>Temperature: {main.temp} °C</p>
      <p>Humidity: {main.humidity} %</p>
      <p>Conditions: {weather[0].description}</p>
      <p>Wind Speed: {wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
