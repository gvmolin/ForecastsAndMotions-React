import style from "./style.module.scss";

export default function SearchBar ():React.ReactElement {
  return(
    <div 
      className={`
        ${style.defaultBorders} 
        ${style.container}
      `}
    >
      <input type="text" />
      <button>search</button>
    </div>
  );
}