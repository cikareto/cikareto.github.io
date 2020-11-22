import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./index.css";
import Menu from './containers/Menu'
import About from './containers/About'
// import Skill from './containers/Skill'
import Home from "./containers/Home";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Router>
    <Menu />
    <Switch>
      <Route path="/about"><About /></Route>
      {/* <Route path="/skill"><Skill /></Route> */}
      <Route path="/"><Home /></Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
