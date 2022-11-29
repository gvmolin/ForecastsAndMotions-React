import style from "./style.module.scss";

interface Iprops {
  children: React.ReactElement
}

export function Template(props:Iprops):React.ReactElement {

  return (
    <div className={style.container}>
      <section>
        {props.children}
      </section>
      
    </div>
  );
}