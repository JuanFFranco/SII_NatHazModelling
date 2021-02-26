import { hot } from "react-hot-loader/root";
import React from "react";
import "./scss/index.scss";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import MapPage from "./components/MapPage.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <Router basename={"FoodWaste/map"}>
        <Switch>
          <Route exact path='/'>
            <MapPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default hot(App);
