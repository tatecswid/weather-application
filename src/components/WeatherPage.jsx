import { WeatherFetcher } from "./WeatherFetcher";
import { WeatherCard } from "./WeatherCard";
import { useState } from 'react';
import { ErrorPage } from "./ErrorPage";
import { useError } from "../utils/useError";
import { LoadingPage } from "./LoadingPage";

export const WeatherPage = () => {
    // State hooks:
    const [weatherData, setWeatherData] = useState([]);
    const [locationName, setLocationName] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { hasError, errorMessage, resetError, errorDetected } = useError();

    // Helper method for converting kelvin to fahrenheit:
    const toFahrenheit = (kelvinTemp) => {
        const fahrenheitTemp = (kelvinTemp - 273.15) * 9 / 5 + 32
        return fahrenheitTemp.toFixed(1);
    }

    // Helper method for finding out what day of the week a date is:
    const toDayOfWeek = (date) => {
        const dateObject = new Date(date);
        const day = dateObject.getDay();
        const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return daysOfTheWeek[day];
    }

    if(isLoading) {
        return <div className="weather-page"><LoadingPage /></div>;
    }

    // Full weather page:
    return (
        <div className="weather-page">
            <WeatherFetcher onWeatherFetched = { setWeatherData } onCityFetched = {setLocationName} resetErrorState={resetError} onError={errorDetected} setLoading={setIsLoading}/>
            {hasError
                ? <ErrorPage message={errorMessage} />
                :
                <div>
                    <div className="weather-card-holder">
                    { weatherData.length > 0 && weatherData.map(dayData => {
                        return <WeatherCard
                                temp = { toFahrenheit(dayData.main.temp) } 
                                description = { dayData.weather[0].description } 
                                iconURL = { `https://openweathermap.org/img/wn/${dayData.weather[0].icon}@2x.png`} 
                                dayOfWeek = { toDayOfWeek(dayData.dt_txt) } />
                        })
                    }
                    </div>
                    <div className="overall-information-container">
                        { locationName.length > 0 && <h1> { locationName[0] }, { locationName[1] } </h1> }
                    </div>
                </div>
            }
        </div>
    );
};