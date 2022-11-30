import { Template } from "../../components/Template/Index";
import SearchBar from "../../components/SearchBar/Index";
import style from "./style.module.scss";
import { ForecastField } from "../../components/ForecastField/Index";

export function Home():React.ReactElement {

  function atualDate():string{
    const date = new Date();
    return date.toLocaleDateString("pt-BR");
  }

  return (
    <Template>
      <div className={style.container}>
        <h1 style={{margin:0}}>Forecast Motions.</h1>
        <h4 style={{marginTop:0}}>{atualDate()}</h4>
        <SearchBar></SearchBar>
        <ForecastField></ForecastField>
      </div>
      
    </Template>
  );
}

