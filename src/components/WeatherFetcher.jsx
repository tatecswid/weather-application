import { useState } from "react";

export const WeatherFetcher = () => {
    const [cityName, setCityName] = useState("");

    const fetchLocationData = async () => {
        const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`);
        const data = await res.json();
        const lat = data[0].lat;
        const lon = data[0].lon;
        await fetchWeatherData(lat, lon);
    }

    const fetchWeatherData = async (lat, lon) => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`);
        const data = await res.json();
        console.log(data);
    }

    return (
        <div>
            <input onChange={(e) => setCityName(e.target.value)} placeholder="Enter city name"/>
            <input onClick={fetchLocationData} type="submit" value="Get Weather"/>
        </div>
    );
};