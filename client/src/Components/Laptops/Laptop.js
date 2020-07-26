import React from "react";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import Overview from "./Componenets/Overview";
import DeepOS from "./Componenets/DeepOs";
import BuyNow from "./Componenets/BuyNow";

export default function Laptop() {
  let { path, url } = useRouteMatch();
 
  return (
    <div>
      <>
        <section>
          <h2>DeepinPro</h2>
        </section>
        <section>
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
        </section>
      </>
      <Switch>
        <Route path={`${path}/Overview`} component={Overview} />
        <Route path={`${path}/DeepOS`} component={DeepOS} />
        <Route path={`${path}/BuyNow`} component={BuyNow} />
      </Switch>
    </div>
  );
}
