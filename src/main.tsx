import React from "react";
import ReactDOM from "react-dom/client";
import { MyRouter } from "./plugins/router";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MyRouter />
  </React.StrictMode>
);
