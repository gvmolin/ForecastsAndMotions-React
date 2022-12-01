/* eslint-disable no-unsafe-optional-chaining */
import style from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { INITIAL_CODE, Iquery } from "../../utils/common/interfaces";
import weatherCodes from "../../utils/weatherCodes.json";
import { useEffect, useState } from "react";

export function ForecastField(props:{location:Iquery, weather:any}):React.ReactElement {

  const [weatherInfo, setWeatherInfo] = useState([INITIAL_CODE]);
  const [currentCode, setCurrentCode] = useState(INITIAL_CODE);
  const [minMax, setMinMax] = useState({min:0, max:0});

  useEffect(()=>{
    console.log(props);
    const result = weatherInfo.find(element => element.code === props.weather.data?.current_weather.weathercode);
    result && setCurrentCode(result);

    props.weather.data && setMinMax({
      min: Math.min(...props.weather.data?.daily.temperature_2m_min),
      max: Math.max(...props.weather.data?.daily.temperature_2m_max)
    });
  }, [props]);

  useEffect(()=>{
    setWeatherInfo(weatherCodes);
  }, []);

  return (
    <div 
      className={`
        ${style.defaultBorders}
        ${style.container}
      `}>
      <h2>{props.location.name} - {props.location.admin_area}</h2>
      <h3>{props.location.country}</h3>
      <h1><FontAwesomeIcon icon="cloud" /></h1>
      <h1 className={style.temperature}>{props.weather && props.weather.data?.current_weather.temperature}°C</h1>

      <h3>{currentCode.description}</h3>
      <h3>Max: {minMax.max}°C / Min: {minMax.min}°C </h3>
    </div>
      
    
  );
}