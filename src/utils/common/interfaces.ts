export interface Iquery {
  lat: string,
  lon: string,
  name: string,
  country: string,
  admin_area:string
}
export const INITIAL_QUERY = {
  lat: "",
  lon: "",
  name:"",
  country:"",
  admin_area:""
};

export const INITIAL_CODE = {
  code:0, 
  description:"",
  dayIcon:"magnifying-glass",
  nightIcon:"magnifying-glass",
};

export interface IchartData {
  name:string,
  uv:number,
  pv:number,
  amt:number
}
export const INITIAL_CHART_DATA = {
  name: "",
  value: 0,
  temperature:"",
  pv: 0, 
  amt: 0,
}


