import { useState } from "react";

export const WeatherFetcher = (props) => {
    const [cityName, setCityName] = useState("");

    const fetchCoordinates = async () => {
        const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`);
        const locationData = await res.json();
        const lat = locationData[0].lat;
        const lon = locationData[0].lon;
        await fetchWeatherData(lat, lon);
    }

    const fetchWeatherData = async (lat, lon) => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`);
        const data = await res.json();
        const fiveDayForecast = data.list;
        const fiveDayForecastAtNoon = fiveDayForecast.filter(weather => {
            return weather.dt_txt.includes("18:00:00");
        });
        console.log(fiveDayForecastAtNoon);
        props.onWeatherFetched(fiveDayForecastAtNoon);
    }

    return (
        <div>
            <input onChange={(e) => setCityName(e.target.value)} placeholder="Enter city name"/>
            <input onClick={fetchCoordinates} type="submit" value="Get Weather"/>
        </div>
    );
};