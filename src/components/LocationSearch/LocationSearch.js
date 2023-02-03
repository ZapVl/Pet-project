import React from 'react';

export const LocationSearch = (props) => {
    return (
        <div>
        <button
      data-key='location'
      onClick={(event) => props.getWeather(event)}
    >
      Click
    </button>
        </div>
    );
}
