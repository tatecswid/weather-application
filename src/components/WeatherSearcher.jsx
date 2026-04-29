import "../App.css"

import { useEffect, useState } from "react";

export const WeatherSearcher = (props) => {
    const [cityName, setCityName] = useState("");
    const [dropDownMenu, setDropDownMenu] = useState([]);
    
    const fetchDropDownData = async (letters) => {
        const res = await fetch(`/.netlify/functions/dropdown?letters=${letters.trim()}`);
        const dropDownData = await res.json();
        setDropDownMenu(dropDownData.filteredLocations);
        console.log(dropDownData);
    }

    const fetchWeatherData = async () => {
        props.resetErrorState();

        try {
            props.setLoading(true);
            const res = await fetch(`/.netlify/functions/weather?city=${cityName}`);

            if(!res.ok) {
                throw new Error("Failed to fetch weather data");
            }

            const weatherData = await res.json();

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
                <input type="text" value={cityName} onChange={(e) => {
                    setCityName(e.target.value);
                    fetchDropDownData(e.target.value);
                }}
                onKeyDown={(e) => e.key === "Enter" && fetchWeatherData() } maxLength={34} placeholder="City, State"/>
                <input onClick={fetchWeatherData} type="submit" value="Get Weather"/>
            </div>
            <div className="dropdown-menu">
                {Array.isArray(dropDownMenu) && dropDownMenu?.map((dropCityName) => (
                    <div className="dropdown-item" key={dropCityName} onClick={(e) => {
                        setCityName(dropCityName);
                        fetchDropDownData(dropCityName);
                    }}>{dropCityName}</div>
                ))}
            </div>
        </div>
    );
};