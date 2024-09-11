import './App.css';
import Inputs from './components/Inputs';
import Buttons from './components/Buttons';
import Card from './components/Card';
import { useWeather } from './context/Weather';
import { useEffect } from 'react';

function App() {
  const weather = useWeather();

  useEffect(() => {
    weather.fetchUserLocationData();
  },[]);

  let reload = () => {
    window.location.reload();
  }

  return (
    <div className='container'>
      <div className='app'>
      <h1> Weather Forecast </h1>
      <div className='search'>
      <Inputs placeholder = "Search City"/>
      <Buttons type = "Search" onClick = {weather.fetchData}/>
      </div>
      <Card />
      <Buttons type = "Refresh" onClick = {reload}/>
    </div>
    </div>
  );
}

export default App;
