import React from "react";
import { Route, NavLink, useRouteMatch } from "react-router-dom";
import Overview from "./AIO_Componenets/TabOverview";
import AIODeepOS from "./AIO_Componenets/AIODeepOS";
import AIOBuy from "./AIO_Componenets/AIOBuy";

function InOne() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <section>
        <h2>Deep</h2>
        <ul>
          <li>
            <NavLink to={`${path}`}>Overview</NavLink>
          </li>
          <li>
            <NavLink to={`${path}/DeepOS`}>DeepOS</NavLink>
          </li>
          <li>
            <NavLink to={`${path}/BuyNow`}>Buy Now</NavLink>
          </li>
        </ul>
      </section>
      <Route exact path={`${url}`}>
        <Overview />
      </Route>
      <Route path={`${url}/DeepOS`}>
        <AIODeepOS />
      </Route>
      <Route path={`${url}/BuyNow`}>
        <AIOBuy />
      </Route>
    </div>
  );
}

export default InOne;
