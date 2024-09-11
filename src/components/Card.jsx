import { useWeather } from "../context/Weather";


let Card = (props) => {
    const weather = useWeather();
    return  (
        <div className="card">
            <img src = {weather.data?.current?.condition?.icon} alt = "trying"/>
            <h2> {weather.data?.current?.temp_c} C </h2>
            <h3> {weather.data?.location?.name}, {weather.data?.location?.region}, {weather.data?.location?.country} </h3>
        </div>
    )
}

export default Card;