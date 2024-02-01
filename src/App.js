// App.js
import React from 'react';
import './App.css';
import {WeatherContextProvider} from './contexts/WeatherContext';
import WeatherApp from './components/WeatherApp';

function App() {
  return (
    <div className="App">
      <WeatherContextProvider>
        <WeatherApp />
      </WeatherContextProvider>
    </div>
  );
}

export default App;
