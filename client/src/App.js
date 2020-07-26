import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Laptop from "./Components/Laptops/Laptop";
import "./App.css";
import Tablet from "./Components/Tablets/Tablet";
import inOne from "./Components/AllinOne/one";
import Main from "./Components/main/main";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/Laptop">
          <Laptop />
        </Route>
        <Route path="/Tablet" component={Tablet} />
        <Route path="/AllinOne" component={inOne} />
      </Switch>
    </Router>
  );
}

export default App;
