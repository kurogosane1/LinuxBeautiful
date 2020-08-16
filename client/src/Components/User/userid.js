import React from "react";
import { useRouteMatch } from "react-router-dom";

export default function Userid() {
    let match = useRouteMatch();
    console.log(match);
  return (
    <div>
      <h2>This is the user details</h2>
      <h2>This is coming from {match.params.id}</h2>
    </div>
  );
}
