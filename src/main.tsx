import React from "react";
import ReactDOM from "react-dom/client";
import { MyRouter } from "./plugins/router";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MyRouter />
  </React.StrictMode>
);
