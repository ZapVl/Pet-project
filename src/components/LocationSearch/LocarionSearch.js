import loc from '../../assets/placeholder.png';
import React, {useState} from "react";

export const LocationSearch = ({getWeather, dataset}) => {

    return (
        <div>
        <button className='location-img help'

      name='btn'
      onClick={(event) => getWeather(event)
        }
    >
      <img src={loc} alt="#" data-key={dataset} />
    </button>
            <span className="airhelp">Weather in your city</span>
        </div>
    );
}
