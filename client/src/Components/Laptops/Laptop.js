import React from "react";
import { Route, NavLink, useRouteMatch } from "react-router-dom";
import Overview from "./Componenets/Overview";
import DeepOs from "./Componenets/DeepOs";
import BuyNow from "./Componenets/BuyNow";
// import Test from "./Componenets/Test";

export default function Laptop() {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <>
        <section>
          <h2>DeepinPro</h2>
        </section>
        <div>
          <ul>
            <li>
              <NavLink to={`${url}/Overview`}>Overview</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/DeepOS`}>DeepOS</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/BuyNow`}>BuyNow</NavLink>
            </li>
          </ul>
        </div>
      </>

      <Route path={`${path}/Overview`} component={Overview} />
      <Route path={`${path}/DeepOS`} component={DeepOs} />
      <Route path={`${path}/BuyNow`} component={BuyNow} />
    </div>
  );
}
