// WeatherCard.js
import React from 'react';

const WeatherCard = ({ weatherData }) => {
  const { main, weather, name } = weatherData;
  const temperature = main.temp;
  const weatherDescription = weather[0].description;

  return (
    <div>
      <h2>Weather in {name}</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Description: {weatherDescription}</p>
    </div>
  );
};

export default WeatherCard;
