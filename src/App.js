import React, { useState } from 'react';

import {
  LocationSearch,
  TodayTemp,
} from './components';
import SearchPanel from './components/header/SearchPanel';
import Wrapper from './components/Wrapper';
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
function App() {
  getLocation();
  const aPi_Kye = "b145a9609df60ccb0b1cc2948bdc84ec";

  const [state, setState] = useState([]);
  const [location, setLocation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function getLocation() {
    await fetch("https://api.db-ip.com/v2/free/self")
      .then((data) => data.json())
      .then((res) => {
        setLocation(res.city);
      });

  }
  async function getWeather(event) {
  setLoading(true)
    event.preventDefault();
    console.log(event)
    try {
        const city = event.target.dataset.key
            ? location
            : event.target[0].value; // get the value from the entered text

        const ap_url = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${aPi_Kye}&units=metric`
        );
        const data = await ap_url.json();
        const list = data.list;
        if (city) {
            setState({
                temp1: Math.floor(list[0].main.temp),

                city: data.city.name,

                temp_max1: Math.floor(list[0].main.temp_max),
                temp_max2: Math.floor(list[1].main.temp_max),
                temp_max3: Math.floor(list[2].main.temp_max),
                temp_max4: Math.floor(list[3].main.temp_max),
                temp_max5: Math.floor(list[4].main.temp_max),

                temp_min1: Math.floor(list[0].main.temp_min),
                temp_min2: Math.floor(list[1].main.temp_min),
                temp_min3: Math.floor(list[2].main.temp_min),
                temp_min4: Math.floor(list[3].main.temp_min),
                temp_min5: Math.floor(list[4].main.temp_min),

                feels_like: Math.floor(list[0].main.feels_like),

                icon1: list[0].weather[0].icon,
                icon2: list[1].weather[0].icon,
                icon3: list[2].weather[0].icon,
                icon4: list[3].weather[0].icon,
                icon5: list[4].weather[0].icon,

                description1: list[0].weather[0].description,
                description2: list[1].weather[0].description,
                description3: list[2].weather[0].description,
                description4: list[3].weather[0].description,
                description5: list[4].weather[0].description,

                dt_txt1: list[0].dt_txt,
                dt_txt2: list[1].dt_txt,
                dt_txt3: list[2].dt_txt,
                dt_txt4: list[3].dt_txt,
                dt_txt5: list[4].dt_txt,
            });
            setLoading(false)
        }
    } catch (e) {
        setErrorMessage("Unable to fetch user list");
        setLoading(false);
    }
  }




  return (
    <>
    <Wrapper state={state} />
    <div className="container">
      <SearchPanel onSearchDate={getWeather} state={state}  loading={loading}/>
      {loading ? <LoadingSpinner /> : <TodayTemp state={state} />}
        {errorMessage && <div className="error" style={{color: "red"}}>{errorMessage}</div>}
      <LocationSearch
          getWeather={getWeather}
          dataset={'city'}
          loading={loading}
      />

    </div>
    </>
  );
}

export default App;
