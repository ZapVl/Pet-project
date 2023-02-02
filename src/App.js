import React, { useState } from 'react';

import SearchPanel from './header/SearchPanel';
import LocationSearch from './LocationSearch/LocationSearch';
import Temp from './Temp/Temp';

function App() {
  const aPi_Kye = "b145a9609df60ccb0b1cc2948bdc84ec";

  const [state, setState] = useState({
    temp: undefined,
    city: undefined,
    dt: undefined,
    error: undefined,
    time: undefined,
    icon: undefined,
    description: undefined,
    temp1: undefined,
    city1: undefined,
    dt1: undefined,
    error1: undefined,
    time1: undefined,
    icon1: undefined,
    description1: undefined,
    temp2: undefined,
    city2: undefined,
    dt2: undefined,
    error2: undefined,
    time2: undefined,
    icon2: undefined,
    description2: undefined,
    temp3: undefined,
    city3: undefined,
    dt3: undefined,
    error3: undefined,
    time3: undefined,
    icon3: undefined,
    description3: undefined,
    temp4: undefined,
    city4: undefined,
    dt4: undefined,
    error4: undefined,
    time4: undefined,
    icon4: undefined,
    description4: undefined,
  });

  async function getWeather(event) {
    event.preventDefault();
    const city = event.target.elements.city.value;
    if (city) {
      const ap_url = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${aPi_Kye}&units=metric`
      );
      const data = await ap_url.json();
      console.log(data);
      const list = data.list;
      console.log(list[8].weather[0].icon);

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

        error: undefined,
      });
    } else {
      setState({
        temp: undefined,
        city: undefined,
        icon: undefined,
        description: undefined,

        temp_max1: undefined,
        temp_max1: undefined,
        temp_max2: undefined,
        temp_max2: undefined,
        temp_max3: undefined,
        temp_max3: undefined,
        temp_max4: undefined,
        temp_max4: undefined,
        temp_max5: undefined,
        temp_max5: undefined,

        error: undefined,
      });
    }
  }
  return (
    <div className="container">
      <SearchPanel onSearchDate={getWeather} state={state} />
      <LocationSearch />
      <Temp state={state} />
    </div>
  );
}

export default App;
