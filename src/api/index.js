const baseURL = "https://api.weatherapi.com/v1/current.json?key=01684207aa824259a3885120241109";

export const getWeatherData = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await response.json();
}

export const getWeatherDataPosition = async (lat,lon) => {
    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
    return await response.json();
}