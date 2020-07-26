import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Laptop from "./Components/Laptops/Laptop";
import "./App.css";
import Tablet from "./Components/Tablets/Tablet";
import inOne from "./Components/AllinOne/one";
import Main from "./Components/main/main";
// import Overview from "./Components/Laptops/Componenets/Overview";
// import DeepOs from "./Components/Laptops/Componenets/DeepOs";
// import BuyNow from "./Components/Laptops/Componenets/BuyNow";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Laptop" component={Laptop}></Route>
        {/* <Route exact path="/Laptop">
          THis is the overview
        </Route> */}
        {/* <Route path="/Laptop/Overview" component={Overview} />
        <Route path="/Laptop/DeepOS" component={DeepOs} />
        <Route path="/Laptop/BuyNow" component={BuyNow} /> */}
        <Route exact path="/Tablet" component={Tablet} />
        <Route exact path="/AllinOne" component={inOne} />
      </Switch>
    </Router>
  );
}

export default App;
