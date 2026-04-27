import "../App.css"

import { useEffect, useState } from "react";

export const WeatherSearcher = (props) => {
    const [cityName, setCityName] = useState("");
    const [dropDownMenu, setDropDownMenu] = useState([]);

    useEffect(() => {
        fetchDropDownCities();
    }, [])

    const fetchDropDownCities = async () => {
        const res = await fetch("https://gist.githubusercontent.com/ahmu83/38865147cf3727d221941a2ef8c22a77/raw/c647f74643c0b3f8407c28ddbb599e9f594365ca/US_States_and_Cities.json")
        const data = await res.json();
        const locations = Object.entries(data);
        const reformatedLocations = [];
        
        for(var location of locations) {
            for(let i = 0; i < location[1].length; i++) {
                reformatedLocations.push(location[1][i] + ", " + location[0])
            }  
        }
        setDropDownMenu(reformatedLocations);
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
                <input type="text" value={cityName} onChange={(e) => setCityName(e.target.value)} maxLength={34} placeholder="City, State"/>
                <input onClick={fetchWeatherData} type="submit" value="Get Weather"/>
            </div>
            <div className="dropdown-menu">
                {dropDownMenu?.filter((dropCityName) => {
                    return cityName !== "" && 
                    dropCityName.toLowerCase().startsWith(cityName.toLowerCase()) && 
                    dropCityName.toLowerCase() !== cityName.toLowerCase();
                })
                .slice(0,10)
                .map((dropCityName) => (
                    <div className="dropdown-item" key={dropCityName} onClick={(e) => {
                        setCityName(dropCityName);
                        console.log(dropCityName);
                    }}>{dropCityName}</div>
                ))}
            </div>
        </div>
    );
};