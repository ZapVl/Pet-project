import loc from '../../assets/placeholder.png';
import React, {useState} from "react";

export const LocationSearch = ({getWeather, dataset,loading}) => {

    return (
        <div>
        <button className='location-img help'

      name='btn'
                disabled={loading}
      onClick={(event) => getWeather(event)
        }
    >
      <img src={loc} alt="#" data-key={dataset}  onTouchEnd={(event) => getWeather(event)
      }/>
    </button>
            <span className="airhelp">Weather in your city</span>
        </div>
    );
}
