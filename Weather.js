import React from 'react';
import WeatherCard from './WeatherCard';

const Weather = ({ data }) => {
  return (
    <div className="weather-container">
      <h2>{data.name}</h2>
      <WeatherCard data={data} />
    </div>
  );
};

export default Weather;
