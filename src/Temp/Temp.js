import React from 'react';

export default function Temp(props) {
    if(props.state.city === undefined){
      return (<div>
        
      </div>)
    }else{
      return (
        <div >
           <div className='row-temp'>
                <div className="temp">
                  <h2>{props.state.temp1}&#176;</h2>
                  <div className="temp-city">{props.state.city} </div>
                  </div>
                  <ul className='info-list'>
            <li className='info-item'>Feels Like: {props.state.feels_like} &#176;</li>
            <li className='info-item'>Description: {props.state.description1}</li>
        </ul>
                  <div className="temp-images"><img src={`https://openweathermap.org/img/wn/${props.state.icon1}@2x.png`} /></div>
                  <div className="future-forecast">
   
    <div className="weather-forecast">
        <div className="weather-forecast-item">
            <div className="day">Today</div>
            {/* <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" className="w-icon"> */}
            <div className="temp">{props.state.temp_max1}&#176; C</div>
            <div className="temp">{props.state.description1}</div>
        </div>
        <div className="weather-forecast-item">
            <div className="day">Tomorrow</div>
           
            {/* <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" className="w-icon"> */}
            <div className="temp">{props.state.temp_max2}&#176; C</div>
            <div className="temp">{props.state.description2}</div>
        </div>
        <div className="weather-forecast-item">
            <div className="day">The third day</div>
            {/* <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" className="w-icon"> */}
            <div className="temp">{props.state.temp_max3}&#176; C</div>
            <div className="temp">{props.state.description3}</div>
        </div>
        <div className="weather-forecast-item">
            <div className="day">Fourth day</div>
            {/* <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" className="w-icon"> */}
            <div className="temp">{props.state.temp_max4}&#176; C</div>
            <div className="temp">{props.state.description4}</div>
        </div>
        <div className="weather-forecast-item">
            <div className="day">Fifth day</div>
            {/* <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" className="w-icon"> */}
            <div className="temp">{props.state.temp_max5}&#176; C</div>
            <div className="temp">{props.state.description4}</div>
        </div>
       

    </div>
    
</div>
            </div>
        </div>
      )
    }
    
}
