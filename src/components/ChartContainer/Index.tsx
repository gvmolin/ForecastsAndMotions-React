import React, { useEffect } from "react";
import style from "./style.module.scss";
import { useState } from "react";
import { LineChart, Line, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { INITIAL_CHART_DATA } from "../../utils/common/interfaces";

export default function ChartContainer (props:{chartData:any}):React.ReactElement {
  const [chartData, setChartData] = useState([INITIAL_CHART_DATA]);

  function mountChartData(data:any){
    const dateNow = new Date();
    const initIndex = data.hourly.time.findIndex((time:string) => {
      const formatedTime = new Date(time);
      return formatedTime.getHours() === dateNow.getHours() && 
      formatedTime.getDate() === dateNow.getDate();
    })

    const arr = []
    for(let i = initIndex; i < initIndex + 12; i++){
      const hour = `${new Date(data.hourly.time[i]).getHours()}h` 
      arr.push({
        name:hour,
        value:data.hourly.temperature_2m[i],
        temperature: `${data.hourly.temperature_2m[i]}°C`,
        pv:1000,
        amt:2400,
      })
    }
    setChartData(arr);
  }

  useEffect(()=>{
    props.chartData.data && mountChartData(props.chartData.data)
  }, [props])

  return(
    <div 
      className={`
        ${style.defaultBorders}
        ${style.container}
      `}
      style={{ position:"relative"}}
    >
      <h2>Temperature(°C) / Time</h2>
      <div style={{ position:"absolute", left:-30, width:"90%"}} >
        <LineChart width={370} height={220} data={chartData} >
          <Line type="monotone" dataKey="value" stroke="#000" />
          <CartesianGrid stroke="#000" strokeDasharray="15 15" />
          <Tooltip />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </div>
    </div>
  );
}