
import style from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ForecastField():React.ReactElement {
  return (
    <div 
      className={`
        ${style.defaultBorders}
        ${style.container}
      `}>
      <h2>São Paulo - SP</h2>
      <h3>Brasil</h3>
      <h1><FontAwesomeIcon icon="cloud" /></h1>
      <h1 className={style.temperature}>22°C</h1>

      <h3>Cloudy</h3>
      <h3>Max:24°C / Min:20°C</h3>
    </div>
      
    
  );
}