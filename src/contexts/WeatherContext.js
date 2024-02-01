// WeatherContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY||"";

  useEffect(() => {
    if (latitude && longitude) {
      setLoading(true);
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
        )
        .then((response) => {
          setWeatherData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
          setLoading(false);
        });
    }
  }, [latitude, longitude]);

  const fetchWeatherDataByCoordinates = async () => {
    try {
      const geoResponse = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=1&appid=${API_KEY}`
      );
      const { lat, lon } = geoResponse?.data[0];
      setLatitude(lat);
      setLongitude(lon);
    } catch (error) {
      console.error('Error fetching coordinates:', error);
    }
  };

  const updateSearchQuery = (query) => {
    console.log("searchQuery",query)
    setSearchQuery(query);
  };

  useEffect(() => {
    if (searchQuery) {
      fetchWeatherDataByCoordinates();
    }
  }, [searchQuery]);

  return (
    <WeatherContext.Provider value={{ weatherData, loading, updateSearchQuery }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherContextProvider };
