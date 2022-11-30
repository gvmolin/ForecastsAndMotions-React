import { useState, useEffect } from "react";
import style from "./style.module.scss";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar ():React.ReactElement {

  const [search, setSearch] = useState("");
  const [locations, setLocations] = useState<any[]>([]);

  async function onChangeSearch(e:React.ChangeEvent<HTMLInputElement>):Promise<void>{
    setSearch(e.currentTarget.value);
    await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${search}`)
      .then(res => setLocations(res.data.results));
  }

  function onSearch():void {
    console.log(search);
    
    
  }

  useEffect(()=>{
    console.log(locations);
  }, [locations]);

  return(
    <>
      <div
        className={`
        ${style.defaultBorders} 
        ${style.container}
      `}
      >
        <input type="text" value={search} onChange={onChangeSearch} />
        <button><FontAwesomeIcon icon="magnifying-glass" onClick={onSearch} /></button>
      </div>

      { 
        (locations != undefined && locations.length) ?
          <div>
            <ul>
              {
                locations.map((location, i) => i < 3 && <li key={location.id}><a href={`?lat=${location.latitude}&lon=${location.longitude}`}>{location.name}</a></li>)
              }
            </ul>
          </div> : 
          <></>
      }
    </>

  );
}