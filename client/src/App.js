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
import { Footer } from "./Footer/Footer";
import Login from "./Components/User/Login";
import Signup from "./Components/User/Signup";
import Verify from "./Components/User/Verify";

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
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/passwordverify">
          <Verify />
        </Route>
      </Switch>
      <Footer className="footer" />
    </Router>
  );
}

export default App;
