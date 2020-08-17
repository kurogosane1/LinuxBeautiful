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
import Userid from "./Components/User/userid";
import Cart from "./Components/Cart/Cart";
import AuthContextProvider from "./Contexts/AuthContext";
import CartContextProvider from "./Contexts/CartContext";

function App() {
  return (
    <AuthContextProvider>
      <CartContextProvider>
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
            <Route exact path="/user/:id">
              <Userid />
            </Route>

            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
          <Footer className="footer" />
        </Router>
      </CartContextProvider>
    </AuthContextProvider>
  );
}

export default App;
