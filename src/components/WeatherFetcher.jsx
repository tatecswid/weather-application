import { useState } from "react";

export const WeatherFetcher = (props) => {
    const [cityName, setCityName] = useState("");

    /* fetch coordinates of the city */
    const fetchCoordinates = async () => {
        props.resetErrorState();

        try {
            props.setLoading(true);
            const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName},us&limit=5&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`);
            const locationData = await res.json();
            props.onCityFetched([locationData[0].name, locationData[0].state]);

            const lat = locationData[0].lat;
            const lon = locationData[0].lon;
            await fetchWeatherData(lat, lon);
        } catch (err) {
            props.onError(`Could not find the location: ${cityName}`);
            props.setLoading(false);
        }
    }

    /* fetch the five day weather forecast at 18:00:00 UST */
    const fetchWeatherData = async (lat, lon) => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`);
        const data = await res.json();
        const fiveDayForecast = data.list;
        const fiveDayForecastAtNoon = fiveDayForecast.filter(weather => {
            return weather.dt_txt.includes("18:00:00");
        });
        props.onWeatherFetched(fiveDayForecastAtNoon);
        props.setLoading(false);
    }

    // The input to enter the city and the button to submit
    return (
        <div className="weather-fetcher">
            <input onChange={(e) => setCityName(e.target.value)} maxLength={34} placeholder="City, State"/>
            <input onClick={fetchCoordinates} type="submit" value="Get Weather"/>
        </div>
    );
};