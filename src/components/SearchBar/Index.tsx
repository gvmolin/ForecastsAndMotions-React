import { useEffect, useState } from "react";
import style from "./style.module.scss";
import axios from "axios";
import { Iquery } from "../../utils/common/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Iprops {
  onSelect: React.Dispatch<Iquery>
}

export default function SearchBar (props:Iprops):React.ReactElement {
  const [search, setSearch] = useState("");
  const [locations, setLocations] = useState<any[]>([]);

  async function onChangeSearch(e:React.ChangeEvent<HTMLInputElement>):Promise<void>{
    setSearch(e.currentTarget.value);
    await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${search}`)
      .then(res => setLocations(res.data.results));
  }

  // useEffect(()=>{
  //   console.log(locations);
  // },[locations]);

  return(
    <>
      <div
        className={`
        ${style.defaultBorders} 
        ${style.container}
      `}
      >
        <input type="text" value={search} onChange={onChangeSearch} />
        <button><FontAwesomeIcon icon="magnifying-glass"/></button>
      </div>

      { 
        (locations != undefined && locations.length) ?
          <div className={style.resultContainer}>
            <ul>
              {
                locations.map((location, i) => i < 3 && 
                  <li key={location.id} className={style.defaultBorders}>
                    <button onClick={() => props.onSelect({
                      lat:location.latitude, 
                      lon: location.longitude,
                      name: location.name,
                      country: location.country,
                      admin_area:location.admin1
                    })}> 
                      {location.name} 
                    </button>
                  </li>
                )
              }
            </ul>
          </div> : 
          <></>
      }
    </>

  );
}