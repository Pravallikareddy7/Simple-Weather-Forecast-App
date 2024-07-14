import React from 'react';
import { WiDaySunny, WiRain, WiCloud, WiSnow, WiThunderstorm } from 'react-icons/wi';

const WeatherCard = ({ data }) => {
  const { main, weather, wind } = data;
  
  const getWeatherIcon = (description) => {
    description = description.toLowerCase();
    if (description.includes('clear')) {
      return <WiDaySunny size={50} color="yellow" />;
    } else if (description.includes('rain')) {
      return <WiRain size={50} color="blue" />;
    } else if (description.includes('cloud')) {
      return <WiCloud size={50} color="grey" />;
    } else if (description.includes('snow')) {
      return <WiSnow size={50} color="lightblue" />;
    } else if (description.includes('thunderstorm')) {
      return <WiThunderstorm size={50} color="darkgrey" />;
    } else {
      return <WiDaySunny size={50} color="yellow" />; // Default to sunny
    }
  };

  return (
    <div className="weather-card">
      <p>Temperature: {main.temp} °C</p>
      <p>Humidity: {main.humidity} %</p>
      <p>Conditions: {weather[0].description}</p>
      {getWeatherIcon(weather[0].description)}
      <p>Wind Speed: {wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
