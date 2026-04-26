export async function handler(event) {
    try {
        const cityName = event.queryStringParameters.city;

        const geoRes = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName},us&limit=5&appid=${process.env.OPENWEATHER_API_KEY}`);
        const geoData = await geoRes.json();
        const { lat, lon, name, state } = geoData[0];

        const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY}&units=imperial`);
        const weatherData = await weatherRes.json();
        const filteredForecast = weatherData.list.filter( item => item.dt_txt.includes("18:00:00") );
        filteredForecast.map(e => {
            e.day_name = toDayOfWeek(e.dt_txt);
            e.main.temp = e.main.temp;
        })

        return {
            statusCode: 200,
            body: JSON.stringify({
                city: name,
                state: state,
                forecast: filteredForecast,
                currentWeather: sortCurrentWeatherData(weatherData.list[0]),
            })
        };

    } catch(err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "something went wrong..."} )
        };
    }
};

function sortCurrentWeatherData(currentWeatherData) {
    return {
        temp: currentWeatherData.main.temp,
        feels_like: currentWeatherData.main.feels_like,
        description : currentWeatherData.weather[0].description,
        visibility : (currentWeatherData.visibility / 1609).toFixed(1),
        humidity : currentWeatherData.main.humidity,
        wind_speed : currentWeatherData.wind.speed,
        day_name : toDayOfWeek(currentWeatherData.dt_txt),
    };
}

const toDayOfWeek = (date) => {
    const dateObject = new Date(date);
    const day = dateObject.getDay();
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfTheWeek[day];
}