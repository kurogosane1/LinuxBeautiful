import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";

export default function Login(props) {
  const [user, setUser] = useState({});
  let history = useHistory();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const loginAccess = (e) => {
    e.preventDefault();
    axios
      .post("/Login", user)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        history.push(`/user/${res.data.id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <label>Please sign in</label>
      <form onSubmit={loginAccess}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Deepin Id"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <span>
            Your Deepin ID is the email address you use to sign in to the App
            Store
          </span>
        </div>
        <div>
          <input type="submit" value="Sign In" />
        </div>
      </form>
      <br />
      <div>
        <NavLink to="/signup">
          <label>Don't have a Deep ID? Create one now</label>
        </NavLink>
      </div>
    </div>
  );
}
