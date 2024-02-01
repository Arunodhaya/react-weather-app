// WeatherApp.js
import React, { useContext } from 'react';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import { WeatherContext } from '../contexts/WeatherContext';

const WeatherApp = () => {
  const { weatherData, loading, updateSearchQuery } = useContext(WeatherContext);

  return (
    <div>
      <h1>Weather App</h1>
      <SearchBar updateSearchQuery={updateSearchQuery} />
      {loading && <p>Loading...</p>}
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};

export default WeatherApp;
