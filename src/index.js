import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

import Loader from "./components/Loader";
import Menu from "./containers/Menu";
import reportWebVitals from "./reportWebVitals";

const About = lazy(() => import("./containers/About"));
const Home = lazy(() => import("./containers/Home"));
// const Skill = lazy(() => import('./containers/Skill'));

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <Router>
      <Menu />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        {/* <Route path="/skill"><Skill /></Route> */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </Suspense>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
