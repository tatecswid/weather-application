import { auth, provider } from "../config/firebase-config";
import { signOut } from "firebase/auth";
import { WeatherFetcher } from "./WeatherFetcher";
import { WeatherCard } from "./WeatherCard";
import { useState } from 'react';

export const WeatherPage = () => {
    const [weatherData, setWeatherData] = useState([]);

    const signUserOut = () => {
        signOut(auth, provider);
    };

    const handleWeatherData = (data) => {
        setWeatherData(data)
    };

    const toFahrenheit = (kelvinTemp) => {
        const fahrenheitTemp = (kelvinTemp - 273.15) * 9 / 5 + 32
        return fahrenheitTemp.toFixed(1);
    }

    return (
        <div>
            <p>Welcome {auth.currentUser?.displayName}</p>
            <button onClick={signUserOut}>Sign out</button>
            <WeatherFetcher onWeatherFetched = { handleWeatherData } />
            <div className="weather-card-holder">
                { weatherData.length > 0 && weatherData.map(day => {
                    return <WeatherCard
                            temp = { toFahrenheit(day.main.temp) } 
                            description = { day.weather[0].description } 
                            iconURL = { `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} />
                    })
                }
            </div>
        </div>
    );
};