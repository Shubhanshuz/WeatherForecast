import {createContext, useContext, useState} from 'react';
import { getWeatherData, getWeatherDataPosition } from '../api';

const WeatherContext = createContext(null);

export const useWeather = () => {
    return useContext(WeatherContext);
}


export const WeatherProvider = (props) => {
    const [data,setData] = useState(null);
    const [searchCity, setSearchCity] = useState(null);

    const fetchData = async () => {
        const response = await getWeatherData(searchCity);
        setData(response);
    }

    const fetchUserLocationData = () => {
        navigator.geolocation.getCurrentPosition((pos) => {
            getWeatherDataPosition(pos.coords.latitude,pos.coords.longitude).then((data) => setData(data));
        })
    }
    


    return (
        <WeatherContext.Provider value={{searchCity,data,setSearchCity,fetchData, fetchUserLocationData}}>
            {props.children}
        </WeatherContext.Provider>
    );
}