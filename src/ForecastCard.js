import React from 'react';
import { WiDaySunny, WiRain, WiCloud, WiSnow, WiThunderstorm } from 'react-icons/wi';

const getWeatherIcon = (description) => {
  switch (description) {
    case 'clear sky':
      return <WiDaySunny size={40} color="yellow" />;
    case 'rain':
    case 'shower rain':
    case 'light rain':
      return <WiRain size={40} color="blue" />;
    case 'few clouds':
    case 'scattered clouds':
    case 'broken clouds':
      return <WiCloud size={40} color="grey" />;
    case 'snow':
      return <WiSnow size={40} color="lightblue" />;
    case 'thunderstorm':
      return <WiThunderstorm size={40} color="darkgrey" />;
    default:
      return <WiDaySunny size={40} color="yellow" />;
  }
};

const ForecastCard = ({ day }) => {
  const date = new Date(day.dt * 1000).toLocaleDateString();
  return (
    <div className="forecast-card">
      <p>{date}</p>
      {getWeatherIcon(day.weather[0].description)}
      <p>Temp: {day.temp.day} °C</p>
      <p>Humidity: {day.humidity} %</p>
    </div>
  );
};

export default ForecastCard;
