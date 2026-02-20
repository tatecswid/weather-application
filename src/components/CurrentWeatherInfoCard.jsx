export const CurrentWeatherInfoCard = (props) => {
    return (
        <div>
            <div className="current-weather-card">
                <div className="top-row">
                    <div className="location">
                        <h1>{props.city}, {props.state}</h1>
                    </div>
                    <div className="day">
                        <h2>{props.dayName}</h2>
                    </div>
                </div>
                <div className="bottom-row">
                    <div className="temperature-section">
                        <h1 className="main-temp">{props.currentTemp} °F</h1>
                        <h2 className="description">{props.description}</h2>
                        <h3 className="feels-like">
                            Feels like {props.feelsLike} °F
                        </h3>
                    </div>
                    <div className="details-section">
                        <h3>Humidity: {props.humidity}%</h3>
                        <h3>Wind: {props.windSpeed} mph</h3>
                        <h3>Visibility: {props.visibility} mi</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};