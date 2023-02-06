import loc from '../../assets/placeholder.png';
import React, {useState} from "react";

export const LocationSearch = ({getWeather}) => {

    return (
        <div>
        <button className='location-img help'
      data-key='location'
      onClick={(event) => getWeather(event) }
    >
      <img src={loc} alt="#" />
    </button>
            <span className="airhelp">Weather in your city</span>
        </div>
    );
}
