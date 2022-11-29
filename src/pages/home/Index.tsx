import style from "./style.module.scss";
import { Template } from "../../components/Template/Index";
import SearchBar from "../../components/SearchBar/Index";

export function Home():React.ReactElement {

  return (
    <Template>
      <SearchBar></SearchBar>
    </Template>
  );
}

