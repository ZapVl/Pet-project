import './FiveDay.css';

import React from 'react';

function FiveDay(props) {


    return (
        <>
            <div className="five-row">
                <div className="five-card">
                    <div className="five-date">{props.state.dt_txt1}</div>
                    <img src={`https://openweathermap.org/img/wn/${props.state.icon1}@2x.png`} alt='#'/>
                    <div className="five-temp">{props.state.temp_max1}&#176; C / {props.state.temp_min1}&#176; C</div>
                    <div className="five-description">{props.state.description1}</div>
                </div>
                <div className="five-card">
                    <div className="five-date">{props.state.dt_txt2}</div>
                    <img src={`https://openweathermap.org/img/wn/${props.state.icon2}@2x.png`} alt='#'/>
                    <div className="five-temp">{props.state.temp_max2}&#176; C / {props.state.temp_min2}&#176; C</div>
                    <div className="five-description">{props.state.description2}</div>
                </div>
                <div className="five-card">
                    <div className="five-date">{props.state.dt_txt3}</div>
                    <img src={`https://openweathermap.org/img/wn/${props.state.icon3}@2x.png`} alt='#'/>
                    <div className="five-temp">{props.state.temp_max3}&#176; C / {props.state.temp_min3}&#176; C</div>
                    <div className="five-description">{props.state.description3}</div>
                </div>
                <div className="five-card">
                    <div className="five-date">{props.state.dt_txt4}</div>
                    <img src={`https://openweathermap.org/img/wn/${props.state.icon4}@2x.png`} alt='#'/>
                    <div className="five-temp">{props.state.temp_max3}&#176; C / {props.state.temp_min4}&#176; C</div>
                    <div className="five-description">{props.state.description4}</div>
                </div>
                <div className="five-card">
                    <div className="five-date">{props.state.dt_txt5}</div>
                    <img src={`https://openweathermap.org/img/wn/${props.state.icon5}@2x.png`} alt='#'/>
                    <div className="five-temp">{props.state.temp_max5}&#176; C / {props.state.temp_min5}&#176; C</div>
                    <div className="five-description">{props.state.description5}</div>
                </div>
            </div>

        </>
    );
}

export default FiveDay;