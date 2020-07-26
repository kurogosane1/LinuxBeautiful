import React from "react";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
export default function Test() {
  // console.log(data);
//   let url = data;
  return (
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
  );
}
