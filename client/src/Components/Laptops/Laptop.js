import React from "react";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import Overview from "./Componenets/Overview";
import DeepOS from "./Componenets/DeepOs";
import BuyNow from "./Componenets/BuyNow";
import Test from "./Componenets/Test";

export default function Laptop() {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <>
        <section>
          <h2>DeepinPro</h2>
        </section>
        <Test data={url} />
      </>
      {/* <Switch>
        <Route exact path={`${path}/Overview`} component={Overview} />
        <Route exact path={`${path}/DeepOS`} component={DeepOS} />
        <Route exact path={`${path}/BuyNow`} component={BuyNow} />
      </Switch> */}
    </div>
  );
}
