import '../App.css'

import { WeatherSearcher } from "./WeatherSearcher";
import { WeatherCard } from "./WeatherCard";
import { UserBar } from './UserBar'
import { useState } from 'react';
import { ErrorPage } from "./intermediate pages/ErrorPage";
import { useError } from "../contexts/ErrorContext";
import { LoadingPage } from "./intermediate pages/LoadingPage";
import { CurrentWeatherInfoCard } from "./CurrentWeatherInfoCard";

export const Dashboard = () => {
    // State hooks:
    const [weatherData, setWeatherData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const { hasError, errorMessage, resetError, errorDetected } = useError();

    if(isLoading) {
        return <div className="weather-page"><LoadingPage /></div>;
    }

    // Full weather page:
    return (
        
        <div className="weather-page">
            <UserBar />
            <WeatherSearcher onWeatherFetched = { setWeatherData } resetErrorState={resetError} onError={errorDetected} setLoading={setIsLoading}/>
            
            {hasError
                ? <ErrorPage message={errorMessage} />
                :
                <div>
                    <div className="overall-information-container">
                    { Object.keys(weatherData).length !== 0 &&
                    <CurrentWeatherInfoCard
                        city={weatherData.city}
                        state={weatherData.state}
                        currentTemp={weatherData.currentWeather.temp}
                        description={weatherData.currentWeather.description}
                        feelsLike={weatherData.currentWeather.feels_like}
                        humidity={weatherData.currentWeather.humidity}
                        windSpeed={weatherData.currentWeather.wind_speed}
                        visibility={weatherData.currentWeather.visibility}
                        />
                    }
                    </div>
                    <div>
                        <div className="weather-card-holder">
                        { Object.keys(weatherData).length !== 0 && weatherData.forecast.map(dayData => {
                            
                            return <WeatherCard
                                    temp = { dayData.main.temp } 
                                    description = { dayData.weather[0].description } 
                                    iconURL = { `https://openweathermap.org/img/wn/${dayData.weather[0].icon}@2x.png`} 
                                    dayOfWeek = { dayData.day_name } />
                            })
                        }
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};