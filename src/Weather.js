import React from 'react';
import WeatherCard from './WeatherCard';

const Weather = ({ data }) => {
  const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

  return (
    <div className="weather-container">
      <h2>{data.name}</h2>
      <WeatherCard data={data} />
      <p>Sunrise: {sunrise}</p>
      <p>Sunset: {sunset}</p>
    </div>
  );
};

export default Weather;
