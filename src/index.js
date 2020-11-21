import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./containers/Home";
// import Menu from './containers/Menu'
// import Skill from './containers/Skill'
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Home />
    {/* <Skill /> */}
    {/* <Menu /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
