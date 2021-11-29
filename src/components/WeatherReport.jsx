import React from 'react'
import './WeatherReport.css';

function WeatherReport(props) {
    return (
        <>
        <div className="weatherData">
           {
               typeof props.forCast.main === 'undefined' ?
               
                <p>This is a react weather app! Enter city to get forcast</p>
                :
                (<>
                    <div className="name">
                    <p>{props.forCast.name}, {props.forCast.sys.country}</p>
                    </div>
                    <div className="icon">
                        <p><i class={`wi ${props.weatherIcon}`}></i></p>
                    </div>
                    <div className="report">
                        <p>{Math.floor(props.forCast.main.temp - 273.15)}&deg;</p>
                        <p>{props.forCast.weather[0].description}</p>
                    </div>
                </>)
           }
        </div>
        </>
    )
}

export default WeatherReport
