//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
//import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <Header className="App-header"  />
      {/* <NavBar />
      <Switch>
        <Route exact path="/">
          <Component1 />
        </Route>

        <Route path="/path2">
        <Component2 />
        </Route>

        <Route path="/path3/:id">
        <Component3 />
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;
