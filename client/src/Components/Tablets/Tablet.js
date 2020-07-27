import React from "react";
import { Route, NavLink, useRouteMatch } from "react-router-dom";
import TabOverview from "./TabletComponents/TabOverview";
import TabDeepOS from "./TabletComponents/TabDeepOS";
import TabBuyNow from "./TabletComponents/TabBuyNow";

export default function Tablet() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <section>
        <h2>This is Bubble</h2>
        <ul>
          <li>
            <NavLink to={`${url}`}>Overview</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/BubbleOS`}>BubbleOS</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/BuyNow`}>BuyNow</NavLink>
          </li>
        </ul>
      </section>
      <Route exact path={`${path}`}>
        <TabOverview />
      </Route>
      <Route path={`${path}/BubbleOS`}>
        <TabDeepOS />
      </Route>
      <Route path={`${path}/BuyNow`}>
        <TabBuyNow />
      </Route>
    </div>
  );
}
