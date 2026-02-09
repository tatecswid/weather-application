export async function handler(event) {
    try {
        const cityName = event.queryStringParameters.city;

        const geoRes = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName},us&limit=5&appid=${process.env.OPENWEATHER_API_KEY}`);
        const geoData = await geoRes.json();
        const { lat, lon, name, state } = geoData[0];

        const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY}`);
        const weatherData = await weatherRes.json();
        const filteredForecast = weatherData.list.filter( item => item.dt_txt.includes("18:00:00") );

        return{
            statusCode: 200,
            body: JSON.stringify({
                city: name,
                state: state,
                forecast: filteredForecast,
            })
        };

    } catch(err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "something went wrong..."} )
        };
    }
};