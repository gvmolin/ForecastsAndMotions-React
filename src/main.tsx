import React from "react";
import ReactDOM from "react-dom/client";
import { MyRouter } from "./plugins/router";
import "./index.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { icons } from "./plugins/fontsAwesome";

icons.forEach(icon => library.add(icon));
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MyRouter />
  </React.StrictMode>
);
