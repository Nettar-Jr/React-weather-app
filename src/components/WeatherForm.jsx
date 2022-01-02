import React, {useState} from 'react';
import './WeatherForm.css';
import WeatherReport from './WeatherReport.jsx';

function WeatherForm(props) {

    const apiKey = 'afd9d8acbb7159afc1577bf497cbb1a3';

    const [forCast, setforCast] = useState([])
    const [city, setcity] = useState('')
    const [weatherIcon, setweatherIcon] = useState('')
    const [error, seterror] = useState(false)

    const handleChange = e => setcity(e.target.value);

    const getForcast = async ()=> {

        try {
            if ( city ){
                const getForcastData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
                const response = await getForcastData.json()
                setforCast(response);
                console.log(response)
                seterror(false);
                setcity('')
    
                if (response.weather === undefined){
                    seterror(true)
                }
                else{
                    getWeatherIcons(response.weather[0].id)
                    seterror(false)
                }
                console.log(response.weather[0].id)
            }
            else{
                seterror(true)
            }
        } catch (err) {
            seterror(true)
        }


    }

    const getWeatherIcons = rangeId => {

        switch(true){
            case rangeId >= 200 && rangeId <= 232:
                setweatherIcon('wi-thunderstorm');
                break;
            case rangeId >= 300 && rangeId <= 321:
                setweatherIcon('wi-sleet')
                break;
            case rangeId >= 500 && rangeId <= 531:
                setweatherIcon('wi-storm-showers');
                break;
            case rangeId >= 600 && rangeId <= 622:
                setweatherIcon('wi-snow');
                break;
            case rangeId >= 701 && rangeId <= 781:
                setweatherIcon('wi-fog');
                break;
            case rangeId === 800:
                setweatherIcon('wi-day-sunny');
                break;
            case rangeId >= 801 && rangeId <= 804:
                setweatherIcon('wi-day-fog');
                break;
                default:
                    setweatherIcon('wi-thunderstorm');
        }
    }
   
    return (
        <>
        <div className="formContainer">
        <h1 className='header'>Check Today's Forcast</h1>
            <div className='error'>{error ? errorMessage() : null }</div><br />
            <input className="inputCity"
                
                onChange={handleChange}
                placeholder="Enter city..."
            />

            <button onClick={getForcast}>Search</button>
        </div>
        <WeatherReport 
            forCast={forCast}
            weatherIcon={weatherIcon}
        />
        </>
    )

    function errorMessage (){
        return (
            <div>
                Please Enter City.
            </div>
        )
    }
}

export default WeatherForm
