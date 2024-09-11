import { useWeather } from "../context/Weather";


let Input = (props) => {
    const weather = useWeather();
    console.log(weather);
    return (
        <div>
            <input className = "input" placeholder= {props.placeholder} value = {weather.searchCity} onChange={(e) => {weather.setSearchCity(e.target.value)}}/>
        </div>
    )
}

export default Input;