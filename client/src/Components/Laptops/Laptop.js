import React from "react";
import { Route, NavLink, useRouteMatch } from "react-router-dom";
import Overview from "./Componenets/Overview";
import DeepOs from "./Componenets/DeepOs";
import BuyNow from "./Componenets/BuyNow";
import Option1 from "./Componenets/Option1";
import Option2 from "./Componenets/Option2";
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
              <NavLink to={`${url}`}>Overview</NavLink>
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

      <Route exact path={`${path}`} component={Overview} />
      <Route path={`${path}/DeepOS`} component={DeepOs} />
      <Route exact path={`${path}/BuyNow`} component={BuyNow} />
      <Route exact path={`${path}/BuyNow/Option1`} component={Option1} />
      <Route exact path={`${path}/BuyNow/Option2`} component={Option2} />
    </div>
  );
}
