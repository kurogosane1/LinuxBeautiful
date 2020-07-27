import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Importing componenets
import Navbar from "./Components/Navbar/Navbar";
import Laptop from "./Components/Laptops/Laptop";
import Tablet from "./Components/Tablets/Tablet";
import InOne from "./Components/AllinOne/one";
import Main from "./Components/main/main";

// This is for the CSS
import "./App.css";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/Laptop">
          <Laptop />
        </Route>
        <Route path="/Tablet">
          <Tablet />
        </Route>
        <Route path="/AllinOne">
          <InOne />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
