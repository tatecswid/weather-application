export const WeatherCard = (props) => {

    // Simple title case method taken from Geeks for Geeks
    function titleCase(s) {
        return s.toLowerCase()
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
    }

    return (
        <div className="weather-card">
            <img src={ props.iconURL } width={50} height={50}></img>
            <h1>{ props.temp } °F</h1>
            <h3>{ titleCase(props.description) }</h3>
        </div>
    );
};