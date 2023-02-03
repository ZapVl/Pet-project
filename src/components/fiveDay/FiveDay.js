import React from 'react';

export default function FiveDay(props) {
    <div className="weather-forecast">
    <div className="weather-forecast-item">
        <div className="day">Today</div>
        {/* <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" className="w-icon"> */}
        <div className="temp">{props.state.temp_max1}&#176; C</div>
        <div className="temp">{props.state.description1}</div>
    </div>
</div>
}
