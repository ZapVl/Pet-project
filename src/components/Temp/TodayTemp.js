import React from 'react';

export const TodayTemp = (props) => {
    if (props.state.city === undefined){
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
   
    
    
</div>
            </div>
        </div>
      )
    }
    
}
