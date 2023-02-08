import React from 'react';
import overcast_clouds from '../assets/overcast_clouds.jpg'
import clear_sky from '../assets/clear sky.jpg'
import light_snow from '../assets/light snow01.jpg'
import sun from '../assets/sun.jpg'
import broken_clouds from '../assets/broken clouds.jpg'
import few_clouds from '../assets/few clouds.jpg'
import light_rain from '../assets/light rain.jpg'
import scattered from '../assets/scattered clouds.jpg'
import family from '../assets/family-rain.jpg'


export default function Wrapper({state}) {

    let background;
        if(state.description1 == 'light snow'){
            background = light_snow

        }else if (state.description1 == 'clear sky') {
            background = clear_sky
        }
        else if (state.description1 == 'overcast clouds') {
            background = overcast_clouds
        }
        else if (state.description1 == 'sun') {
            background = sun
        }
        else if (state.description1 == 'broken clouds') {
            background = broken_clouds
        }
        else if (state.description1 == 'light rain') {
            background = family
        }
        else if (state.description1 == 'clear sky') {
            background = clear_sky
        }
        else if (state.description1 == 'few clouds') {
            background = few_clouds
        }
        else if(state.description1 == 'scattered clouds'){
            background = scattered
        }else if (null) {
            background = light_rain
        }else{
            background = broken_clouds
        }



    console.log(state.description1)
    
    
  return (
    <>
    <div className='wrapper'>
    <img src={background} alt="#" />
    </div>
    </>
  )
}
