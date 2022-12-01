import React from "react";
import style from "./style.module.scss";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

export default function ChartContainer ():React.ReactElement {
  const data = [{name: "Page A", uv: 400, pv: 2400, amt: 2400}, {name: "Page B", uv: 700, pv: 1000, amt: 1000}, {name: "Page C", uv: 600, pv: 1000, amt: 1000}, {name: "Page D", uv: 700, pv: 1000, amt: 1000}, {name: "Page E", uv: 100, pv: 1000, amt: 1000}, {name: "Page F", uv: 1000, pv: 1000, amt: 1000}, {name: "Page G", uv: 700, pv: 1000, amt: 1000}];
  return(
    <div className={`
      ${style.defaultBorders}
      ${style.container}
    `}>
      <div style={{ display:"flex", justifyContent:"center" }}>
        <LineChart width={350} height={220} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#000" />
          <CartesianGrid stroke="#000" strokeDasharray="15 15" />
          <Tooltip />
        </LineChart>
        
      </div>
      
    </div>
  );
}