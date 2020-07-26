import React from "react";
import { Route, NavLink } from "react-router-dom";
import Overview from "./Componenets/Overview";
import DeepOs from "./Componenets/DeepOs";
import BuyNow from "./Componenets/BuyNow";
import Test from "./Componenets/Test";

export default function Laptop() {
  return (
    <div>
      <>
        <section>
          <h2>DeepinPro</h2>
        </section>
        <div>
          <ul>
            <li>
              <NavLink to="/Laptop/Overview">Overview</NavLink>
            </li>
            <li>
              <NavLink to="/Laptop/DeepOS">DeepOS</NavLink>
            </li>
            <li>
              <NavLink to="/Laptop/BuyNow">BuyNow</NavLink>
            </li>
          </ul>
        </div>
      </>

      <Route path="/Laptop/Overview" component={Overview} />
      <Route path="/Laptop/DeepOS" component={DeepOs} />
      <Route path="/Laptop/BuyNow" component={BuyNow} />
    </div>
  );
}
