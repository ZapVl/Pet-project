import React, { useState } from 'react';

import {
  LocationSearch,
  SearchPanel,
  TodayTemp,
} from './components';
import FiveDay from './components/fiveDay/FiveDay';

function App() {
  getLocation()
  const aPi_Kye = "b145a9609df60ccb0b1cc2948bdc84ec";

  const [state, setState] = useState('');

  const [location, setLocation] = useState(false)
  const [loading, setLoading] = useState(false)

  async function getLocation() {
      await fetch('https://api.db-ip.com/v2/free/self')
      .then(data => data.json())
      .then(res => {
          setLoading(false)
          setLocation(res.city)
      })

  }

  async function getWeather(event) {
    event.preventDefault();
      const city = event.target.dataset.key ? location : event.target.elements.city.value
      const ap_url = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${aPi_Kye}&units=metric`
      );
      const data = await ap_url.json();
      const list = data.list;
      if (city) {
      setState({
        temp1: Math.floor(list[0].main.temp),
        temp_max1: Math.floor(list[0].main.temp_max),
        temp_min1: Math.floor(list[0].main.temp_min),
        feels_like: Math.floor(list[0].main.feels_like),
        city: data.city.name,
        icon1: list[0].weather[0].icon,
        description1: list[0].weather[0].description,

        temp_max2: Math.floor(list[8].main.temp_max),
        temp_min2: Math.floor(list[8].main.temp_min),
        icon2: list[8].weather[0].icon,
        description2: list[8].weather[0].description,
        temp_max3: Math.floor(list[16].main.temp_max),
        temp_min3: Math.floor(list[16].main.temp_min),
        icon3: list[16].weather[0].icon,
        description3: list[16].weather[0].description,
        temp_max4: Math.floor(list[24].main.temp_max),
        temp_min4: Math.floor(list[24].main.temp_min),
        icon4: list[24].weather[0].icon,
        description4: list[24].weather[0].description,
        temp_max5: Math.floor(list[32].main.temp_max),
        temp_min5: Math.floor(list[32].main.temp_min),
        icon5: list[32].weather[0].icon,
        description5: list[32].weather[0].description,
      })
    } 
        
    } 
    
  
  return (
    <div className="container">
     <SearchPanel onSearchDate={getWeather} state={state}/>
     {loading 
        ? <h1>Loading...</h1>
        : <TodayTemp state={state}/>
     }  
    <LocationSearch getWeather={getWeather}/>
    <FiveDay state={state}/>
    </div>
  );
}

export default App;
