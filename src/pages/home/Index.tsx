import { Template } from "../../components/Template/Index";
import SearchBar from "../../components/SearchBar/Index";
import style from "./style.module.scss";
import { ForecastField } from "../../components/ForecastField/Index";
import axios from "axios";
import { INITIAL_QUERY, Iquery } from "../../utils/common/interfaces";
import { useEffect, useState } from "react";

export function Home():React.ReactElement {
  //-------------------> DATA
  const [data, setData] = useState({});
  const [query, setQuery] = useState(INITIAL_QUERY);

  //-------------------> fUNCTIONS
  function atualDate():string{
    const date = new Date();
    return date.toLocaleDateString("pt-BR");
  }

  async function getWeather(query:Iquery){
    if (query != INITIAL_QUERY) {
      await axios
        .get(`https://api.open-meteo.com/v1/forecast?latitude=${query.lat}&longitude=${query.lon}&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto`)
        .then(setData);
    }
  }

  //-------------------> WATCH
  useEffect(()=>{
    getWeather(query);
  }, [query]);

  // useEffect(()=>{
  //   console.log(data);
  // }, [data]);

  //-------------------> TEMPLATE
  return (
    <Template>
      <div className={style.container}>
        <h1 style={{margin:0}}>Forecast Motions.</h1>
        <h4 style={{marginTop:0}}>{atualDate()}</h4>
        <SearchBar onSelect={setQuery} />
        <ForecastField location={query} weather={data} />
      </div>
      
    </Template>
  );
}

