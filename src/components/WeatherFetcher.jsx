import { useState } from "react";

export const WeatherFetcher = (props) => {
    const [cityName, setCityName] = useState("");

    const fetchWeatherData = async () => {
        props.resetErrorState();

        try {
            props.setLoading(true);
            const res = await fetch(`/.netlify/functions/weather?city=${cityName}`);
            const weatherData = await res.json();
            console.log(weatherData)
            props.onCityFetched([weatherData.city, weatherData.state]);
            props.onWeatherFetched(weatherData.forecast);
        } 
        catch (err) {
            props.onError(`Could not find the location: ${cityName}`);
            
        } finally {
            props.setLoading(false);
        }
    };

    return (
        <div className="weather-fetcher">
            <input onChange={(e) => setCityName(e.target.value)} maxLength={34} placeholder="City, State"/>
            <input onClick={fetchWeatherData} type="submit" value="Get Weather"/>
        </div>
    );
};