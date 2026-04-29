let cachedLocations = null;

export async function handler(event) {
    try {
        const locations = await fetchDropDownCities();
        const filteredLocations = locations.filter((location) => {
            if(event.queryStringParameters.letters == "") return false;
            return location.toLowerCase().startsWith(event.queryStringParameters.letters.toLowerCase());
        }).slice(0, 10);
        return {
            statusCode: 200,
            body: JSON.stringify({ filteredLocations })
        }
    }
    catch(err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "something went wrong" })
        }
    }
}


const fetchDropDownCities = async () => {
    if(cachedLocations) return cachedLocations;

    const res = await fetch("https://gist.githubusercontent.com/ahmu83/38865147cf3727d221941a2ef8c22a77/raw/c647f74643c0b3f8407c28ddbb599e9f594365ca/US_States_and_Cities.json")
    const data = await res.json();
    const locations = Object.entries(data);
    const reformattedLocations = [];
        
    for(var location of locations) {
        for(let i = 0; i < location[1].length; i++) {
            reformattedLocations.push(location[1][i] + ", " + location[0]);
        }
    }
    
    cachedLocations = reformattedLocations;
    return cachedLocations;
}