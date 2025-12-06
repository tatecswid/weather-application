export const WeatherCard = (props) => {

    // Simple title case method taken from Geeks for Geeks: https://www.geeksforgeeks.org/javascript/convert-string-to-title-case-in-javascript/
    function titleCase(s) {
        return s.toLowerCase()
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
    }

    // The weather card that will show the tempurature, the description, and the day of the week
    return (
        <div className="weather-card">
            <img src={ props.iconURL } width={100} height={100} alt=""></img>
            <h1>{ props.temp } °F</h1>
            <h3>{ titleCase(props.description) }</h3>
            <h2>{ props.dayOfWeek }</h2>
        </div>
    );
};