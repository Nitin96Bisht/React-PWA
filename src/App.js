import React, { useState } from 'react';
import './App.css';

import { fetchWeather } from './API/fetchWeather';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query);
      console.log(data);
      setWeather(data);
      setQuery('');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyPress={search} />

        {weather.main && (
          <div>
            <h2>
              <span>{weather.name}</span>
              <sub>{weather.sys.country}</sub>
            </h2>
            <div>
              {Math.round(weather.main.temp)}
              <sub>&deg;C</sub>
            </div>
            <div>
              <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
              <p>{weather.weather[0].description}</p>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
