import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

export default function Userid() {
  const [hastoken, setToken] = useState(true);
  const history = useHistory();
  useEffect(() => {
    let token = localStorage.getItem("token");

    if (!token) {
      console.log(token);
      setToken(false);
      history.push("/Login");
    } else {
      setToken(true);
    }
  }, [hastoken,history]);

  let match = useRouteMatch();
  // console.log(match);
  return (
    <div>
      <h2>This is the user details</h2>
      <h2>This is coming from {match.params.id}</h2>
    </div>
  );
}
