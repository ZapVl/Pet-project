import React from 'react';

const LocationSearch = () => {
    async function getLocation(event) {
        const data = await fetch('https://api.db-ip.com/v2/free/self').then(data => data.json());
            console.log(data);
          }
    // document.querySelector('.location__search').addEventListener('click', async () => {
    //     const { city } = await fetch('https://api.db-ip.com/v2/free/self').then(data => data.json());
    //     console.log(city);
    // })
    return (
        <div>
        <p>Get the weather for your location?</p>
            <button className='location__search' onClick={getLocation}>Click me</button>
            
        </div>
    );
}

export default LocationSearch;
