import React from 'react';
import ForecastCard from './ForecastCard';

const Forecast = ({ data }) => {
  return (
    <div className="forecast-container">
      <h2>7-Day Forecast</h2>
      <div className="forecast-cards">
        {data.map((day, index) => (
          <ForecastCard key={index} day={day} />
        ))}
      </div>
    </div>
  );
};

export default Forecast;
