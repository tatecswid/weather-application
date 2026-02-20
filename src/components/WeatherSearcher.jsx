import "../App.css"

import { useState } from "react";

export const WeatherSearcher = (props) => {
    const [cityName, setCityName] = useState("");

    const fetchWeatherData = async () => {
        props.resetErrorState();

        try {
            props.setLoading(true);
            const res = await fetch(`/.netlify/functions/weather?city=${cityName}`);
            

            if(!res.ok) {
                throw new Error("Failed to fetch weather data");
            }

            const weatherData = await res.json();

            console.log(weatherData)

            props.onWeatherFetched(weatherData);
        } 
        catch (err) {
            props.onError(`Could not find the location: ${cityName}`);
            
        } finally {
            props.setLoading(false);
        }
    };

    return (
        <div className="weather-searcher">
            <div className="weather-searcher-inner">
                <input onChange={(e) => setCityName(e.target.value)} maxLength={34} placeholder="City, State"/>
                <input onClick={fetchWeatherData} type="submit" value="Get Weather"/>
            </div>
        </div>
    );
};